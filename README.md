# epam_aqa_test_pet_store
Practical API Test Automation for AQA Candidates
# Pet Online Store – API Test Automation (Cypress + TypeScript)

## What this covers
- POST /pet – create pet
- GET /pet/{petId} – fetch pet by id (both positive and negative cases)
- PUT /pet – update pet
- CI with GitHub Actions
- Usage of an API key that is stored securely with the repository

## Getting Started
### Prerequisites
- Node.js v20+
- npm v9+

### Setup
1. Clone the repo and install dependencies:
```bash
npm ci
```

2. Create a .env file in the project root:
BASE_URL=https://petstore.swagger.io/v2
API_KEY=your_api_key_here


3. Open the terminal and run the tests.

Interactive (GUI) mode:
```bash
npm run open
npx cypress open
```

Headless mode:
```bash
npm test 
npx cypress run
```