# HelpingHand-Backend

Backend API for the Helping Hand NGO platform.

## Tech Stack

- Node.js (v20+)
- Express
- TypeScript
- PostgreSQL
- Prisma ORM

## Project Structure

```
src/
	config/
		env.ts
	controllers/
		health.controller.ts
	lib/
		prisma.ts
	middlewares/
		error.middleware.ts
		not-found.middleware.ts
	routes/
		health.route.ts
		index.ts
	app.ts
	server.ts
prisma/
	schema.prisma
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

3. Set your PostgreSQL connection in `.env`:

	 ```env
	 DATABASE_URL=postgresql://postgres:postgres@localhost:5432/helping_hand?schema=public
	 ```

4. Generate Prisma client:

	 ```bash
	 npm run prisma:generate
	 ```

5. Run the first migration:

	 ```bash
	 npm run prisma:migrate -- --name init
	 ```

6. Run in development mode:

	 ```bash
	 npm run dev
	 ```

## Available Scripts

- `npm run dev`: Start server with auto-reload for development.
- `npm run build`: Compile TypeScript into `dist/`.
- `npm run start`: Run compiled app from `dist/`.
- `npm run typecheck`: Validate TypeScript types without emitting files.
- `npm run prisma:generate`: Generate Prisma client.
- `npm run prisma:migrate`: Create/apply development migrations.
- `npm run prisma:studio`: Open Prisma Studio.
- `npm run prisma:format`: Format Prisma schema.

## API Endpoints

- `GET /`: Basic API welcome message.
- `GET /api/v1/health`: Health check endpoint.

## Initial Data Models

- `User`: Staff/admin/volunteer users with login identity fields.
- `Donation`: Donation records linked to optional creator user.
- `Volunteer`: Volunteer profile linked 1:1 with a user.
- `Beneficiary`: Beneficiary records with support status.