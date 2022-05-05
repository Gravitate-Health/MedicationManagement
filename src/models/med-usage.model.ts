import {Entity, model, property} from '@loopback/repository';

@model()
export class MedUsage extends Entity {
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
  effective?: any;

  @property({
    type: 'date',
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


  constructor(data?: Partial<MedUsage>) {
    super(data);
  }
}

export interface MedUsageRelations {
  // describe navigational properties here
}

export type MedicationUsageWithRelations = MedUsage & MedUsageRelations;
