"use strict";

// The ten questions. Answers are deliberately not stored anywhere on this site.
const COMPANY_COLUMNS = "name%2CtracxnScore%2Clatest5YearsRevenue%2ClatestFundingRoundDate%2Cstage%2CpaFeedIdFilter%2CcareersPage%2CspecialFlags%2CcountryNameFilter%2CfoundedYear";
const ROUND_COLUMNS = "companyDetails%2CfundingDate%2CfoundedYear%2Camount%2Cvaluation%2ClatestDomainAnnualRevenue%2Clocations%2CfundingRoundName%2CcompanyStage%2CfundingroundPreMoneyValuation%2CrevenueMultiple%2CevEbitda%2CinvestorList";
const DEAL_COLUMNS = "company%2CannouncementDate%2CfoundedYear%2Clocations%2Cstakes%2CacquisitiontransactionNormalizedAmount%2ClatestDomainAnnualRevenue%2Csectors%2CacquisitionType%2CacquisitionMultiple%2CevEbitda%2CacquirerList%2CfacilitatorList%2CacquisitionSummary";
const TRACXN = "https://platform.tracxn.com/a/s/query/t/";

const QUESTIONS = [
  { n: 1, kind: "url", topic: "Crypto",
    story: "The ED’s search of CoinDCX last week capped a lean stretch for Indian crypto.",
    ask: "In all of 2025, only two India-based crypto companies raised a round of $1 million or more. Which one raised the bigger round?",
    start: TRACXN + "transactions/t/investments/table?s=sort%3DtransactionAmount%7Corder%3DDESC#%7CtableKeys%3D" + ROUND_COLUMNS + "%7CselectedCurrency%3DINR",
    startLabel: "Open funding rounds in Tracxn",
    hint: ["Sector: Cryptocurrencies", "Location: India", "Funding round date: 2025", "Funding round amount: Min 1000000", "Sort: funding amount, high to low"] },
  { n: 2, kind: "url", topic: "Streaming",
    story: "EloElo has just raised $80 million and carries Tracxn’s Soonicorn tag.",
    ask: "One rung below it, Tracxn tags 9 India-based OTT Video companies as Minicorns. Which of the 9 is the youngest?",
    start: TRACXN + "companiescovered/t/all/table?h=e2a4730616a822cdee12d0c8593ddea5d67482a76f82e648aefe10361805e242&s=sort%3DfoundedYear%7Corder%3DDESC#%7CtableKeys%3D" + COMPANY_COLUMNS + "%2CsoonicornFlag%7CselectedCurrency%3DINR",
    startLabel: "Open companies in Tracxn",
    hint: ["Sector: OTT Video", "Location: India", "Latest unicorn and minicorn status: Minicorn", "Sort: founded year, high to low"] },
  { n: 3, kind: "url", topic: "Travel",
    story: "MakeMyTrip, founded in 2000, has just bought a majority stake in Quick Ride.",
    ask: "Among the 29 India-based Online Travel companies Tracxn tags as Minicorns, exactly one was founded in the same year as MakeMyTrip. Which one?",
    start: TRACXN + "companiescovered/t/all/table?h=252abdd3516143806030a582dd9e4f09a91257c2143336cdfb0bcf807b4aac02&s=sort%3DfoundedYear%7Corder%3DDESC#%7CtableKeys%3D" + COMPANY_COLUMNS + "%2CsoonicornFlag%7CselectedCurrency%3DINR",
    startLabel: "Open companies in Tracxn",
    hint: ["Sector: Online Travel", "Location: India", "Latest unicorn and minicorn status: Minicorn", "Founded year: 2000"] },
  { n: 4, kind: "url", topic: "Space",
    story: "SpaceX has listed on Nasdaq at $135 a share, and India has a space race of its own.",
    ask: "Tracxn tags 28 India-based Space Tech companies as Minicorns, four of them founded in 2021. Which of those four has raised the least?",
    start: TRACXN + "companiescovered/t/all/table?h=48c49a3a3c9b50bf1104e81d714c840d860c08c41d086ceaf07a2d079a815e3f&s=sort%3DtotalMoneyRaised%7Corder%3DASC#%7CselectedCurrency%3DINR%7CtableKeys%3Dname%2CtotalMoneyRaised%2CtracxnScore%2Clatest5YearsRevenue%2ClatestFundingRoundDate%2Cstage%2CpaFeedIdFilter%2CcareersPage%2CspecialFlags%2CcountryNameFilter%2CfoundedYear",
    startLabel: "Open companies in Tracxn",
    hint: ["Sector: Space Tech", "Location: India", "Latest unicorn and minicorn status: Minicorn", "Founded year: 2021", "Sort: total funding, low to high"] },
  { n: 5, kind: "url", topic: "Generative AI",
    story: "India is now ChatGPT’s largest market, and Indian founders have been building on the technology since ChatGPT launched in 2022.",
    ask: "Tracxn tags 6 India-based Generative AI companies founded in 2022 or 2023 as Minicorns, and only two of them were founded in 2022. Which of those two has raised less?",
    start: TRACXN + "companiescovered/t/all/table?h=790d9387ad81aaeb71abe9c62b6eb6e44c6aea8223f923f21be572b4a2feec9e&s=sort%3DtotalMoneyRaised%7Corder%3DASC#%7CtableKeys%3Dname%2CtotalMoneyRaised%2CtracxnScore%2Clatest5YearsRevenue%2ClatestFundingRoundDate%2Cstage%2CpaFeedIdFilter%2CcareersPage%2CspecialFlags%2CcountryNameFilter%2CfoundedYear%7CselectedCurrency%3DINR",
    startLabel: "Open companies in Tracxn",
    hint: ["Sector: Generative AI", "Location: India", "Latest unicorn and minicorn status: Minicorn", "Founded year: 2022", "Sort: total funding, low to high"] },
  { n: 6, kind: "url", topic: "Fashion",
    story: "Lenskart’s quarterly profit has doubled, a reminder that it is one of the few online fashion brands to reach the stock market.",
    ask: "Many of its peers from the early 2010s are still climbing: Tracxn tags 12 India-based Fashion Tech companies founded between 2010 and 2014 as Minicorns. Which is the only one founded in 2010?",
    start: TRACXN + "companiescovered/t/all/table?h=e2a4730616a822cdee12d0c8593ddea5d67482a76f82e648aefe10361805e242&s=sort%3DtotalMoneyRaised%7Corder%3DASC#%7CtableKeys%3Dname%2CtotalMoneyRaised%2CtracxnScore%2Clatest5YearsRevenue%2ClatestFundingRoundDate%2Cstage%2CpaFeedIdFilter%2CcareersPage%2CspecialFlags%2CcountryNameFilter%2CfoundedYear%7CselectedCurrency%3DINR",
    startLabel: "Open companies in Tracxn",
    hint: ["Sector: Fashion Tech", "Location: India", "Latest unicorn and minicorn status: Minicorn", "Founded year: 2010"] },
  { n: 7, kind: "number", topic: "Big Tech",
    story: "Microsoft cut 4,800 jobs this year and offered exits to 60,000 more, yet it has a long habit of buying companies purely for their teams.",
    ask: "Of all the acquisitions Tracxn records for Microsoft, how many are classed as acqui-hires?",
    start: TRACXN + "transactions/t/allacquisitions/table?h=390e45ddce1e1ac29b0d40990b3349924e19222afd2f85c57a812fdc46c19d64&s=sort%3DannouncementDate%7Corder%3DDEFAULT#%7CtableKeys%3D" + DEAL_COLUMNS + "%7CselectedCurrency%3DINR",
    startLabel: "Open Microsoft’s acquisitions in Tracxn",
    hint: ["Acquisition Type: Acqui-Hired"] },
  { n: 8, kind: "number", topic: "Fashion",
    story: "GIVA has just raised over $100 million, but it was not the only Indian fashion company to attract money this year.",
    ask: "How many funding rounds of $10 million or more did India’s Fashion Tech companies raise between January and October 2026?",
    start: TRACXN + "transactions/t/investments/table?h=f0f571746d172879af4736430ca77d25ab2a7439c4bc1d22dd42c7ede35d6d8d&s=sort%3DfundingroundFundingRoundDate%7Corder%3DDEFAULT&o=tracxn-mcp#%7CtableKeys%3D" + ROUND_COLUMNS + "%7CselectedCurrency%3DINR",
    startLabel: "Open funding rounds in Tracxn",
    hint: ["Sector: Fashion Tech", "Location: India", "Funding round date: 1 January to 31 October 2026", "Funding round amount: Min 10000000"] },
  { n: 9, kind: "number", topic: "AI Infrastructure",
    story: "Cerebras raised $5.55 billion in its IPO because the world is paying up for AI infrastructure, and India is part of that rush.",
    ask: "How many funding rounds of $1 million or more did India’s AI Infrastructure companies raise between January and October 2026?",
    start: TRACXN + "transactions/t/investments/table?h=1f8b85220ced70a18f90fe5b11df85d65fdfc1207cb1d48fe86a664d6bbe047d&s=sort%3DfundingroundFundingRoundDate%7Corder%3DDEFAULT&o=tracxn-mcp#%7CtableKeys%3D" + ROUND_COLUMNS + "%7CselectedCurrency%3DINR",
    startLabel: "Open funding rounds in Tracxn",
    hint: ["Sector: AI Infrastructure", "Location: India", "Funding round date: 1 January to 31 October 2026", "Funding round amount: Min 1000000"] },
  { n: 10, kind: "number", topic: "AI deals",
    story: "The $60 billion purchase of AI coding tool Cursor was the biggest deal in a busy year for AI takeovers, and some of those deals were made just to hire the team.",
    ask: "How many Generative AI companies were acqui-hired between January and October 2026?",
    start: TRACXN + "transactions/t/allacquisitions/table?h=112644477b54da87e9d841add02a2b03f15d05ff42048fa06d8fc9314c6c3521&s=sort%3DannouncementDate%7Corder%3DDEFAULT&o=tracxn-mcp#%7CtableKeys%3D" + DEAL_COLUMNS + "%7CselectedCurrency%3DINR",
    startLabel: "Open acquisitions in Tracxn",
    hint: ["Sector: Generative AI", "Acquisition date: 1 January to 31 October 2026", "Acquisition Type: Acqui-Hired"] }
];

function parseGoogleFormUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "docs.google.com" ||
        url.port || url.username || url.password ||
        !/^\/forms\/d\/(?:e\/)?[a-zA-Z0-9_-]+\/viewform\/?$/.test(url.pathname)) return null;
    url.search = "";
    url.hash = "";
    return url;
  } catch { return null; }
}

const STORAGE_KEY = "tracxn-library-week-2026-answers";
function loadAnswers() {
  try { return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function saveAnswers(answers) {
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers)); } catch { /* storage unavailable */ }
}
const answers = loadAnswers();

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Returns an error message for an answer, or "" when it is acceptable.
function problemWith(question, value) {
  const text = (value || "").trim();
  if (!text) return "Add your answer.";
  if (question.kind === "number") return /^\d{1,6}$/.test(text) ? "" : "Enter a whole number, for example 12.";
  let host = "";
  try { host = new URL(text).hostname; } catch { return "Paste the full link, starting with https://"; }
  return /(^|\.)tracxn\.com$/.test(host) ? "" : "This should be a Tracxn link.";
}

function renderQuestion(question) {
  const item = el("li", "question");
  item.id = "question-" + question.n;

  const head = el("div", "question-head");
  head.append(el("span", "question-number", String(question.n).padStart(2, "0")), el("span", "question-topic", question.topic));
  const state = el("span", "question-state", "Answered");
  head.append(state);

  const story = el("p", "question-story", question.story);
  const ask = el("p", "question-ask", question.ask);

  const start = el("a", "start-link");
  start.href = question.start;
  start.target = "_blank";
  start.rel = "noopener noreferrer";
  start.append(el("span", "start-step", "Start here"), el("span", "start-label", question.startLabel + " ↗"));

  const hint = el("div", "hint");
  hint.append(el("span", "hint-label", "Hint: apply these filters in order"));
  const chain = el("ol", "hint-chain");
  question.hint.forEach((step) => {
    const colon = step.indexOf(":");
    const chip = el("li", "hint-step");
    chip.append(el("span", "hint-key", step.slice(0, colon)), el("span", "hint-value", step.slice(colon + 1).trim()));
    chain.append(chip);
  });
  hint.append(chain);

  const field = el("div", "answer");
  const inputId = "answer-" + question.n;
  const label = el("label", "answer-label", question.kind === "url" ? "Your answer: the company’s Tracxn link" : "Your answer: a number");
  label.htmlFor = inputId;
  const input = el("input", "answer-input");
  input.id = inputId;
  input.type = question.kind === "url" ? "url" : "text";
  if (question.kind === "number") input.inputMode = "numeric";
  input.placeholder = question.kind === "url" ? "https://platform.tracxn.com/a/d/company/…" : "e.g. 12";
  input.autocomplete = "off";
  input.spellcheck = false;
  input.value = answers[question.n] || "";
  const error = el("p", "answer-error");
  error.id = inputId + "-error";
  error.hidden = true;
  input.setAttribute("aria-describedby", error.id);
  field.append(label, input, error);

  function refresh(showError) {
    const problem = problemWith(question, input.value);
    item.classList.toggle("is-answered", !problem);
    const visible = showError && problem && input.value.trim() !== "";
    error.hidden = !visible;
    error.textContent = visible ? problem : "";
    input.setAttribute("aria-invalid", visible ? "true" : "false");
  }
  input.addEventListener("input", () => {
    answers[question.n] = input.value;
    saveAnswers(answers);
    refresh(false);
    updateProgress();
  });
  input.addEventListener("blur", () => refresh(true));
  refresh(false);

  item.append(head, story, ask, start, hint, field);
  return item;
}

function answeredCount() {
  return QUESTIONS.filter((question) => !problemWith(question, answers[question.n])).length;
}
function updateProgress() {
  const done = answeredCount();
  document.querySelector("#progress-count").textContent = done + " of " + QUESTIONS.length;
  document.querySelector("#progress-fill").style.width = (done / QUESTIONS.length * 100) + "%";
  document.querySelector("#progress").classList.toggle("is-complete", done === QUESTIONS.length);
}

const partOne = document.querySelector("#questions-part-1");
const partTwo = document.querySelector("#questions-part-2");
if (partOne && partTwo) {
  QUESTIONS.forEach((question) => (question.n <= 6 ? partOne : partTwo).append(renderQuestion(question)));
  updateProgress();
}

const form = parseGoogleFormUrl(window.QUIZ_CONFIG?.googleFormUrl);
const fields = window.QUIZ_CONFIG?.answerFields || {};
const detailFields = window.QUIZ_CONFIG?.detailFields || {};
const submitForm = document.querySelector("#submit");
const submitButton = document.querySelector("#submit-button");
const warning = document.querySelector("#submit-warning");
const DETAILS = [
  { key: "name", id: "detail-name", check: (v) => v.length >= 2 ? "" : "Enter your full name." },
  { key: "email", id: "detail-email", check: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address." },
  { key: "university", id: "detail-university", check: (v) => v.length >= 2 ? "" : "Enter your university’s name." },
  { key: "department", id: "detail-department", check: (v) => v.length >= 2 ? "" : "Enter your department and enrolled year." }
];

function showDetailError(detail, message) {
  const input = document.querySelector("#" + detail.id);
  const error = document.querySelector("#" + detail.id + "-error");
  error.hidden = !message;
  error.textContent = message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
}
DETAILS.forEach((detail) => {
  const input = document.querySelector("#" + detail.id);
  if (input) input.addEventListener("input", () => { showDetailError(detail, ""); showWarning(""); });
});

function showWarning(message) {
  warning.hidden = !message;
  warning.textContent = message;
}

// Sends the response straight to Google Forms. The reply cannot be read from another site,
// so a completed request is treated as sent and a network failure as not sent.
async function sendResponse(values) {
  const action = form.href.replace(/\/viewform\/?$/, "/formResponse");
  await fetch(action, { method: "POST", mode: "no-cors", body: new URLSearchParams(values) });
}

if (submitForm && form) {
  submitForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitButton.disabled) return;

    const missing = QUESTIONS.filter((question) => problemWith(question, answers[question.n]));
    if (missing.length) {
      showWarning((missing.length === 1 ? "Question " : "Questions ") + missing.map((question) => question.n).join(", ") +
        (missing.length === 1 ? " still needs" : " still need") + " a valid answer.");
      const first = document.querySelector("#answer-" + missing[0].n);
      first.dispatchEvent(new Event("blur"));
      first.scrollIntoView({ block: "center" });
      first.focus({ preventScroll: true });
      return;
    }

    const values = {};
    let firstBad = null;
    DETAILS.forEach((detail) => {
      const input = document.querySelector("#" + detail.id);
      const value = input.value.trim();
      const problem = detail.check(value);
      showDetailError(detail, problem);
      if (problem && !firstBad) firstBad = input;
      values[detailFields[detail.key]] = value;
    });
    if (firstBad) {
      showWarning("Add your details before submitting.");
      firstBad.focus();
      return;
    }
    QUESTIONS.forEach((question) => { values[fields[question.n]] = answers[question.n].trim(); });

    showWarning("");
    submitButton.disabled = true;
    submitButton.firstChild.textContent = "Sending… ";
    try {
      await sendResponse(values);
    } catch {
      submitButton.disabled = false;
      submitButton.firstChild.textContent = "Submit my answers ";
      showWarning("Your answers could not be sent. Check your internet connection and press Submit again. Your answers are still saved here.");
      return;
    }
    const name = values[detailFields.name];
    try { window.localStorage.removeItem(STORAGE_KEY); } catch { /* storage unavailable */ }
    document.querySelector("#details").hidden = true;
    document.querySelector(".submit-actions").hidden = true;
    document.querySelector(".submit-head").hidden = true;
    document.querySelector("#done-text").textContent = "Thank you, " + name + ". Your ten answers were submitted at " +
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + ". You can close this page.";
    document.querySelector("#submit-done").hidden = false;
    document.querySelectorAll(".answer-input").forEach((input) => { input.readOnly = true; });
    document.querySelector("#submit-done").scrollIntoView({ block: "center" });
  });
} else if (submitButton) {
  submitButton.disabled = true;
  document.querySelector("#submit-status").textContent = "The quiz is being set up. Please check back shortly.";
}

const clearButton = document.querySelector("#clear-button");
if (clearButton) {
  let armed = false;
  clearButton.addEventListener("click", () => {
    if (!armed) {
      armed = true;
      clearButton.textContent = "Click again to clear all answers";
      window.setTimeout(() => { armed = false; clearButton.textContent = "Clear my answers"; }, 4000);
      return;
    }
    QUESTIONS.forEach((question) => {
      delete answers[question.n];
      const input = document.querySelector("#answer-" + question.n);
      input.value = "";
      input.dispatchEvent(new Event("input"));
    });
    showWarning("");
    armed = false;
    clearButton.textContent = "Clear my answers";
  });
}

const researchTips = [
  { title: "Start by signing in to Tracxn.", text: "Open Tracxn in another tab and sign in with your institution account. Every “Start here” button will then take you straight to the right list." },
  { title: "Build your filters step by step.", text: "Each hint is a chain. Add the first filter, watch the list narrow, then add the next. Every step brings you closer to the answer." },
  { title: "Questions 1 to 6: share the company’s link.", text: "Click the company’s name to open its Tracxn page, then copy the link from your browser’s address bar and paste it as your answer." },
  { title: "Questions 7 to 10: read the result count.", text: "With all the filters on, Tracxn shows the number of results above the table. That number is your answer." },
  { title: "Double-check your dates.", text: "For funding rounds and acquisitions, use 1 January to 31 October 2026 so your count matches the question." }
];
let researchTipIndex = 0;
function showResearchTip(direction) {
  researchTipIndex = (researchTipIndex + direction + researchTips.length) % researchTips.length;
  const tip = researchTips[researchTipIndex];
  document.querySelector("#tip-title").textContent = tip.title;
  document.querySelector("#tip-text").textContent = tip.text;
  document.querySelector("#tip-icon").textContent = String(researchTipIndex + 1);
  document.querySelector("#tip-counter").textContent = (researchTipIndex + 1) + " of " + researchTips.length;
  document.querySelectorAll("#tip-dots span").forEach((dot, index) => dot.classList.toggle("is-current", index === researchTipIndex));
}
const tipDots = document.querySelector("#tip-dots");
if (tipDots) researchTips.forEach((tip, index) => { const dot = document.createElement("span"); if (index === 0) dot.className = "is-current"; tipDots.append(dot); });
const nextTip = document.querySelector("#next-tip");
const previousTip = document.querySelector("#previous-tip");
if (nextTip && previousTip) {
  const card = document.querySelector(".tip-card");
  const content = document.querySelector(".tip-content");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.id = "toggle-tip-rotation";
  let paused = reducedMotion.matches;
  let hovered = false;
  let focused = false;
  let rotationTimer = null;
  previousTip.parentElement.insertBefore(toggle, previousTip);

  function scheduleRotation() {
    window.clearTimeout(rotationTimer);
    const running = !paused && !hovered && !focused && !document.hidden;
    content.setAttribute("aria-live", running ? "off" : "polite");
    toggle.textContent = paused ? "▶" : "Ⅱ";
    toggle.setAttribute("aria-label", paused ? "Play research tips" : "Pause research tips");
    if (running) {
      rotationTimer = window.setTimeout(() => {
        showResearchTip(1);
        scheduleRotation();
      }, 7000);
    }
  }
  nextTip.addEventListener("click", () => {
    showResearchTip(1);
    scheduleRotation();
  });
  previousTip.addEventListener("click", () => {
    showResearchTip(-1);
    scheduleRotation();
  });
  toggle.addEventListener("click", () => {
    paused = !paused;
    scheduleRotation();
  });
  card.addEventListener("mouseenter", () => { hovered = true; scheduleRotation(); });
  card.addEventListener("mouseleave", () => { hovered = false; scheduleRotation(); });
  card.addEventListener("focusin", () => { focused = true; scheduleRotation(); });
  card.addEventListener("focusout", (event) => {
    focused = card.contains(event.relatedTarget);
    scheduleRotation();
  });
  document.addEventListener("visibilitychange", scheduleRotation);
  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) paused = true;
    scheduleRotation();
  });
  scheduleRotation();
}
