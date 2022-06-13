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
export class MedAdministration extends Entity {
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
    type: 'string',
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
