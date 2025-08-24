import { v4 as uuidv4 } from "uuid";

export function makePet(partial?: any) {
  return {
    id: Math.floor(Math.random() * 10) + 1, // random int 1–10
    name: `pet-${uuidv4().slice(0, 8)}`,
    photoUrls: ["https://example.com/photo.png"],
    status: "available",
    ...partial
  };
}
