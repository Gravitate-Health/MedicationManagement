import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MedAdministrationDataSource} from '../datasources';
import {MedAdministration, MedAdministrationRelations} from '../models';

export class MedAdministrationRepository extends DefaultCrudRepository<
  MedAdministration,
  typeof MedAdministration.prototype.id,
  MedAdministrationRelations
> {
  constructor(
    @inject('datasources.MedAdministration') dataSource: MedAdministrationDataSource,
  ) {
    super(MedAdministration, dataSource);
  }
}
