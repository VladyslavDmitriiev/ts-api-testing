import { ApiClient } from '../api/ApiClient'


describe('User can', () => {
  it('receive pet by his id', async function () {
    const api = new ApiClient()
    const body = await api.pet.findById('1')
    expect(body.id).toEqual(1)
  })
  test('receive pet by his status', async function () {
    const api = new ApiClient()
    const body: any[] = await api.pet.findByStatus(['sold', 'available'])
    expect(body.map(pet => pet.status)).toContain('sold')
    expect(body.map(pet => pet.status)).toContain('available')
    expect(body.map(pet => pet.status)).not.toContain('pending')
  })
})
