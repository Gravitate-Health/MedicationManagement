import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MedDispense',
  connector: 'mongodb',
  url: process.env.DB_URL + "MedDispense" + "?replicaSet=rs0",
  host: process.env.DB_HOST || 'localhost',
  port: 27017,
  user: "",
  password: "",
  database: "MedDispense",
  useNewUrlParser: true,
  protocol: 'mongodb+srv'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MedDispenseDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MedDispense';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MedDispense', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
