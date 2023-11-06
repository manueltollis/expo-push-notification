# Sentinel Push Notification Service

## Introduction

This is the codebase for the Sentinel Push Notification Service. It serves as the backend that handles push notifications for the Sentinel mobile application. It is built using [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [Drizzle ORM](https://orm.drizzle.team/), [PostgreSQL](https://www.postgresql.org/) and [Expo Push](https://docs.expo.dev/push-notifications/overview/).

You need to use [Docker](https://www.docker.com/) to run this application.

## Environment Variables

### `POSTGRES_DB_NAME`

- **Description:** This environment variable is used to specify the name of the PostgreSQL database to be used.

### `POSTGRES_USER`

- **Description:** This environment variable is used to specify the username of the PostgreSQL database to be used.

### `POSTGRES_PASSWORD`

- **Description:** This environment variable is used to specify the password of the PostgreSQL database to be used.

### `POSTGRES_HOST`

- **Description:** This environment variable is used to specify the host of the PostgreSQL database to be used.

## Getting Started

To get started with MyApp, follow these steps:

1. Clone the repository to your local machine.
2. Set the required environment variables as described above.
3. Run the command in the makefile -> `make run`.
4. Run the application.
