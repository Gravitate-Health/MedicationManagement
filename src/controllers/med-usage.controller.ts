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
import {MedUsage} from '../models';
import {MedUsageRepository} from '../repositories';

export class MedUsageController {
  constructor(
    @repository(MedUsageRepository)
    public medUsageRepository : MedUsageRepository,
  ) {}

  @post('/med-usages')
  @response(200, {
    description: 'MedUsage model instance',
    content: {'application/json': {schema: getModelSchemaRef(MedUsage)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedUsage, {
            title: 'NewMedUsage',
            exclude: ['internalId'],
          }),
        },
      },
    })
    medUsage: Omit<MedUsage, 'internalId'>,
  ): Promise<MedUsage> {
    return this.medUsageRepository.create(medUsage);
  }

  @get('/med-usages/count')
  @response(200, {
    description: 'MedUsage model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MedUsage) where?: Where<MedUsage>,
  ): Promise<Count> {
    return this.medUsageRepository.count(where);
  }

  @get('/med-usages')
  @response(200, {
    description: 'Array of MedUsage model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MedUsage, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MedUsage) filter?: Filter<MedUsage>,
  ): Promise<MedUsage[]> {
    return this.medUsageRepository.find(filter);
  }

  @patch('/med-usages')
  @response(200, {
    description: 'MedUsage PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedUsage, {partial: true}),
        },
      },
    })
    medUsage: MedUsage,
    @param.where(MedUsage) where?: Where<MedUsage>,
  ): Promise<Count> {
    return this.medUsageRepository.updateAll(medUsage, where);
  }

  @get('/med-usages/{id}')
  @response(200, {
    description: 'MedUsage model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MedUsage, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MedUsage, {exclude: 'where'}) filter?: FilterExcludingWhere<MedUsage>
  ): Promise<MedUsage> {
    return this.medUsageRepository.findById(id, filter);
  }

  @patch('/med-usages/{id}')
  @response(204, {
    description: 'MedUsage PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedUsage, {partial: true}),
        },
      },
    })
    medUsage: MedUsage,
  ): Promise<void> {
    await this.medUsageRepository.updateById(id, medUsage);
  }

  @put('/med-usages/{id}')
  @response(204, {
    description: 'MedUsage PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() medUsage: MedUsage,
  ): Promise<void> {
    await this.medUsageRepository.replaceById(id, medUsage);
  }

  @del('/med-usages/{id}')
  @response(204, {
    description: 'MedUsage DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.medUsageRepository.deleteById(id);
  }
}
