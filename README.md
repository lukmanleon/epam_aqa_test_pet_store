# epam_aqa_test_pet_store
Practical API Test Automation for AQA Candidates
# Pet Online Store – API Test Automation (Cypress + TypeScript)

## What this covers
- POST /pet – create pet
- GET /pet/{petId} – fetch pet by id
- PUT /pet – update pet
- Schema validation with AJV
- Negative paths and basic idempotency check
- CI with GitHub Actions

## Getting Started
```bash
npm ci
export BASE_URL="https://petstore.swagger.io/v2" # or your env
npm run open # interactive
npm test     # headless
