TRADING STRATEGY VAULT — 3 AI FINAL (Fixed Version)

AI providers:
- OpenAI (gpt-4o-mini)
- Google Gemini (gemini-3.8-flash)
- xAI Grok (grok-4.6)
- Optional Twelve Data for market context

========================================
QUICK SETUP
========================================
1. Open ai-config.js
2. Replace PASTE_... with your real API keys
3. Make sure there are NO extra spaces
4. Upload the whole folder to Netlify / GitHub Pages / any static host
   OR just open index.html locally (some APIs may have CORS issues locally)

========================================
COMMON ERRORS & HOW TO FIX
========================================

1. Grok 403 — "no credits or licenses yet"
   → Your xAI team has zero credits.
   → Go to: https://console.x.ai
   → Buy credits / licenses for the team.
   → Then try again.

2. Gemini 401 — "invalid authentication credentials / Expected OAuth 2"
   → Key is wrong, restricted, or API not enabled.
   → Create a fresh key from https://aistudio.google.com/apikey
   → In Google Cloud Console enable "Generative Language API"
   → Temporarily set Application restrictions = None
   → Paste key carefully (no spaces)

3. OpenAI "Failed to fetch"
   → Usually network / CORS / billing / invalid key
   → Check OpenAI dashboard → Billing is active
   → Try Incognito mode or different browser
   → Make sure key starts with sk-

========================================
SECURITY
========================================
Browser-side API keys can be seen by anyone who visits the site.
Do not commit real production keys to a public repository.
For serious use, put the AI calls behind your own backend/proxy.

The AI signal is an educational estimate only.
It is NOT a guaranteed trade instruction.
Use at your own risk.
