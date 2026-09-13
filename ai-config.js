/*
  ============================================
  TRADING STRATEGY VAULT — 3 AI CONFIG
  ============================================
  OpenAI + Google Gemini + xAI Grok

  SETUP (important):
  1. Open this file.
  2. Paste your real API keys replacing the PASTE_... placeholders.
  3. Do NOT leave extra spaces before/after the key.
  4. Save the file and upload the whole folder (or deploy).

  SECURITY WARNING:
  Browser-side keys are visible to anyone who opens the site.
  Never put production keys in a public GitHub repo.
  For real production use a backend/proxy.

  COMMON ERRORS & FIX:
  - Grok 403 "no credits or licenses" → Go to https://console.x.ai and buy credits for your team.
  - Gemini 401 invalid credentials → Check key is correct, enable Generative Language API, remove key restrictions, try a new key from AI Studio.
  - OpenAI "Failed to fetch" → Check billing is active, key is valid, try Incognito / different browser.
*/
window.AI_CONFIG = {
  // OpenAI (https://platform.openai.com/api-keys)
  OPENAI_API_KEY: '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',
  OPENAI_MODEL: 'gpt-4o-mini',

  // Google Gemini (https://aistudio.google.com/apikey)
  GEMINI_API_KEY: 'AQ.Ab8RN6JIWow-i3-puX6nfQD1h42ep7a4EnKub3YXfk6HioHiIg',
  GEMINI_MODEL: 'gemini-3.8-flash',

  // xAI Grok (https://console.x.ai)
  GROK_API_KEY: 'xai-G5ff3v9vw1vbknq3eEhyGNRKGPPey6JGTqkKyGHwDWGqKpJEolI3lOdJ9g31Hp21K61vslRfkCw6oG2J',
  GROK_MODEL: 'grok-4.6',

  // Optional market data (https://twelvedata.com)
  TWELVE_DATA_API_KEY: '407e0c8d63e641e0b7379977b9f2920a'
};
