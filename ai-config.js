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
  OPENAI_API_KEY: 'PASTE_OPENAI_API_KEY_HERE',
  OPENAI_MODEL: 'gpt-4o-mini',

  // Google Gemini (https://aistudio.google.com/apikey)
  GEMINI_API_KEY: 'PASTE_GEMINI_API_KEY_HERE',
  GEMINI_MODEL: 'gemini-3.8-flash',

  // xAI Grok (https://console.x.ai)
  GROK_API_KEY: 'PASTE_GROK_API_KEY_HERE',
  GROK_MODEL: 'grok-4.6',

  // Optional market data (https://twelvedata.com)
  TWELVE_DATA_API_KEY: 'PASTE_TWELVE_DATA_API_KEY_HERE'
};
