import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MedUsageDataSource} from '../datasources';
import {MedUsage, MedUsageRelations} from '../models';

export class MedUsageRepository extends DefaultCrudRepository<
  MedUsage,
  typeof MedUsage.prototype.id,
  MedUsageRelations
> {
  constructor(
    @inject('datasources.MedUsage') dataSource: MedUsageDataSource,
  ) {
    super(MedUsage, dataSource);
  }
}
