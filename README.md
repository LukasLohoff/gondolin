# gondolin

[![Greenkeeper badge](https://badges.greenkeeper.io/terrestris/gondolin.svg)](https://greenkeeper.io/)

System requirments:

- docker
- docker-compose
- g++
- postgresql-server-dev-10
- node-gyp (via `npm install node-gyp -g`)

Setup:

1. Create a `passport.ts` in the config folder. The file contains the
secret for the passport authentification.

```
/**
 * This file should not be pushed to public repositories as it contains the
 * jwt secret!
 */
export default 'mellon';
```

2. Start the database and pgAdmin: `docker-compose --f docker-compose-dev.yml up`

3. Run `npm install` and then `npm run start:dev` and gondolin will be available at `http://localhost:3000`.

## Database access

Connect to the PostGIS database at `localhost:5050` with pgAdmin:

- Host name: `gondolin-postgis`
- Port: 5432
- Database: gondolin
- Schema: gondolin
- User: gondolin
- Password: gondolin

## Quick start guide

### Run via docker-compose for production / testing

First create the file `passport.ts` as described above.

To quickly get a running demo of gondolin then simply run:

```
docker-compose up
```

After a while the *gondolin* API will be available at `localhost:3000`. The swagger documentation below describes the API endpoint.
