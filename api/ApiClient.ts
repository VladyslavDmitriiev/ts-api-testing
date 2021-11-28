import PetController from "./controller/PetController";


export class ApiClient {
  private baseUrl: string
  public readonly pet: PetController;


  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl ? baseUrl : 'http://localhost/v2/pet/'
    this.pet = new PetController(this.baseUrl)
  }

}
