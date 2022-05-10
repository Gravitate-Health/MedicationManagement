import {Entity, model, property} from '@loopback/repository';

@model()
export class MedRequest extends Entity {
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
    type: 'any',
  })
  instantiatesUri?: any;

  @property({
    type: 'any',
  })
  basedOn?: any;

  @property({
    type: 'any',
  })
  priorPrescription?: any;

  @property({
    type: 'any',
  })
  groupIdentifier?: any;

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
    type: 'date',
  })
  statusChanged?: string;

  @property({
    type: 'any',
    required: true,
  })
  intent: any;

  @property({
    type: 'any',
  })
  category?: any;

  @property({
    type: 'string',
    required: true,
  })
  priority: string;

  @property({
    type: 'boolean',
  })
  doNotPerform?: boolean;

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
  informationSource?: any;

  @property({
    type: 'date',
  })
  authoredOn?: string;

  @property({
    type: 'any',
  })
  requester?: any;

  @property({
    type: 'boolean',
  })
  reported?: boolean;

  @property({
    type: 'any',
  })
  performerType?: any;

  @property({
    type: 'any',
  })
  performer?: any;

  @property({
    type: 'any',
  })
  recorder?: any;

  @property({
    type: 'any',
  })
  reason?: any;

  @property({
    type: 'any',
  })
  courseOfTherapyType?: any;

  @property({
    type: 'any',
  })
  insurance?: any;

  @property({
    type: 'any',
  })
  note?: any;

  @property({
    type: 'any',
  })
  dose?: any;

  @property({
    type: 'any',
  })
  dispenseRequest?: any;

  @property({
    type: 'any',
  })
  substitution?: any;

  @property({
    type: 'any',
  })
  eventHistory?: any;


  constructor(data?: Partial<MedRequest>) {
    super(data);
  }
}

export interface MedRequestRelations {
  // describe navigational properties here
}

export type MedRequestWithRelations = MedRequest & MedRequestRelations;
