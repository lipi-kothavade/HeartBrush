# HeartBrush

A static landing page for HeartBrush, a nonprofit bringing creative moments to hospital care spaces.

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. No build step or package installation is required.

For example, from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
index.html       Page content and sections
styles.css       Base visual design (currently minified)
overrides.css    Brand and layout refinements
script.js        Mobile menu, footer year, demo contact form
assets/          Site images
```

## Before publishing

- Replace the two team-member placeholders and gallery tiles with real content.
- Configure the contact form with an email/form provider.
- Connect donations to a secure payment platform.
- Confirm `hello@heartbrush.org` is an active mailbox.
- Add a favicon, social links, and a production deployment host.
