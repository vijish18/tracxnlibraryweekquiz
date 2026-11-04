# PES × Tracxn Discovery Challenge

A responsive HTML/CSS/JavaScript website for PES Library Week, 14–21 November 2026. No frontend build step, Apps Script, custom response API, or database. Google Forms handles actual quiz entry and submission; link the form to Google Sheets for responses.

## Current state

The website design is complete as a first preview. **No Google Form has been created or connected, and this website is not published.** Empty form configuration shows a clear setup message and collects no answers. The research preview contains draft prompts from the supplied PDF; headlines and deep links have not been validated. Name-based PES and Tracxn branding is used, not official logo artwork.

## Local preview

Run `python3 -m http.server 8000` from this directory and visit http://localhost:8000. No installation is needed. Google Fonts are optional; system fonts are the fallback. The site does not include analytics or cookies; an embedded Google Form has Google's own behavior and policies.

## Create and connect the Google Form

1. Create a Google Form under the event organiser's account using `GOOGLE_FORM_SETUP.md`.
2. Review each question against PES's current Tracxn access and approved answer key. Decide required fields, reference date, repeat-submission policy and scoring before publishing.
3. In Google Forms, open Responses and select the Google Sheets destination. Keep the response Sheet private. Do not enable public response summaries.
4. Publish the form with appropriate responder access. If limiting to one response, confirm the Google sign-in requirement suits PES participants.
5. Copy the full responder URL ending in `/viewform`. If using a shortened forms.gle link, open it first and copy its final docs.google.com URL. Do not use an editor link.
6. Put the responder URL in `config.js` as `googleFormUrl`. The site generates the embed URL automatically. Only HTTPS docs.google.com Forms responder links are accepted.
7. Test in a signed-out browser and with a PES account. Complete a real test submission, verify Google Forms' confirmation, and check the new Sheet row. Remove test responses before launch.

## GitHub Pages deployment

1. Create a new repository, suggested name `pes-tracxn-library-quiz`. GitHub Pages from a public repository is the simplest route. Private repository Pages availability depends on the GitHub plan. Do not commit participant data, responses, answer keys, or credentials.
2. Upload these project files to the repository root, preserving `.github/workflows/pages.yml`.
3. Use `main` as the default branch. In Settings → Pages, choose **GitHub Actions** as the build source.
4. Open Actions and run **Deploy quiz website to GitHub Pages**, or push a commit to `main`.
5. The deployment workflow publishes only index.html, styles.css, app.js and config.js. Its deployment result gives the participant URL; it will typically be `https://vijish18.github.io/pes-tracxn-library-quiz/` if that owner and name are used. This is a proposed URL, not an existing deployment.
6. Test the published page on mobile and desktop, follow every link, and verify a complete Google Form submission reaches Sheets.

Updating the repository redeploys the website. Editing form questions happens in Google Forms. Updating a form's existing questions normally does not require changing the embed URL; replacing the entire form requires updating config.js.

## Constraints

- HTML/CSS styles the surrounding page. Google controls the embedded quiz fields, theme, validation and confirmation.
- The outer page cannot read cross-origin answers or detect successful submission. It never treats iframe load as submission success. Participants must see Google Forms' confirmation.
- The embedded form has a fixed, scrollable height. A direct-form fallback link remains visible. Test sign-in in the actual browsers participants will use.
- Website event dates are descriptive. Opening and closing response collection must be managed in Google Forms; a JavaScript date check would not enforce it.
- No promise of unlimited submissions or guaranteed throughput. Google Forms handles collection; test the actual event workflow and access settings.
- The preview questions are browsing prompts, not a second answer-entry interface. All responses are entered in Google Forms.

## Before the event

Confirm official branding, participant details, rules, marking guide, prize wording (if any), Tracxn source links, and headline accuracy. Decide whether to keep the public question preview. Do not publish confidential content. Verify that question wording in the preview and Google Form matches after any edits.
