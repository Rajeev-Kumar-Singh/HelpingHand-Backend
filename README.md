# HelpingHand-Backend

Backend API for the Helping Hand NGO platform.

## Tech Stack

- Node.js (v20+)
- Express
- TypeScript

## Project Structure

```
src/
	config/
		env.ts
	controllers/
		health.controller.ts
	middlewares/
		error.middleware.ts
		not-found.middleware.ts
	routes/
		health.route.ts
		index.ts
	app.ts
	server.ts
```

## Setup

1. Install dependencies:

	 ```bash
	 npm install
	 ```

2. Create your environment file:

	 ```bash
	 copy .env.example .env
	 ```

3. Run in development mode:

	 ```bash
	 npm run dev
	 ```

## Available Scripts

- `npm run dev`: Start server with auto-reload for development.
- `npm run build`: Compile TypeScript into `dist/`.
- `npm run start`: Run compiled app from `dist/`.
- `npm run typecheck`: Validate TypeScript types without emitting files.

## API Endpoints

- `GET /`: Basic API welcome message.
- `GET /api/v1/health`: Health check endpoint.