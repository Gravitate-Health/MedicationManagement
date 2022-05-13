import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class MedAdministration extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  identifier: string;

  @property({
    type: 'string',
    required: true,
  })
  id: string;

  @property({
    type: 'any',
  })
  instantiatesCanonical?: any;

  @property({
    type: 'string',
  })
  instantiatesUri?: string;

  @property({
    type: 'any',
  })
  basedOn?: any;

  @property({
    type: 'any',
  })
  partOf?: any;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'any',
  })
  statusReason?: any;

  @property({
    type: 'any',
  })
  category?: any;

  @property({
    type: 'any',
    required: true,
  })
  medication?: any;

  @property({
    type: 'any',
    required: true,
  })
  subject?: any;

  @property({
    type: 'any',
  })
  encounter?: any;

  @property({
    type: 'any',
  })
  supportingInformation?: any;

  @property({
    type: 'any',
    required: true,
  })
  occurence?: any;

  @property({
    type: 'date',
  })
  recorded?: string;

  @property({
    type: 'boolean',
  })
  isSubPotent?: boolean;

  @property({
    type: 'any',
  })
  subPotentReason?: any;

  @property({
    type: 'any',
  })
  performer?: any;

  @property({
    type: 'any',
  })
  reason?: any;

  @property({
    type: 'any',
  })
  request?: any;

  @property({
    type: 'any',
  })
  device?: any;

  @property({
    type: 'any',
  })
  note?: any;

  @property({
    type: 'any',
  })
  dosage?: any;

  @property({
    type: 'any',
  })
  eventHistory?: any;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MedAdministration>) {
    super(data);
  }
}

export interface MedAdministrationRelations {
  // describe navigational properties here
}

export type MedAdministrationWithRelations = MedAdministration & MedAdministrationRelations;
