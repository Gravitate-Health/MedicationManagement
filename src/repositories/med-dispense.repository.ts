import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MedDispenseDataSource} from '../datasources';
import {MedDispense, MedDispenseRelations} from '../models';

export class MedDispenseRepository extends DefaultCrudRepository<
  MedDispense,
  typeof MedDispense.prototype.id,
  MedDispenseRelations
> {
  constructor(
    @inject('datasources.MedDispense') dataSource: MedDispenseDataSource,
  ) {
    super(MedDispense, dataSource);
  }
}
