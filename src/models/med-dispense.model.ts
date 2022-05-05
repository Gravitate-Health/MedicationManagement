import {Entity, model, property} from '@loopback/repository';

@model()
export class MedDispense extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  identifier: string;

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
  notPerformedReason?: any;

  @property({
    type: 'date',
  })
  statusChanged?: string;

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
  performer?: any;

  @property({
    type: 'any',
  })
  location?: any;

  @property({
    type: 'any',
  })
  authorizingPrescription?: any;

  @property({
    type: 'any',
  })
  type?: any;

  @property({
    type: 'any',
  })
  quantity?: any;

  @property({
    type: 'any',
  })
  daysSupply?: any;

  @property({
    type: 'date',
  })
  recorded?: string;

  @property({
    type: 'date',
  })
  whenPrepared?: string;

  @property({
    type: 'date',
  })
  whenHandedOver?: string;

  @property({
    type: 'any',
  })
  destination?: any;

  @property({
    type: 'any',
  })
  receiver?: any;

  @property({
    type: 'any',
  })
  note?: any;

  @property({
    type: 'string',
  })
  renderedDosageInstruction?: string;

  @property({
    type: 'any',
  })
  dosageInstruction?: any;

  @property({
    type: 'any',
  })
  substitution?: any;

  @property({
    type: 'any',
  })
  eventHistory?: any;


  constructor(data?: Partial<MedDispense>) {
    super(data);
  }
}

export interface MedDispenseRelations {
  // describe navigational properties here
}

export type MedicationDispenseWithRelations = MedDispense & MedDispenseRelations;
