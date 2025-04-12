import React, { useState, useRef, useEffect } from "react"; 
import "../styles/ChatBox.css";
import faqResponses from "../utils/faqResponses.js";
import sendEmail from "../utils/sendEmail";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about our services 😊" },
  ]);
  const [input, setInput] = useState("");
  
  const chatEndRef = useRef(null); 
  // ✅ AUTO-SCROLL when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const found = faqResponses.find((faq) => faq.question.test(input));
    if (found) {
      const botMsg = { sender: "bot", text: found.answer };
      setMessages((prev) => [...prev, botMsg]);
      // setMessages((prev) => [...prev, { sender: "bot", text: found.answer }]);
    } else {
      const fallback = {
        sender: "bot",
        text: "Hmm 🤔 I don't have an answer right now, but we've sent your question to our team!",
      };
      setMessages((prev) => [...prev, fallback]);

      // Email fallback for support
      try {
        await sendEmail(input);
      } catch (error) {
        setMessages((prev) => [...prev,
          {
            sender: "bot",
            text: "Oops! Something went wrong. We couldn't send your question to support. Try again later.",
          }
        ])
      }
      // // Send to email using Backend server
      // await fetch("/api/send-query", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ question: input }),
      // });
    }
    setInput("");
  };

  return (
    <>
      <div className={`chat-button ${open ? "hidden" : ""}`} onClick={() => setOpen(true)}>
        💬
      </div>
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Chat with us</span>
            <button onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.sender === "user" ? "user" : "bot"}`}>
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
