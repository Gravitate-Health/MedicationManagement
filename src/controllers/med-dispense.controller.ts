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

import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {MedDispense} from '../models';
import {MedDispenseRepository} from '../repositories';

export class MedDispenseController {
  constructor(
    @repository(MedDispenseRepository)
    public medDispenseRepository: MedDispenseRepository,
  ) { }

  @post('/med-dispenses')
  @response(200, {
    description: 'MedDispense model instance',
    content: {'application/json': {schema: getModelSchemaRef(MedDispense)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedDispense, {
            title: 'NewMedDispense',
            exclude: ['internalId'],
          }),
        },
      },
    })
    medDispense: Omit<MedDispense, 'internalId'>,
  ): Promise<MedDispense> {
    return this.medDispenseRepository.create(medDispense);
  }

  @get('/med-dispenses/count')
  @response(200, {
    description: 'MedDispense model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MedDispense) where?: Where<MedDispense>,
  ): Promise<Count> {
    return this.medDispenseRepository.count(where);
  }

  @get('/med-dispenses')
  @response(200, {
    description: 'Array of MedDispense model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MedDispense, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MedDispense) filter?: Filter<MedDispense>,
  ): Promise<MedDispense[]> {
    return this.medDispenseRepository.find(filter);
  }

  @patch('/med-dispenses')
  @response(200, {
    description: 'MedDispense PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedDispense, {partial: true}),
        },
      },
    })
    medDispense: MedDispense,
    @param.where(MedDispense) where?: Where<MedDispense>,
  ): Promise<Count> {
    return this.medDispenseRepository.updateAll(medDispense, where);
  }

  @get('/med-dispenses/{id}')
  @response(200, {
    description: 'MedDispense model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MedDispense, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MedDispense, {exclude: 'where'}) filter?: FilterExcludingWhere<MedDispense>
  ): Promise<MedDispense> {
    return this.medDispenseRepository.findById(id, filter);
  }

  @patch('/med-dispenses/{id}')
  @response(204, {
    description: 'MedDispense PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedDispense, {partial: true}),
        },
      },
    })
    medDispense: MedDispense,
  ): Promise<void> {
    await this.medDispenseRepository.updateById(id, medDispense);
  }

  @put('/med-dispenses/{id}')
  @response(204, {
    description: 'MedDispense PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() medDispense: MedDispense,
  ): Promise<void> {
    await this.medDispenseRepository.replaceById(id, medDispense);
  }

  @del('/med-dispenses/{id}')
  @response(204, {
    description: 'MedDispense DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.medDispenseRepository.deleteById(id);
  }
}
