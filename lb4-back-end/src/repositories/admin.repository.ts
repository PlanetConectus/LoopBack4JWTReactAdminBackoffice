import {DefaultCrudRepository} from '@loopback/repository';
import {Admin, AdminRelations} from '../models';
import {InmemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AdminRepository extends DefaultCrudRepository<
  Admin,
  typeof Admin.prototype.id,
  AdminRelations
> {
  constructor(
    @inject('datasources.inmemory') dataSource: InmemoryDataSource,
  ) {
    super(Admin, dataSource);
  }
}
