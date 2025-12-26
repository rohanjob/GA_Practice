# Two Tier App - DevOps Project

This is a complete end-to-end DevOps project setup featuring a Node.js backend and a React frontend.

## Project Structure

- `backend/`: Node.js Express server.
- `frontend/`: React application.
- `.github/workflows/`: GitHub Actions for CI/CD.

## Getting Started

### Backend
1. `cd backend`
2. `npm install`
3. `npm start` (Runs on http://localhost:5000)

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm start` (Runs on http://localhost:3000)

## DevOps Pipelines

- **Backend CI**: Runs on every push to `backend/**`. Includes install and test.
- **Frontend CI**: Runs on every push to `frontend/**`. Includes install and build.
- **Backend Deploy**: Deploys to Azure App Service on push to `main`.

## Azure Deployment Setup

1. Create an Azure App Service.
2. Download the Publish Profile.
3. Add it to GitHub Secrets as `AZURE_BACKEND_PUBLISH`.
