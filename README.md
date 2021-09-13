## ⚠️ This is a demo and has no tests or follows all best practices ⚠️   

# Tunier Planner

This is a demo application for my bachelor thesis about microfrontends. The topic of the thesis is the
development of a migration guide for the migration of a monolithic Angular application into a microfrontend
architecture.

## starting the application

Installing the dependencies

```bash
npm ci
```

start docker container - database

```bash
docker-compose up -d
```

migrate database

```bash
npx prisma migrate deploy
npx prisma generate
```

starting the applications

```bash
npm run start:api             # backend

npm run start:mono            # monolithic application

npm run start:tunier          # remote tunier
npm run start:matches         # remote matches
npm run start:teams           # remote teams
npm run start:mf-shell        # shell
```
