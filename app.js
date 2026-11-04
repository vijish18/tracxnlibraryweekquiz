"use strict";

const questions = [
  ["Microsoft", "How many companies has Microsoft acquired in the last 2 years? How many of them are AI companies?", "Microsoft profile → Acquisitions → last 24 months"],
  ["Miro", "What was Miro’s last funding round, and who were its top 3 investors?", "Miro profile → Funding rounds / Investors"],
  ["Bending Spoons", "How many acquisitions has Bending Spoons made? Name any 3 of them.", "Bending Spoons profile → Acquisitions"],
  ["Classiq", "How much had Classiq raised in total? Name 2 of its competitors.", "Classiq profile → Funding / Competitors"],
  ["Blume Ventures", "Name 3 other healthtech startups in Blume Ventures’ portfolio.", "Blume Ventures investor profile → Portfolio → Healthtech"],
  ["NVIDIA", "How many Indian startups has NVIDIA invested in? Name 2.", "NVIDIA investor profile → Portfolio → India"],
  ["Peak XV", "Which 3 sectors does Peak XV invest in the most?", "Peak XV investor profile → Portfolio by sector"],
  ["Tractian", "When was Tractian founded? How many years did it take to become a unicorn?", "Tractian profile → Overview / Funding rounds"],
  ["Indian gaming", "Name 3 other Indian gaming startups and their latest funding round.", "Gaming sector → India → latest funding"],
  ["Instinct", "Who led the round? Compare Instinct’s total funding with 2 of its competitors.", "Instinct profile → Funding rounds / Competitors"]
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
