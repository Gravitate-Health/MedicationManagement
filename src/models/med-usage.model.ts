import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class MedUsage extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  internalId: string;

  @property({
    type: 'string',
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

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
  effective?: any;

  @property({
    type: 'string',
  })
  dateAsserted?: string;

  @property({
    type: 'any',
  })
  informationSource?: any;

  @property({
    type: 'any',
  })
  derivedFrom?: any;

  @property({
    type: 'any',
  })
  reason?: any;

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
  dosage?: any;

  @property({
    type: 'any',
  })
  adherence?: any;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;


  constructor(data?: Partial<MedUsage>) {
    super(data);
  }
}

export interface MedUsageRelations {
  // describe navigational properties here
}

export type MedicationUsageWithRelations = MedUsage & MedUsageRelations;
