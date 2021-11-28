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
  test('create, update, delete a pet', async () => {
    const api = new ApiClient()
    
    // Create
    let petToCreate = {
      "category": {
        "id": 0,
        "name": "cat"
      },
      "name": "Leo",
      "photoUrls": [''],
      "tags": [
        {
          "id": 0,
          "name": "bengal"
        }
      ],
      "status": "available"
    }
    let createdPet = await api.pet.addNew(petToCreate)
    expect(createdPet).toStrictEqual({...petToCreate, id: createdPet.id})
    let foundAddedPet = await api.pet.findById(createdPet.id)
    expect(foundAddedPet).toStrictEqual({...petToCreate, id: createdPet.id})

    // Update
    let petToUpdate = {
      "id": createdPet.id,
      "category": {
        "id": 0,
        "name": "cat"
      },
      "name": "Leo",
      "photoUrls": [''],
      "tags": [
        {
          "id": 0,
          "name": "bengal"
        }
      ],
      "status": "sold"
    }
    let updatedPet = await api.pet.update(petToUpdate)
    expect(updatedPet.status).toEqual('sold')
    let foundUpdatedPet = await api.pet.findById(updatedPet.id)
    expect(foundUpdatedPet.status).toEqual('sold')
    
    // Delete
    let deletedPet = await api.pet.delete(updatedPet.id)
    console.log(deletedPet)
    expect(deletedPet.code).toEqual(200)
  })
})
