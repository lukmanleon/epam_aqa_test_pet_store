import { createNewPet } from "../../support/pet/create-pet";
import { findPetById } from "../../support/pet/find-pet-by-id";
import { findPetByInvalidId } from "../../support/pet/find-pet-by-invalid-id";
import { updatePet } from "../../support/pet/update-pet";

// WARNING: Test might be flaky due to usage of demo API
describe("PET API Test Cases", () => {

  it("should create a new pet", () => {
    createNewPet()
  });

  it("should find a pet by ID", () => {
    findPetById()
  });

  describe("Search pet by ID: Negative test cases", () => {
    const invalidIds = [-1, 0, 999999999];
    
    invalidIds.forEach((id) => {
      it(`should search for pet by invalid Id value: ${id}`, () => {
        findPetByInvalidId(id);
      });
    });
  });

    

  it("should update existing pet", () => {
    updatePet()
  });

});
