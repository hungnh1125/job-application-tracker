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

## Automatic tracking (Chrome/Chromium companion extension)
The `extension/` folder contains an unpacked Manifest V3 Chrome extension. Install it once from Chrome > Extensions > Manage Extensions > Developer mode > Load unpacked, and select the `extension` folder downloaded from this repository. Open the same browser profile on the dashboard.

The extension checks recognizable application-confirmation pages on Handshake, Greenhouse, Lever, Ashby, Workday, LinkedIn, Indeed, SmartRecruiters, iCIMS, Workable, Jobvite, BambooHR and company career sites. When a clear confirmation is detected, it records a tentative Applied entry in extension-local storage and imports it into the dashboard automatically upon opening the dashboard. Use the extension popup to manually save a job when detection fails.

**Coverage limitation:** This is heuristic detection, not a universal cross-platform application API. Some websites navigate within single-page flows, use uncommon confirmation screens, or provide email-only confirmations; those applications may not be detected. Always verify entries. No applications are submitted by the extension. It does not read passwords or send tracked records to a server, but its broad content-script access means you should review its source before installation. All tracking is browser-local and will not sync to different devices unless exported/imported.
