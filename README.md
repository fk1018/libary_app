# Libary App

## Description

A basic react app created with vite using typescript.

## Installation

```bash
npm install
```

## Usage

To run the app locally:

```bash
npm run dev
```

## Testing

To run the test locally:

```bash
  npm run test
```

To generate test coverage:

```bash
npm run coverage
```

To run with vitest ui:

```bash
npm run test-ui
```

## Docker Installation

### Development Environment

To run the app in a development environment using Docker:

1. Build and start the development container:

```bash
docker-compose up dev
```

2. Access the app at http://localhost:5173.

The development environment uses dockerfile.dev and supports hot reloading with synced local files.

### Production Environment

To build and run the app in a production environment:

1. Build and start the production container:

```bash
docker compose up prod
```

2. Access the app at http://localhost:3000.

The production environment uses dockerfile.production and serves the app via Nginx.

### Docker Commands

- Build a specific environment:

```bash
docker compose build <service_name>
```

Replace `<service_name>` with dev or prod.

- Stop all running containers:

```bash
docker compose down
```

- Rebuild and start containers:

```bash
docker compose up --build
```

- View container logs:

```bash
docker compose logs <service_name>
```

Replace `<service_name>` with dev or prod.
