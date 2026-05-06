// ApiService.js
export const API_KEY = "sk-1234567890-secret"; // ❌ CRITICAL

export async function fetchData() {
  return fetch("https://api.example.com/data?apiKey=" + API_KEY);
}

