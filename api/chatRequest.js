import { GoogleGenerativeAI } from "@google/generative-ai";

// Sicherer Abruf des API-Schlüssels
const apiKey = process.env.GOOGLE_API_KEY;

// Überprüfe direkt beim Start, ob der Schlüssel überhaupt vorhanden ist
if (!apiKey) {
  console.error("FEHLER: Die Umgebungsvariable GOOGLE_API_KEY wurde auf dem Server nicht gefunden.");
}

// Initialisiere die AI nur, wenn ein Schlüssel vorhanden ist
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export default async function chatRequest(req, res) {
  // Methode prüfen
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Erneut prüfen, ob die AI-Instanz oder der Schlüssel fehlt
  if (!genAI) {
    console.error("API-Aufruf fehlgeschlagen, da der GOOGLE_API_KEY nicht konfiguriert ist.");
    return res.status(500).json({ error: 'API-Schlüssel ist auf dem Server nicht konfiguriert.' });
  }

  try {
    const { history } = req.body;

    // Prüfen, ob die History ein valides Array ist
    if (!history || !Array.isArray(history) || history.length === 0) {
      return res.status(400).json({ error: 'History muss ein Array sein und Nachrichten enthalten.' });
    }
    
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Filtere die erste Nachricht, falls sie vom Assistenten kommt
    const formattedHistory = history
      .filter((message, index) => !(index === 0 && message.sender === 'assistant'))
      .map(message => ({
        role: message.sender === 'user' ? 'user' : 'model',
        parts: [{ text: message.text }],
      }));

    // Die letzte Nachricht ist die aktuelle Nutzereingabe
    const lastMessage = formattedHistory.pop();

    // Es muss eine letzte Nachricht vom Nutzer geben
    if (!lastMessage || lastMessage.role !== 'user') {
      return res.status(400).json({ error: 'Keine gültige Nutzernachricht zum Senden gefunden.' });
    }

    const chat = model.startChat({
      // Die restlichen Nachrichten bilden die Historie
      history: formattedHistory,
    });

    const result = await chat.sendMessage(lastMessage.parts[0].text);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ text });

  } catch (error) {
    // Gib den *detaillierten* Fehler im Server-Log aus
    console.error("Detaillierter Fehler von der Google AI API:", error);

    // Sende eine generische Fehlermeldung an den Client
    res.status(500).json({ error: 'Inhalt konnte nicht von der AI generiert werden.' });
  }
}