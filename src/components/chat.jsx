import { useState, useRef, useEffect } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { GoogleGenAI } from "@google/genai";

export function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [messageLoading, setMessageLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! What do you want to know?", sender: "assistant" },
  ]);
  const genAI = new GoogleGenAI({});

  const chatContainerRef = useRef(null);

  async function handleSendMessage(message) {
    message.preventDefault();
    if (!inputValue.trim()) return; // Verhindere leere Nachrichten

    const newUserMessage = { id: Date.now(), text: inputValue, sender: "user" };
    // Sende den *gesamten* bisherigen Nachrichtenverlauf für den Kontext
    const updatedMessages = [...messages, newUserMessage]; 
    
    setMessages(updatedMessages);
    setInputValue("");
    setMessageLoading(true);

    try {
      // Hier ist die Änderung: Rufe dein eigenes Backend auf
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Sende den bisherigen Verlauf an dein Backend
        body: JSON.stringify({ history: updatedMessages }), 
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiText = data.text || "Error: no response.";

      const newAssistantMessage = {
        id: Date.now(),
        text: aiText,
        sender: "assistant",
      };

      setMessages([...updatedMessages, newAssistantMessage]);
    } catch (err) {
      console.error(err);
      // Optional: Eine Fehlermeldung im Chat anzeigen
      const errorMessage = {
        id: Date.now(),
        text: "Sorry, something went wrong.",
        sender: "assistant",
      };
      setMessages([...updatedMessages, errorMessage]);
    } finally {
      setMessageLoading(false);
    }
  }

  useEffect(() => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      const maxScrollTop = scrollHeight - clientHeight;
      chatContainerRef.current.scrollTo({
        top: maxScrollTop,
        behavior: "smooth",
      });
    }
  }, [messages, messageLoading]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      id="chat"
      className="flex flex-col items-center justify-center mb-[5vh] md:mb-[10vh] mt-[10vh] md:mt-[20vh] scroll-m-36"
    >
      <div>
        <h2 className="text-4xl md:text-5xl mb-7 md:mb-9 font-bold font-mono text-light-purple">
          ai chat
        </h2>
      </div>
      <div className="min-w-[300px] max-w-[500px] w-[80vw] md:w-[70vw] lg:w-[50vw] min-h-[200px] max-h-[600px] h-[50vh] rounded-2xl outline-2 outline-light-purple bg-dark-gray drop-shadow-lg">
        <div className="flex text-center items-center justify-center h-[12%] border-b-1 border-light-purple shadow-[0_8px_16px_rgba(0,0,0,0.07)]">
          <h1 className="text-2xl text-light-purple font-bold">chat with me</h1>
        </div>
        <div ref={chatContainerRef} className="overflow-y-auto h-[68%] p-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={classNames(
                message.sender == "assistant"
                  ? "justify-self-start bg-light-purple rounded-bl-none"
                  : "justify-self-end bg-light-blue rounded-br-none",
                "flex mb-2 text-sm max-w-[80%] w-fit rounded-2xl"
              )}
            >
              <div className="p-2">
                <span className="text-wrap text-[0.7rem] md:text-[0.8rem] w-max">
                  {message.text}
                </span>
              </div>
            </div>
          ))}
          {messageLoading && (
            <div className="pl-2">
              <span className="text-darker-blue text-[0.8rem] font-thin italic">
                thinking...
              </span>
            </div>
          )}
        </div>
        <div className="flex justify-center h-[20%] rounded-b-2xl shadow-[0_-8px_16px_rgba(0,0,0,0.1)] border-t-2 border-[#1c1c1c]">
          <div className="flex flex-col items-center justify-center max-w-[90%] w-full  ">
            <form
              onSubmit={handleSendMessage}
              className="flex items-center justify-between w-full h-[45%] mb-[12px] md:mb-3"
            >
              <div className="flex items-center justify-center w-[85%] h-full rounded-full outline-1 outline-light-purple bg-normal-gray focus-within:outline-none transform transition-all duration-150">
                <input
                  required
                  id="messageInput"
                  type="text"
                  placeholder=""
                  value={inputValue}
                  onChange={(input) => setInputValue(input.target.value)}
                  className="peer h-full px-0 w-[80%] truncate text-light-blue focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="messageInput"
                  className="absolute text-[0.7rem] md:text-[0.8rem] text-light-blue origin-[0] left-10 z-10 -translate-y-5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 duration-300 transform transition-all"
                >
                  ask me
                </label>
              </div>
              <button type="submit" className="w-[10%] hover:cursor-pointer">
                <PaperPlaneIcon className="text-white size-6" />
              </button>
            </form>
            <div className="flex justify-start items-center h-[5%] w-full">
              <span className="text-[0.5rem] md:text-[0.6rem] text-darker-blue italic truncate">
                only a gimmick. many answers are misleading. check my portfolio
                to learn more.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
