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
