<h1 align="center"><a href="https://fairness.coop"><img src="https://fairness.coop/image/fairness_logo.svg" alt="Fairness"></a></h1>

Personal assistant which helps you to manage your house(s).

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/mmarchois/edgar/CI)
[![codecov](https://codecov.io/gh/mmarchois/edgar/branch/master/graph/badge.svg)](https://codecov.io/gh/mmarchois/edgar)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/mmarchois/edgar/badges/quality-score.png?b=master&s=242ca3f15e9b3b14cbd1ef6358e091b062d4b344)](https://scrutinizer-ci.com/g/mmarchois/edgar/?branch=master)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/31a537f374d643178c2826d3defdac5a)](https://www.codacy.com/manual/mmarchois/edgar?utm_source=github.com&utm_medium=referral&utm_content=mmarchois/edgar&utm_campaign=Badge_Grade)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/mmarchois/edgar)
[![GitHub license](https://img.shields.io/github/license/mmarchois/edgar.svg)](https://github.com/mmarchois/edgar)

## Technical stack

- [Node.js](https://nodejs.org) / [Nestjs](https://nestjs.com/)
- [TypeORM](https://typeorm.io)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) / [Ts-mockito](https://github.com/NagRock/ts-mockito)
- [Svelte](https://svelte.dev/) / [Sapper](https://sapper.svelte.dev/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## Prerequisites

You must have **[Docker](https://www.docker.com/)** and **[Docker Compose](https://docs.docker.com/compose/)**.

## Installation

At **the first launch**, just execute this command to install your application :

```bash
make install
```

For the **next times** you just need to execute this command to start your application :

```bash
make start
```

The server and client will be started:

- API documentation available on http://localhost:8080/api
- Client avaible on http://localhost:8000

## Security

The client must send the user `apiToken` in the Authorization header when making requests to protected resources : `Authorization: Bearer <apiToken>`

To retrieve the `apiToken`, make a post request on `/login` with a user email and password.

## Helpers

This following command will display all available helpers :

```bash
make help
```

## Tests

Run the unit test suite with this following command:

```bash
make test
```

## Credits

Created by [Mathieu MARCHOIS](https://github.com/mmarchois)
