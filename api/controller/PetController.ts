import { HttpRequestBuilder as request} from '../HttpRequestBuilder'
import { URLSearchParams } from 'url'
import { definitions } from '../../.temp/types'

export default class PetController {
  public baseUrl: string
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async findById(id: number | string) {
    return (
      await new request()
        .url(this.baseUrl + id)
        .send()
    ).body
  }

  async findByStatus(status: string | string[]) {
    return (
      await new request()
        .url(this.baseUrl + 'findByStatus')
        .searchParams(new URLSearchParams({status}))
        .send()
    ).body
  }

  async addNew(pet: Omit<definitions['Pet'], "id">) {
    return (
      await new request()
        .url(this.baseUrl)
        .method('POST')
        .body(pet)
        .send()
    ).body
  }

  async delete(id: number | string) {
    return (
      await new request()
        .url(this.baseUrl + id)
        .method('DELETE')
        .send()
    ).body
  }

  async update(pet: definitions['Pet']) {
    return (
      await new request()
        .url(this.baseUrl)
        .method('PUT')
        .body(pet)
        .send()
    ).body
  }
}


// pet: {
//   "category": {
//     "id": number,
//     "name": string
//   },
//   "name": string,
//   "photoUrls": string[],
//   "tags": {
//       "id": number,
//       "name": string
//     }[],
//   "status": string