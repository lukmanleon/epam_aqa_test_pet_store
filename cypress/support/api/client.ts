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

/**
 * Wrapper around cy.request that always attaches api_key
 */
function apiRequest<T = any>(options: Partial<Cypress.RequestOptions>) {
  const requestOptions: Cypress.RequestOptions = {
    method: options.method || "GET",
    url: options.url!,
    body: options.body,
    headers: {
      "Content-Type": "application/json",
      "api_key": Cypress.env("apiKey"),
      ...(options.headers || {}),
    },
    failOnStatusCode: options.failOnStatusCode ?? false,
  };

  // Debug log for headers
  cy.log(`**Request Headers:** ${JSON.stringify(requestOptions.headers)}`);

  return cy.request<T>(requestOptions);
}



export const PetApi = {
  addPet(pet: Pet) {
    return apiRequest<Pet>({
      method: "POST",
      url: "/pet",
      body: pet,
    });
  },

  getPetById(petId: number | string) {
    return apiRequest<Pet>({
      method: "GET",
      url: `/pet/${petId}`,
    });
  },

  updatePet(pet: Pet) {
    return apiRequest<Pet>({
      method: "PUT",
      url: "/pet",
      body: pet,
    });
  },
};
