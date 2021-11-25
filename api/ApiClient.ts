import PetController from "./controller/PetController";


export class ApiClient {
  private baseUrl: string
  public readonly pet: PetController;


  constructor(baseUrl?: string) {
    if (baseUrl) {
      this.baseUrl = baseUrl
    } else {
      this.baseUrl = 'http://localhost/v2/pet/'
    }
    
    this.pet = new PetController(this.baseUrl)
  }

}
