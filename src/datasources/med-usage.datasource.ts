// Copyright 2022 Universidad Politécnica de Madrid
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MedUsage',
  connector: 'mongodb',
  url: process.env.DB_URL + "MedUsage" + "?replicaSet=rs0",
  host: process.env.DB_HOST || 'localhost',
  port: 27017,
  user: "",
  password: "",
  database: "MedUsage",
  useNewUrlParser: true,
  protocol: 'mongodb+srv'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MedUsageDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MedUsage';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MedUsage', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
