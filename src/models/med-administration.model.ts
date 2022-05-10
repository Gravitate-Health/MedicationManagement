import {Entity, model, property} from '@loopback/repository';

@model()
export class MedAdministration extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  identifier: string;

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
  })
  medication?: any;

  @property({
    type: 'any',
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


  constructor(data?: Partial<MedAdministration>) {
    super(data);
  }
}

export interface MedAdministrationRelations {
  // describe navigational properties here
}

export type MedAdministrationWithRelations = MedAdministration & MedAdministrationRelations;
