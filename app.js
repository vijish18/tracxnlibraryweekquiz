"use strict";

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

const researchTips = [
  { title: "Right name. Right company.", text: "Before using a company’s data, check its website and location to make sure you have the right profile." },
  { title: "One round or total funding?", text: "A company’s latest funding round is different from the total it has raised. Check which figure the question asks for." },
  { title: "Give the number some context.", text: "Include the currency with funding amounts. For a list or count, check that the country and date filters match the question." }
];
let researchTipIndex = 0;
function showResearchTip(direction) {
  researchTipIndex = (researchTipIndex + direction + researchTips.length) % researchTips.length;
  const tip = researchTips[researchTipIndex];
  document.querySelector("#tip-title").textContent = tip.title;
  document.querySelector("#tip-text").textContent = tip.text;
  document.querySelector("#tip-icon").textContent = String(researchTipIndex + 1).padStart(2, "0");
  document.querySelector("#tip-counter").textContent = String(researchTipIndex + 1).padStart(2, "0") + " / 03";
}
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
      }, 6000);
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
