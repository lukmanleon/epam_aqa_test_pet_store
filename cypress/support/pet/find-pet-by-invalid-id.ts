import { PetApi } from "../api/client";

export function findPetByInvalidId(id: number): void {
  cy.log(`**Search pet by invalid ID: ${id}**`);

  PetApi.getPetById(id).then(({ status, body }) => {
    expect(status).to.eq(404);

    // Swagger Petstore usually returns something like:
    // { code: 1, type: "error", message: "Pet not found" }
    expect(body).to.have.property("message");
    expect(body.message).to.include("Pet not found");
  });
}
