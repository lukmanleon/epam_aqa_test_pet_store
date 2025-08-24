import { Pet, PetApi } from "../api/client";
import { makePet } from "../api/dataFactory";

export function updatePet():void{
  const newPet: Pet = makePet();

  cy.log('**Create a new pet**', newPet.name + ' ' + newPet.id)  
  PetApi.addPet(newPet).then(({ status: postStatus, body: postBody }) => {
    expect(postStatus).to.eq(200);

    cy.log('**Modifying pet data**')
    const updatedPet: Pet = makePet();

    cy.log('**Update previously created pet**', updatedPet.id + ' ' + updatedPet.id)
    PetApi.updatePet(updatedPet).then(({ status, body }) => {
    expect(status).to.eq(200);
    expect(body.name).to.eq(updatedPet.name);
    });

  });
}
