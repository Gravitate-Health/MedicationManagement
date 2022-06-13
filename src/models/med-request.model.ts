// Copyright 2022 Universidad Politécnica de Madrid
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class MedRequest extends Entity {
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
    type: 'string',
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
  })
  priority: string;

  @property({
    type: 'boolean',
  })
  doNotPerform?: boolean;

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
  informationSource?: any;

  @property({
    type: 'string',
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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MedRequest>) {
    super(data);
  }
}

export interface MedRequestRelations {
  // describe navigational properties here
}

export type MedRequestWithRelations = MedRequest & MedRequestRelations;
