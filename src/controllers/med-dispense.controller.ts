import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {MedDispense} from '../models';
import {MedDispenseRepository} from '../repositories';

export class MedDispenseController {
  constructor(
    @repository(MedDispenseRepository)
    public medDispenseRepository : MedDispenseRepository,
  ) {}

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
            exclude: ['id'],
          }),
        },
      },
    })
    medDispense: Omit<MedDispense, 'id'>,
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
    @param.path.number('id') id: number,
    @param.filter(MedDispense, {exclude: 'where'}) filter?: FilterExcludingWhere<MedDispense>
  ): Promise<MedDispense> {
    return this.medDispenseRepository.findById(id, filter);
  }

  @patch('/med-dispenses/{id}')
  @response(204, {
    description: 'MedDispense PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
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
    @param.path.number('id') id: number,
    @requestBody() medDispense: MedDispense,
  ): Promise<void> {
    await this.medDispenseRepository.replaceById(id, medDispense);
  }

  @del('/med-dispenses/{id}')
  @response(204, {
    description: 'MedDispense DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.medDispenseRepository.deleteById(id);
  }
}
