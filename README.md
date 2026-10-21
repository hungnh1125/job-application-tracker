# Application HQ — Job Application Tracker

A standalone, browser-based dashboard for organizing AI/ML, research, and software-engineering applications from Spring 2027 onward.

## Features
- Track applications from Saved, Applied, Assessment, Screening, Interview, Final round, Offer, Accepted, Rejected and Withdrawn.
- Record company, position, job type, source, location, application link, deadlines, next follow-up date, CPT/OPT/sponsorship notes, and interview notes.
- Dashboard with pipeline statistics and a configurable weekly application target.
- Search, filters, edit, delete, follow-up queue and direct Apply links.
- JSON export/import (backup and restore) and CSV export.

## Run locally
Open `index.html` in a modern browser. No server or dependencies required.

## Publish on GitHub Pages
Go to repository **Settings → Pages → Build and deployment → Deploy from a branch**, select **main** and **/(root)**, then Save. 
Expected URL once Pages is enabled: https://hungnh1125.github.io/job-application-tracker/

> On some GitHub plans, Pages may require making the repository public. Do not make a private application-data repository public. Only the application code belongs here, not personal job entries.

## Privacy and persistence
Entries are stored in browser `localStorage` under `application-hq-v1`. They do **not** automatically sync between devices, GitHub, or browser profiles. Export a JSON backup regularly and keep it privately. JSON/CSV backups may contain sensitive data.

**Important:** Opening an Apply link does not submit an application. Update a record to Applied and set its date after completing the employer's form.

## Built for
- Internship and co-op opportunities from Spring 2027
- Full-time positions around or after Spring 2027 graduation
- AI / ML, research, LLM, backend and general software engineering
- Explicit recording of CPT/OPT/visa eligibility (must be checked with employers and the university)
