import { PetApi } from "../../support/api/client";
import { makePet } from "../../support/api/dataFactory";

describe("Pet API", () => {
  it("should create and retrieve a pet", () => {
    const newPet = makePet();

    PetApi.addPet(newPet).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.name).to.eq(newPet.name);
    });

    PetApi.getPetById(newPet.id).then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body.id).to.eq(newPet.id);
    });
  });
});
