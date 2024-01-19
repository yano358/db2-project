# db2-project

Project for Databases 2 course at PWR that I turned into my fullstack-app excercise.

## How to run:

### Backend

> setup python environment

```bash
pip install poetry
cd backend/app
poetry install
```

> start backend


```bash
cd backend/app
cp .env.sample .env
docker compose up   # first terminal
./start-api.sh  # second terminal (in case this does not work, paste the command from the script into terminal directly)
```
Make sure alembic.ini file is configured with proper parameters, make sure .env file is configured properly!

### Frontend

```bash
cd frontend
npm install
npm run dev
```
