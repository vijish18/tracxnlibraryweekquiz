# Google Form setup blueprint

Title: PES × Tracxn — The Discovery Challenge

Description: PES Library Week · 14–21 November 2026. Research each question using your institution's Tracxn account. Follow the navigation hints, enter your answers, and review before submitting. Platform figures can change; the organiser will provide the reference date and final rules.

Use a muted green theme and matching header. Google Forms controls styling inside the embed. Recommended structure: Participant details, Questions 1–5, Questions 6–10. Do not add a timer or promise prizes unless the organiser confirms them.

## Participant details — proposed fields

- Full name: short answer.
- University email: short answer with email validation, or the Forms email collection setting. Choose whether to verify sign-in or accept typed addresses; typed addresses do not prove identity.
- Student ID: short answer.
- Programme / department: short answer.

Confirm required fields and participant data notice with PES. Use one field per sub-answer below. Numeric fields should accept nonnegative whole numbers where appropriate; funding amounts should include currency and units.

## Questions

The form holds 4 participant fields (full name, university email, university name, department and enrolled year) and 10 required paragraph questions, Q1 to Q10. The question text, Tracxn starting links and filter hints live in `app.js` (the `QUESTIONS` list); the form repeats each question and its hint so it can also be answered on its own.

- Q1 to Q6: the answer is the company's Tracxn link.
- Q7 to Q10: the answer is a whole number.

`config.js` maps each participant field (`detailFields`) and each question (`answerFields`) to its Google Form entry id. Every required question in the form must have an entry in `config.js`, or Google rejects the response without the page knowing. Editing a question's wording in Google Forms keeps its entry id. Deleting and re-adding a question changes the id, and `config.js` must then be updated.

The answer key is kept outside this repository. Never commit it here: the repository and the website are public.

## Evaluation and release

Recommend manual grading for these multipart research answers. Keep the marking guide private. If enabling Google Forms quiz mode, review point allocation and release grades only after review; do not expose answers during the event by accident.

Suggested confirmation: “Thank you. Your PES × Tracxn Discovery Challenge response has been recorded.” Do not promise an email receipt unless enabled and tested. Confirm the event opening and closing times in IST and manage response collection in Forms.
