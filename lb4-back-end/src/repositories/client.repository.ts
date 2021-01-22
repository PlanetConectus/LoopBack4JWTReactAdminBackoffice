import {DefaultCrudRepository} from '@loopback/repository';
import {Client, ClientRelations} from '../models';
import {InmemoryDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClientRepository extends DefaultCrudRepository<
  Client,
  typeof Client.prototype.id,
  ClientRelations
> {
  constructor(
    @inject('datasources.inmemory') dataSource: InmemoryDataSource,
  ) {
    super(Client, dataSource);
  }
}
