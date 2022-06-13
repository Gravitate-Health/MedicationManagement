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
export class MedDispense extends Entity {
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
    type: 'string',
  })
  statusChanged?: string;

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
    type: 'string',
  })
  recorded?: string;

  @property({
    type: 'string',
  })
  whenPrepared?: string;

  @property({
    type: 'string',
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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MedDispense>) {
    super(data);
  }
}

export interface MedDispenseRelations {
  // describe navigational properties here
}

export type MedicationDispenseWithRelations = MedDispense & MedDispenseRelations;
