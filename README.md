## Project setup (local)

1. Copy the example env file and provide your Finnhub API key (do NOT commit real keys):

```bash
cp .env.example .env.local
# then edit .env.local and set FINNHUB_API_KEY=<your_api_key_here>
```

2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
npm run dev
```

4. Run unit tests (Vitest):

```bash
npm test
```

Notes:

- Please remind to add the api key to `.env` file
- If you only want to run the app (not tests) the above `npm install` + `npm run dev` is sufficient.
