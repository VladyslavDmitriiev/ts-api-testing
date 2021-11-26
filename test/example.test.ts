import { ApiClient } from '../api/ApiClient'


describe('User can', () => {
  test('receive pet by his id', async function () {
    const api = new ApiClient()
    let body = await api.pet.findById('1')
    expect(body.id).toEqual(1)
  })
  test('receive pet by his status', async function () {
    const api = new ApiClient()
    let body: any[] = await api.pet.findByStatus(['sold', 'available'])
    expect(body.map(pet => pet.status)).toContain('sold')
    expect(body.map(pet => pet.status)).toContain('available')
    expect(body.map(pet => pet.status)).not.toContain('pending')

    body = await api.pet.findByStatus('pending')
    expect(body.map(pet => pet.status)).toContain('pending')
  })
  test('create new pet', async () => {
    const api = new ApiClient()
    let body = api.pet.addNew({
      "id": 0,
      "category": {
        "id": 0,
        "name": "cat"
      },
      "name": "Leo",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": "bengal"
        }
      ],
      "status": "available"
    })
  })
})
