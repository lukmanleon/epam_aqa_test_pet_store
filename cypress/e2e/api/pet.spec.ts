import { createNewPet } from "../../support/pet/create-pet";
import { findPetById } from "../../support/pet/find-pet-by-id";
import { updatePet } from "../../support/pet/update-pet";

// WARNING: Test might be flaky due to usage of demo API
describe("PET API Test Cases", () => {

  it("should create a new pet", () => {
    createNewPet()
  });

  it("should find a pet by ID", () => {
    findPetById()
  });

  it("should update existing pet", () => {
    updatePet()
  });

});
