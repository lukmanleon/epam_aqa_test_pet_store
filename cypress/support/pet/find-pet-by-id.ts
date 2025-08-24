import { PetApi } from "../api/client";
import { makePet } from "../api/dataFactory";

export function findPetById(): void {
  const newPet = makePet();

  cy.log('**Create a new pet**', newPet)  
  PetApi.addPet(newPet).then(({ status: postStatus, body: postBody }) => {
    expect(postStatus).to.eq(200);
    expect(postBody.id).to.eq(newPet.id);

    cy.log('**Find previously created pet by ID**')
    PetApi.getPetById(newPet.id).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.id).to.eq(newPet.id);
    });
  });
}
