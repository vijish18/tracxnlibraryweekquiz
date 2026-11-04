"use strict";

const questions = [
  [
    "Microsoft",
    "How many companies has Microsoft acquired in the last 24 months as of your research date? How many are AI companies?",
    "Microsoft profile → Acquisitions"
  ],
  [
    "Miro",
    "Give the latest funding round type, date, amount and currency. Name any 3 investors listed in its profile.",
    "Miro → Funding rounds / Investors"
  ],
  [
    "Bending Spoons",
    "Give its total acquisitions and name any 3 acquired companies.",
    "Bending Spoons → Acquisitions"
  ],
  [
    "Classiq",
    "Give its total funding with currency and name 2 competitors.",
    "Classiq → Funding / Competitors"
  ],
  [
    "Blume Ventures",
    "Name 3 healthtech portfolio companies other than Cent.",
    "Blume Ventures → Portfolio → Healthtech"
  ],
  [
    "NVIDIA",
    "How many Indian startups are in its investment portfolio? Name 2.",
    "NVIDIA investor profile → Portfolio → India"
  ],
  [
    "Peak XV",
    "Name the top 3 sectors ranked by portfolio company count.",
    "Peak XV → Portfolio by sector"
  ],
  [
    "Tractian",
    "Give its founding year, first unicorn funding-round year, and elapsed years by subtraction. If no unicorn round is listed, state that.",
    "Tractian → Overview / Funding rounds"
  ],
  [
    "Indian gaming",
    "Name 3 Indian gaming startups other than Matiks and give each latest round type, date, amount and currency if available.",
    "Gaming → India → latest funding"
  ],
  [
    "Instinct",
    "Identify the exact company profile used, name its latest round's lead investors, and compare its total funding with 2 competitors, including amounts and currencies. State if no matching company or data is available.",
    "Instinct → Funding rounds / Competitors"
  ]
];

const list = document.querySelector("#question-list");
questions.forEach(([company, prompt, hint]) => {
  const item = document.createElement("li");
  const title = document.createElement("strong");
  title.textContent = company;
  const text = document.createElement("p");
  text.textContent = prompt;
  const navigation = document.createElement("small");
  navigation.textContent = hint;
  item.append(title, text, navigation);
  list.append(item);
});

function parseGoogleFormUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname !== "docs.google.com" ||
        url.port || url.username || url.password ||
        !/^\/forms\/d\/(?:e\/)?[a-zA-Z0-9_-]+\/viewform\/?$/.test(url.pathname)) return null;
    // Ignore any supplied prefill parameters to avoid unintentionally sharing data.
    url.search = "";
    url.hash = "";
    return url;
  } catch { return null; }
}

const configuredValue = window.QUIZ_CONFIG?.googleFormUrl;
const form = parseGoogleFormUrl(configuredValue);
if (form) {
  document.querySelector("#form-link").href = form.href;
  form.searchParams.set("embedded", "true");
  document.querySelector("#quiz-frame").src = form.href;
  document.querySelector("#form-pending").hidden = true;
  document.querySelector("#form-connected").hidden = false;
} else if (configuredValue) {
  console.error("Invalid quiz form URL. Use the full HTTPS docs.google.com Forms responder URL ending in /viewform.");
}
