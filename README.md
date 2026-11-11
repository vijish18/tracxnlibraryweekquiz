# PES × Tracxn Discovery Challenge

A responsive HTML/CSS/JavaScript website for PES Library Week, 14–21 November 2026. No frontend build step, Apps Script, custom response API, or database. Google Forms handles actual quiz entry and submission; link the form to Google Sheets for responses.

## Current state

The website is published on GitHub Pages and connects to the published Google Form. The form contains 5 required participant fields and 10 required paragraph questions. Responses are linked to a private Google Sheet. Public response summaries are disabled. There is no Google sign-in requirement or automatic duplicate prevention. Answers are reviewed manually. Name-based branding is used, not official logo artwork. Tracxn deep links and a faculty answer key still need organiser validation.

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
5. The deployment workflow publishes only index.html, styles.css, app.js and config.js. Its deployment result gives the participant URL; it will typically be `https://vijish18.github.io/pes-tracxn-library-quiz/` if that owner and name are used. This is the live deployment URL.
6. Test the published page on mobile and desktop, follow every link, and verify a complete Google Form submission reaches Sheets.

Updating the repository redeploys the website. Editing form questions happens in Google Forms. Updating a form's existing questions normally does not require changing the embed URL; replacing the entire form requires updating config.js.

## How answers reach Google Forms

Participants read the ten questions on the website, open each Tracxn starting link, and type their answers into the page. Answers are kept in the browser's local storage so a refresh does not lose them. "Continue to submit" then loads the Google Form with those ten answers already filled in. The participant adds their name, email and department in the form and presses Google's own Submit button.

## Constraints

- Google Forms still receives and confirms every submission. The page never submits on a participant's behalf and never treats the form loading as a successful submission. Participants must see Google Forms' confirmation.
- Only the ten quiz answers are carried in the form link. Participant details are typed into the form and are never placed in a link.
- `config.js` must list the correct entry id for each question (see `GOOGLE_FORM_SETUP.md`). If an id is wrong, that answer arrives blank and the participant has to retype it in the form.
- Website event dates are descriptive. Opening and closing response collection must be managed in Google Forms.
- No answer key belongs in this repository or on the website.

## Before the event

Confirm official branding, participant details, rules, marking guide, prize wording (if any), Tracxn source links, and headline accuracy. Decide whether to keep the public question preview. Do not publish confidential content. Verify that question wording in the preview and Google Form matches after any edits.
