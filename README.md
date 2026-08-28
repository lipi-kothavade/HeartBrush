# HeartBrush

A static site for HeartBrush, a nonprofit bringing creative moments to hospital care spaces.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. No build step or package installation is required.

For example, from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
index.html                 Home page
patient-art-sessions.html  Program detail
care-team-wellness.html    Program detail
family-involvement.html    Program detail
project-gallery.html       Example artwork for each project
styles.css                 Base visual design (currently minified)
overrides.css              Brand and layout refinements
script.js                  Mobile menu, footer year, contact form
assets/                    Logo, founder photo, and project gallery images
```

The contact form on the home page submits to FormSubmit.co and emails `lipi@heartbrush.org`.

## Before publishing

- Connect donations to a secure payment platform (the donate section currently says “Donations coming soon”).
- Add real session photos to the home-page Gallery section when they are available (it currently says “Gallery coming soon”).
- Confirm `lipi@heartbrush.org` is an active mailbox, and complete FormSubmit.co activation from the live domain if needed.
- Add a favicon, social links, and a production deployment host.
- Confirm you have rights to use every image in `assets/` before going live.
