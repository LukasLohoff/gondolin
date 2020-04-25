# gondolin



System requirments:

- docker
- docker-compose
- g++
- postgresql-server-dev-10
- node-gyp (via `npm install node-gyp -g`)

## Setup / DevNotes:

1. Create a `passport.ts` in the config folder. The file contains the
secret for the passport authentification.

```
/**
 * This file should not be pushed to public repositories as it contains the
 * jwt secret!
 */
export default 'mellon';
```

2. Start the database and pgAdmin: `docker-compose --f docker-compose-dev.yml up`.

3. Run `npm install` and then `npm run start:dev` and

Afterwards…

- … **gondolin** will be available at `http://localhost:3000`
  - Example rest request: `http://localhost:3000/Application/get` (rest api is deprecated --> use GraphQL)
- … **GraphiQL** will be available at: `http://localhost:3000/graphql?` (Click on `RootQueryType`) at the right side to get more information about the API.
- … **pgAdmin** will be available at `http://localhost:5050` (admin / admin)

## Run via docker / docker-compose

```
docker build -t gondolin-server .

docker-compose up
```

## Default users

PostgreSQL: gondolin / gondolin

pgAdmin: admin / admin
