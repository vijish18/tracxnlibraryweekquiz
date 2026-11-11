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

Participants read the ten questions on the website, open each Tracxn starting link, and type their answers into the page. Answers are kept in the browser's local storage until they submit, so a refresh does not lose them. In the final step they add their name, university email and department and press "Submit my answers". The page then posts the response straight to the Google Form's `formResponse` address. Participants never see the Google Form.

## Constraints

- A browser cannot read Google's reply to a request made from another site. The page shows "Your answers have been sent" when the request completes and an error when the network fails. It cannot detect a response that Google itself rejects, so the form must stay open, must not require sign-in, and must not gain new required questions without the page being updated.
- `config.js` must list the correct entry id for every field (see `GOOGLE_FORM_SETUP.md`). If an id is wrong, that answer is silently dropped. After any change to the form, submit one test response from the website and check it in the form's Responses tab.
- Participant details travel in the body of the request to Google, never in a link.
- Website event dates are descriptive. Opening and closing response collection must be managed in Google Forms; once the form stops accepting responses, submissions from the page are lost without an error.
- No answer key belongs in this repository or on the website.

## Security

- The site is static files only. There is no server, database, login or secret behind it, so there is nothing on the site itself to break into.
- `index.html` carries a Content-Security-Policy: scripts and styles load only from this site (plus the Lato font from Google Fonts), images only from this site and cdn.tracxn.com, and the page may send data only to docs.google.com. If you add a new script, font or data source, update that policy or the browser will block it.
- Only people with write access to the repository can change the site. Keep two-factor authentication on for the owning GitHub account and do not add collaborators you do not need.
- The Google Form's address is visible in `config.js` by necessity. Anyone can therefore send junk responses to it. Watch for obvious spam rows in the response Sheet; real entries carry a university email.
- The page refuses to load inside another site's frame, and every input has a length limit.
- The deploy workflow runs only when `main` changes. It does not run on pull requests, so a pull request from a stranger cannot publish anything. Never merge a pull request you did not ask for.
- Identity is not verified. The page cannot prove who submitted a response or stop someone submitting twice, because anyone can post to the form directly. When marking, count only the first response per university email, check the email belongs to the stated university, and treat a Tracxn link as correct only if it contains the expected company id.
- The response Sheet holds text typed by participants. Do not paste cell contents into a formula bar or run macros on them, and open exported CSV files with care.
- Never commit the answer key, participant data or credentials.

## Before the event

Confirm official branding, participant details, rules, marking guide, prize wording (if any), Tracxn source links, and headline accuracy. Decide whether to keep the public question preview. Do not publish confidential content. Verify that question wording in the preview and Google Form matches after any edits.
