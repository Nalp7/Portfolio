export default async function GetAIResponse(req, res) {
  try {
    const apiKey = process.env.OPENAI_API_KEY; // KEIN VITE prefix!
    const apiURL = "https://api.openai.com/v1/chat/completions";

    const { messageHistory } = await req.json();

    const apiMessages = messageHistory.map((m) => ({
      role: m.sender === "assistant" ? "assistant" : "user",
      content: m.text,
    }));

    const systemMessage = {
      role: "system",
      content:
        "Adapt your language based on your conversation partner's language. ...",
    };

    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model:
          "ft:gpt-4.1-nano-2025-04-14:personal:justus-portfolio-3:COrz00Oq",
        messages: [systemMessage, ...apiMessages],
      }),
    });

    const data = await response.json();

    return res.status(200).json({ content: data.choices[0].message.content });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
