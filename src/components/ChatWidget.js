import React, { useState, useRef, useEffect } from "react";
import "../styles/ChatBox.css";
import faqResponses from "../utils/faqResponses.js";
import sendEmail from "../utils/sendEmail";

const AWAY_MESSAGE = "Seems like you are away and everything is working fine. If you'r still facing any issue just ping me here, we'll get back to you as soon as possible! 🕒";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about our services 😊" },
  ]);
  const [input, setInput] = useState("");
  const [lastUserMsgTime, setLastUserMsgTime] = useState(Date.now());
  const [isAway, setIsAway] = useState(false);

  const chatEndRef = useRef(null);
  const awayTimeoutRef = useRef(null);

  // ✅ AUTO-SCROLL when messages update, chat opens, or away/resume state changes
  useEffect(() => {
    if (open) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, isAway]);

  // ⏰ Away message automation
  useEffect(() => {
    if (!open || isAway) return;
    if (awayTimeoutRef.current) clearTimeout(awayTimeoutRef.current);

    const lastMsg = messages[messages.length - 1];
    if (lastMsg && lastMsg.sender === "bot" && lastMsg.text === AWAY_MESSAGE) return;

    awayTimeoutRef.current = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: AWAY_MESSAGE,
        },
      ]);
      setIsAway(true);
    }, 60000); // 3 minutes

    return () => clearTimeout(awayTimeoutRef.current);
  }, [open, lastUserMsgTime, messages, isAway]);

  const handleSend = async () => {
    if (!input.trim() || isAway) return;

    setLastUserMsgTime(Date.now());

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const found = faqResponses.find((faq) => faq.question.test(input));
    if (found) {
      const botMsg = { sender: "bot", text: found.answer };
      setMessages((prev) => [...prev, botMsg]);
    } else {
      const fallback = {
        sender: "bot",
        text: "Hmm 🤔 I don't have an answer right now, but we've sent your question to our team!",
      };
      setMessages((prev) => [...prev, fallback]);

      try {
        await sendEmail(input);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Oops! Something went wrong. We couldn't send your question to support. Try again later.",
          },
        ]);
      }
    }
    setInput("");
  };

  // Footer actions
  const handleClose = () => setOpen(false);

  const handleStartFresh = () => {
    setMessages([{ sender: "bot", text: "Hi! Ask me anything about our services 😊" }]);
    setInput("");
    setIsAway(false);
    setLastUserMsgTime(Date.now());
  };

  const handleContinue = () => {
    setMessages((prev) => prev.filter((msg) => msg.text !== AWAY_MESSAGE));
    setIsAway(false);
    setLastUserMsgTime(Date.now());
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
            <button className="closeBtn" onClick={handleClose}>×</button>
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
            {isAway ? (
              <div className="away-options">
                <button onClick={handleClose}>Close Chat</button>
                <button onClick={handleStartFresh}>Start Fresh Chat</button>
                <button onClick={handleContinue}>Continue Chat</button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  disabled={isAway}
                />
                <button onClick={handleSend} disabled={isAway}>Send</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
