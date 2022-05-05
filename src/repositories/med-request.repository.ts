import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MedRequestDataSource} from '../datasources';
import {MedRequest, MedRequestRelations} from '../models';

export class MedRequestRepository extends DefaultCrudRepository<
  MedRequest,
  typeof MedRequest.prototype.id,
  MedRequestRelations
> {
  constructor(
    @inject('datasources.MedRequest') dataSource: MedRequestDataSource,
  ) {
    super(MedRequest, dataSource);
  }
}
