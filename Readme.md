# DevPilot

DevPilot is a GitHub-connected codebase assistant. Users sign in with GitHub, choose a repository, index its source files, and ask questions about the indexed code. Answers are generated from retrieved code context and streamed to the browser with file citations.

This is a learning project built to explore Spring Boot, OAuth, PostgreSQL, vector search, and a Next.js client. AI-powered indexing and chat require a working OpenAI API key.

## Features

- GitHub OAuth sign-in and repository access.
- Repository metadata synchronization and asynchronous source indexing.
- Code chunking, OpenAI embeddings, and vector storage with PostgreSQL and pgvector.
- Repository-scoped retrieval-augmented chat with streamed responses and citations.
- Chat sessions and messages persisted in PostgreSQL.

## Technology

- Backend: Java 25, Spring Boot 4, Spring AI, Maven, Spring Security OAuth2, JPA, Flyway.
- Data: PostgreSQL 16 and pgvector.
- Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, TanStack Query.
- Local database: Docker Compose.
- Deployment: Docker and Render.

## Architecture

```text
Browser (Next.js)
	| REST API, cookies, and SSE
	v
Spring Boot API
	| GitHub OAuth and GitHub REST API
	| Spring AI chat and embeddings
	v
PostgreSQL + pgvector
```

The backend owns authentication, GitHub repository synchronization, indexing, retrieval, and chat. The frontend calls the backend with browser credentials and consumes chat replies as server-sent events.

## Prerequisites

- Java 25 JDK.
- Node.js compatible with Next.js 16 and npm.
- Docker Desktop with Docker Compose.
- A GitHub OAuth App for sign-in.
- An OpenAI API key with available API usage for embeddings and chat.

## Run Locally

### 1. Start PostgreSQL

From the repository root:

```powershell
docker compose up -d postgres
```

The database is available at `localhost:5433`, with database `devpilot`. The local Compose configuration creates the required PostgreSQL extensions.

### 2. Configure backend credentials

Set these environment variables in the backend run configuration in your IDE, or in the shell used to start Spring Boot:

```text
GITHUB_CLIENT_ID=<your GitHub OAuth client ID>
GITHUB_CLIENT_SECRET=<your GitHub OAuth client secret>
OPENAI_API_KEY=<your OpenAI API key>
```

For a local GitHub OAuth App, use this authorization callback URL:

```text
http://localhost:8081/login/oauth2/code/github
```

The database connection, frontend URL, and CORS defaults in `application.properties` are set up for local development. The token encryption defaults are development-only; replace them with strong, private values for any hosted deployment. Never commit credentials or paste them into public logs.

### 3. Start the backend

In a terminal from the repository root:

```powershell
Push-Location .\backend
.\mvnw.cmd spring-boot:run
Pop-Location
```

The backend listens on `http://localhost:8081` by default. Flyway applies SQL migrations at startup; JPA is configured to update entity-managed schema.

### 4. Start the frontend

In another terminal from the repository root:

```powershell
Push-Location .\client
npm ci
npm run dev
Pop-Location
```

Open `http://localhost:3000`. The frontend uses `http://localhost:8081` as its default API URL. To use another backend URL, set `NEXT_PUBLIC_API_BASE_URL` in the frontend environment before building or starting Next.js.

## Verification

Run the backend tests:

```powershell
Push-Location .\backend
.\mvnw.cmd test
Pop-Location
```

Build and lint the frontend:

```powershell
Push-Location .\client
npm run build
npm run lint
Pop-Location
```

## Deployment Notes

- The backend Dockerfile is in `backend/Dockerfile`; the container listens on Render's `PORT` environment variable.
- The frontend and backend are deployed as separate services. Set `NEXT_PUBLIC_API_BASE_URL` on the frontend to the backend's HTTPS URL.
- Configure the backend's `DB_URL` as a JDBC URL, for example `jdbc:postgresql://<internal-host>:5432/<database>`. Set `DB_USERNAME` and `DB_PASSWORD` separately, using the Render Postgres internal connection details.
- Set `FRONTEND_URL` and `CORS_ALLOWED_ORIGINS` on the backend to the deployed frontend origin. Set the GitHub OAuth callback to `<backend-url>/login/oauth2/code/github`.
- Add all API credentials and encryption values as hosting-provider secrets/environment variables, never as committed source values.
- Render's free services can sleep, and its free Postgres database is temporary. Treat that setup as a demo rather than production hosting.

## Repository Layout

```text
backend/   Spring Boot REST API, OAuth, indexing, chat, and Dockerfile
client/    Next.js frontend
docker/    PostgreSQL extension initialization script
docker-compose.yml  Local PostgreSQL service
```
