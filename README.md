
Gravitate-Health G-Lens: Medication Management.
=================================================

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

APIs generated using LoopBack 4 CLI with the  initial project layout.

Table of contents
-----------------

* [Introduction](#introduction)
* [Installation](#installation)
    - [Local installation](#local-installation)
    - [Kubernetes deployment](#kubernetes-deployment)
* [Usage](#usage)
* [Known issues and limitations](#known-issues-and-limitations)
* [Getting help](#getting-help)
* [Contributing](#contributing)
* [License](#license)
* [Authors and history](#authors-and-history)
* [Acknowledgments](#acknowledgments)


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
git clone https://github.com/Gravitate-Health/ REPOSITORIO
```
#### Step 2: Install all the dependencies

```bash
cd REPOSITORIO
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

Usage
-----
###Step 1: Run the application
Inside the directory, run the following command:
```bash
npm start
```
###Step 2: Access through the browser
Open http://127.0.0.1:3000 in your browser, preferably Google Chrome, in private or incognito mode.

###Step 3:  Different endpoints

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


Known issues and limitations
----------------------------
None are known at this time

Getting help
------------

In case you find a problem or you need extra help, please use the issues tab to report the issue.

Also you can check the following documentation

###Loopback documentation

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.



###FHIR Models

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

Acknowledgments
---------------

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

