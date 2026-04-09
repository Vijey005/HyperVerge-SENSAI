# HyperVerge SENSAI

This repository contains both the frontend and backend for the HyperVerge SENSAI project, along with architectural reference diagrams. It also includes our current initialized state so that you can jump right in without having to set everything up from scratch!

## Repository Structure

- `/sensai-backend` - The FastAPI backend application.
- `/sensai-frontend` - The Next.js frontend application.
- `/architecture_overview` - Architecture notes and `.txt` outlines.
- `/reference_xml_files` - Reference XML flows.

## Pre-Configured State

To make collaboration easier, the following setup is already configured and pushed:
- **Environment Variables**: Local `.env` and `.env.local` files for both frontend and backend are included.
- **Database**: The SQLite database (`db.sqlite`) in the backend is included. It already contains the created course, user data, and cohort structures, so you immediately have data to test with upon running it!

## Running the Application Locally

You will need two terminal windows to run this application.

### 1. Start the Backend
```bash
cd sensai-backend/src
uv run python startup.py
uv run uvicorn api.main:app --reload --port 8001
```

### 2. Start the Frontend
```bash
cd sensai-frontend
npm ci
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000) and it will point to the running backend service. Since the `db.sqlite` is already populated, you can view the already existing courses and users.
