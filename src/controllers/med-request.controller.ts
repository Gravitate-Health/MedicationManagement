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
import {MedRequest} from '../models';
import {MedRequestRepository} from '../repositories';

export class MedRequestController {
  constructor(
    @repository(MedRequestRepository)
    public medRequestRepository : MedRequestRepository,
  ) {}

  @post('/med-requests')
  @response(200, {
    description: 'MedRequest model instance',
    content: {'application/json': {schema: getModelSchemaRef(MedRequest)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedRequest, {
            title: 'NewMedRequest',
            exclude: ['id'],
          }),
        },
      },
    })
    medRequest: Omit<MedRequest, 'id'>,
  ): Promise<MedRequest> {
    return this.medRequestRepository.create(medRequest);
  }

  @get('/med-requests/count')
  @response(200, {
    description: 'MedRequest model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(MedRequest) where?: Where<MedRequest>,
  ): Promise<Count> {
    return this.medRequestRepository.count(where);
  }

  @get('/med-requests')
  @response(200, {
    description: 'Array of MedRequest model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MedRequest, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(MedRequest) filter?: Filter<MedRequest>,
  ): Promise<MedRequest[]> {
    return this.medRequestRepository.find(filter);
  }

  @patch('/med-requests')
  @response(200, {
    description: 'MedRequest PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedRequest, {partial: true}),
        },
      },
    })
    medRequest: MedRequest,
    @param.where(MedRequest) where?: Where<MedRequest>,
  ): Promise<Count> {
    return this.medRequestRepository.updateAll(medRequest, where);
  }

  @get('/med-requests/{id}')
  @response(200, {
    description: 'MedRequest model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(MedRequest, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(MedRequest, {exclude: 'where'}) filter?: FilterExcludingWhere<MedRequest>
  ): Promise<MedRequest> {
    return this.medRequestRepository.findById(id, filter);
  }

  @patch('/med-requests/{id}')
  @response(204, {
    description: 'MedRequest PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(MedRequest, {partial: true}),
        },
      },
    })
    medRequest: MedRequest,
  ): Promise<void> {
    await this.medRequestRepository.updateById(id, medRequest);
  }

  @put('/med-requests/{id}')
  @response(204, {
    description: 'MedRequest PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() medRequest: MedRequest,
  ): Promise<void> {
    await this.medRequestRepository.replaceById(id, medRequest);
  }

  @del('/med-requests/{id}')
  @response(204, {
    description: 'MedRequest DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.medRequestRepository.deleteById(id);
  }
}
