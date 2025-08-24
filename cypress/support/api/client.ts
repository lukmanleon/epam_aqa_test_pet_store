// cypress/support/api/client.ts
export type Category = { id?: number; name?: string };
export type Tag = { id?: number; name?: string };
export type PetStatus = "available" | "pending" | "sold";

export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  status?: PetStatus;
}

export const PetApi = {
  addPet(pet: Pet) {
    return cy.request<Pet>({
      method: "POST",
      url: "/pet",
      body: pet,
      headers: { "Content-Type": "application/json" },
      failOnStatusCode: false
    });
  },

  getPetById(petId: number | string) {
    return cy.request<Pet>({
      method: "GET",
      url: `/pet/${petId}`,
      failOnStatusCode: false
    });
  },
  
  updatePet(pet: Pet) {
    return cy.request<Pet>({
      method: "PUT",
      url: "/pet",
      body: pet,
      headers: { "Content-Type": "application/json" },
      failOnStatusCode: false
    });
  }
};
