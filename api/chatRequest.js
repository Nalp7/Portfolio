import { GoogleGenerativeAI } from "@google/generative-ai";

// API-Key wird sicher vom Server aus der Umgebungsvariable geladen
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export default async function chatRequest(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { history } = req.body; // Empfange den bisherigen Chatverlauf

    if (!history) {
      return res.status(400).json({ error: 'No history provided' });
    }
    
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Oder dein gewünschtes Modell

    // ACHTUNG: Google erwartet ein bestimmtes Format für den Chatverlauf.
    // Du musst deine `messages`-Struktur eventuell anpassen.
    // Beispielformat: [{ role: "user", parts: [{ text: "Hallo" }] }, { role: "model", parts: [{ text: "Hi!" }] }]
    // Hier vereinfachen wir und nehmen nur die letzte Nachricht. In einer echten App würdest du den `history`-Array umwandeln.
    const lastUserMessage = history.findLast(m => m.sender === 'user').text;

    const result = await model.generateContent(lastUserMessage);
    const response = await result.response;
    const text = response.text();

    // Sende die Antwort des Models zurück an das Frontend
    res.status(200).json({ text: text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate content' });
  }
}