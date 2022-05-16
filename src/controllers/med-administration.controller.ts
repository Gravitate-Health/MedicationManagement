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
import {MedAdministration} from '../models';
import {MedAdministrationRepository} from '../repositories';

export class MedAdministrationController {
  constructor(
    @repository(MedAdministrationRepository)
    public medAdministrationRepository : MedAdministrationRepository,
  ) {}

  @post('/med-administrations')
  @response(200, {
    description: 'MedAdministration model instance',
    content: {'application/json': {schema: getModelSchemaRef(MedAdministration)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedAdministration, {
            title: 'NewMedAdministration',
            exclude: ['internalId'],
          }),
        },
      },
    })
    medAdministration: Omit<MedAdministration, 'internalId'>,
  ): Promise<MedAdministration> {
    return this.medAdministrationRepository.create(medAdministration);
  }

  @get('/med-administrations/count')
  @response(200, {
    description: 'MedAdministration model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MedAdministration) where?: Where<MedAdministration>,
  ): Promise<Count> {
    return this.medAdministrationRepository.count(where);
  }

  @get('/med-administrations')
  @response(200, {
    description: 'Array of MedAdministration model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MedAdministration, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MedAdministration) filter?: Filter<MedAdministration>,
  ): Promise<MedAdministration[]> {
    return this.medAdministrationRepository.find(filter);
  }

  @patch('/med-administrations')
  @response(200, {
    description: 'MedAdministration PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedAdministration, {partial: true}),
        },
      },
    })
    medAdministration: MedAdministration,
    @param.where(MedAdministration) where?: Where<MedAdministration>,
  ): Promise<Count> {
    return this.medAdministrationRepository.updateAll(medAdministration, where);
  }

  @get('/med-administrations/{id}')
  @response(200, {
    description: 'MedAdministration model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MedAdministration, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MedAdministration, {exclude: 'where'}) filter?: FilterExcludingWhere<MedAdministration>
  ): Promise<MedAdministration> {
    return this.medAdministrationRepository.findById(id, filter);
  }

  @patch('/med-administrations/{id}')
  @response(204, {
    description: 'MedAdministration PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedAdministration, {partial: true}),
        },
      },
    })
    medAdministration: MedAdministration,
  ): Promise<void> {
    await this.medAdministrationRepository.updateById(id, medAdministration);
  }

  @put('/med-administrations/{id}')
  @response(204, {
    description: 'MedAdministration PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() medAdministration: MedAdministration,
  ): Promise<void> {
    await this.medAdministrationRepository.replaceById(id, medAdministration);
  }

  @del('/med-administrations/{id}')
  @response(204, {
    description: 'MedAdministration DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.medAdministrationRepository.deleteById(id);
  }
}
