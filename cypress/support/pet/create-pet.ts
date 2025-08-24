import { PetApi } from "../api/client";
import { makePet } from "../api/dataFactory";


export function createNewPet():void{
  const newPet = makePet();

  cy.log('**Createing new pet**')

  PetApi.addPet(newPet).then(({ status, body }) => {
    expect(status).to.eq(200);
    expect(body.name).to.eq(newPet.name);
    });
}
