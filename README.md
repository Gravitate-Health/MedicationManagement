
Gravitate-Health G-Lens: Medication Management.
=================================================

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

APIs generated using LoopBack 4 CLI with the  initial project layout.

Table of contents
-----------------

- [Gravitate-Health G-Lens: Medication Management.](#gravitate-health-g-lens-medication-management)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
    - [Local installation](#local-installation)
      - [Step 1: Clone the workspace](#step-1-clone-the-workspace)
      - [Step 2: Install all the dependencies](#step-2-install-all-the-dependencies)
    - [Kubernetes deployment](#kubernetes-deployment)
  - [Usage](#usage)
    - [Step 1: Run the application](#step-1-run-the-application)
    - [Step 2: Access through the browser](#step-2-access-through-the-browser)
    - [Step 3:  Different endpoints](#step-3--different-endpoints)
  - [Known issues and limitations](#known-issues-and-limitations)
  - [Getting help](#getting-help)
    - [Loopback documentation](#loopback-documentation)
    - [FHIR Models](#fhir-models)
  - [Contributing](#contributing)
  - [License](#license)
  - [Authors and history](#authors-and-history)
  - [Acknowledgments](#acknowledgments)


Introduction
------------
This repository contains the configuration and deployment files needed for the "G-Lens: Medication IManagement" module.
This module handles Medication Administration, Dispense, Request and Usage models, following the HL7-FHIR interoperability standard.

This application is generated using LoopBack 4 CLI with the initial project layout.

This readme will help the reader to deploy the system, but also to understand the configuration and be able to edit/expand it.

Installation
------------
### Local installation

#### Step 1: Clone the workspace
```bash
git clone https://github.com/Gravitate-Health/MedicationManagement.git
```
#### Step 2: Install all the dependencies

```bash
cd MedicationManagement
```

By default, dependencies were installed when this application was generated.
Whenever dependencies in package.json are changed, run the following command:

```bash
npm install
```

To only install resolved dependencies in package-lock.json:
```bash
npm ci
```

### Kubernetes deployment

For the Kubernetes deployment first of all, the module must be compiled into a docker image and uploaded into a registry accessible by the Kubernetes cluster, the MongoDB is pulled from the official [docker registry](https://hub.docker.com/_/mongo).

```bash
git clone https://github.com/Gravitate-Health/MedicationManagement.git
cd MedicationManagement

docker build . -t <docker-registry>/med-management:latest
docker push <docker-registry>/med-management:latest
```

The name of the image is specified in the medication management module deployment file, [004_med-management-deployment.yaml](YAMLs/004_med-management-deployment.yaml). In that file you can also specify a registry secret in case the registry is behind authorization. Here is the documentation regarding [private registries](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/).

Both the deployment files for the MongoDB and the medication information module contain several environment variables which can be modified. These environment variables are the ones we used, but the configuration allows for much more.

- Mongo environment variables

| Environment Variable     | description                                   | default                                                 |
|--------------------------|-----------------------------------------------|---------------------------------------------------------|
| MONGO_SIDECAR_POD_LABELS | Labels to be applied to the sidecar container | role=mongo-med-management,name=mongo-med-management |
| KUBE_NAMESPACE           | Namespace where the Mongo is deployed         | development                                             |

- Medication management module environment variables

| Environment Variable | description                  | default                                |
|----------------------|------------------------------|----------------------------------------|
| DB_HOST              | Database host                | mongo-med-management                 |
| DB_URL               | Full database connection URL | mongodb://mongo-med-management:27017/ |

The next step is to apply the Kubernetes files in the cluster, the services will be deployed in the development namespace. In case the namespace has not been created before you can create it with the following commands, or change the name in `metadata.namespace`:

First we deploy the database:

```bash
kubectl create namespace <namespace>                         # Only if namespace not created and/or the current context
kubectl config set-context --current --namespace=<namespace> # Only if namespace not created and/or the current context

kubectl apply -f YAMLs/001_mongo-service-med-management.yaml
kubectl apply -f YAMLs/002_mongo-stateful-med-management.yaml
```

Once the database is ready the medication management module can be deployed, you can check if the database is ready by running:

```bash
kubectl get pod | grep "mongo-med-management"
```
```bash
NAMESPACE            NAME                             READY   STATUS    RESTARTS        AGE
<namespace>          mongo-med-management-2           2/2     Running   0               13d
<namespace>          mongo-med-management-0           2/2     Running   0               13d
<namespace>          mongo-med-management-1           2/2     Running   0               13d
```

If the status is running proceed with the medication management module deployment:

```bash
kubectl apply -f YAMLs/003_med-management-service.yaml
kubectl apply -f YAMLs/004_med-management-deployment.yaml
```

You can check if the deployment is ready by running:

```bash
kubectl get pod | grep "med-management"
```
```bash
NAMESPACE            NAME                                      READY   STATUS    RESTARTS        AGE
<namespace>          med-management-dc88dd545-bvbnb            1/1     Running   0               13d
```
If the pod is ready you can access the service by other services in the same namespace by using the name of its Kubernetes service and the port (especified in [003_med-management-service.yaml](YAMLs/003_med-management-service.yaml)). You can also obtain both by running the following commands:

```bash
kubectl get svc | grep "med-management"
```
```bash
NAME                                TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)             AGE
med-management                      ClusterIP   10.152.183.78    <none>        3000/TCP            39d
```

The type of the service is _ClusterIP_ which means that the service can only be accessed from inside the cluster. Moreover, if the Kubernetes cluster has a DNS manager other services can access services in other namespaces using the following URL: ```http://<service-name>.<namespace>.svc.cluster.local```. To learn more about the types of services and its uses in Kubernetes, here is the [official documentation](https://kubernetes.io/docs/concepts/services-networking/). Alternatively if the [Gateway](https://github.com/Gravitate-Health/Gateway) has been deployed, the service will be proxied to the outside of the cluster at `https://<DNS>/med-management/`.

Usage
-----
### Step 1: Run the application
Inside the directory, run the following command:
```bash
npm start
```
### Step 2: Access through the browser
Open http://127.0.0.1:3000 in your browser, preferably Google Chrome, in private or incognito mode.

### Step 3:  Different endpoints

Some of the most useful enpoints are listed below:

For every endpoint, change 'PATH' with the following:
- med-requests
- med-dispenses
- med-administrations
- med-usages

POST request, adds a new object to the G-Lens DB:

    https://gravitate-health.lst.tfo.upm.es/med-management/PATH

GET request, returns the count of the objects stored in the DB:

    https://gravitate-health.lst.tfo.upm.es/med-management/PATH/count

GET request, returns the list of the objects stored in the DB:

    https://gravitate-health.lst.tfo.upm.es/med-management/PATH

PATCH request, updates the object that matches the body of the request:

    https://gravitate-health.lst.tfo.upm.es/med-management/PATH

GET request, returns a single object with ID <id>:

    https://gravitate-health.lst.tfo.upm.es/med-management/PATH/<id>

PATCH request, updates the object with ID <id>:

    https://gravitate-health.lst.tfo.upm.es/med-management/PATH/<id>

PUT request, replaces the object with ID <id>:

    https://gravitate-health.lst.tfo.upm.es/med-management/PATH/<id>

DEL request, deletes the object with ID <id>:

    https://gravitate-health.lst.tfo.upm.es/med-management/PATH/<id>

For further details check the [openapi](openapi.json)

Known issues and limitations
----------------------------
None are known at this time

Getting help
------------

In case you find a problem or you need extra help, please use the issues tab to report the issue.

Also you can check the following documentation

### Loopback documentation

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.



### FHIR Models

Please check out the FHIR Models used for the definition of Loopback Models.
- [FHIR Medication Request Model](https://build.fhir.org/medicationrequest.html)
- [FHIR Medication Dispense Model](https://build.fhir.org/medicationdispense.html)
- [FHIR Medication Administration Model](https://build.fhir.org/medicationadministration.html)
- [FHIR Medication Usage Model](https://build.fhir.org/medicationusage.html)

Contributing
------------
To contribute, fork this repository and send a pull request with the changes squashed.

License
-------

This project is distributed under the terms of the [Apache License, Version 2.0 (AL2)](http://www.apache.org/licenses/LICENSE-2.0).  The license applies to this file and other files in the [GitHub repository](https://github.com/Gravitate-Health/Gateway) hosting this file.

```
Copyright 2022 Universidad Politécnica de Madrid

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

Authors and history
---------------------------
- Óscar Ansótegui ([@oansotegui](https://github.com/oansotegui))
- Álvaro Belmar ([@abelmarm](https://github.com/abelmarm))

Acknowledgments
---------------

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

