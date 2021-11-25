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
}