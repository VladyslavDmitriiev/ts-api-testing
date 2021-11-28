import got from 'got'
import { URLSearchParams } from 'url'

export default class PetController {
  public baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async findById(id: number | string) {
    const response = await got(this.baseUrl + id)
    return JSON.parse(response.body)
  }

  async findByStatus(status: string | string[]) {
    const response = await got(this.baseUrl + 'findByStatus', {searchParams: new URLSearchParams({status})})
    return JSON.parse(response.body)
  }

  async addNew(pet: {
    "category": {
      "id": number,
      "name": string
    },
    "name": string,
    "photoUrls": string[],
    "tags": {
        "id": number,
        "name": string
      }[],
    "status": string
  }) {
    const response = await got(this.baseUrl, {
      method: 'POST',
      json: pet
    })
    return JSON.parse(response.body)
  }

  async delete(id: number | string) {
    const response = await got(this.baseUrl + id, {
      method: 'DELETE'
    })
    return JSON.parse(response.body)
  }

  async update(pet: {
    "id": number,
    "category": {
      "id": number,
      "name": string
    },
    "name": string,
    "photoUrls": string[],
    "tags": {
        "id": number,
        "name": string
      }[],
    "status": string
  }) {
    const response = await got(this.baseUrl, {
      method: 'PUT',
      json: pet
    })
    return JSON.parse(response.body)
  }
}