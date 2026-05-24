import React, { useState, useRef, useEffect } from "react";
import "../styles/ChatBox.css";
import faqResponses from "../utils/faqResponses.js";
import { sendChatTicketEmail } from "../utils/chatTicketUtility";
import { sendChatBotConfirmation } from "../utils/confirmationEmailUtility";

const AWAY_MESSAGE =
  "Seems like you've been away. If you're still facing any issue, just ping me here — we'll get back to you as soon as possible! 🕒";

// Send icon SVG
const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! 👋 I'm the ATD assistant. Ask me anything about our services or let me help raise a support ticket." },
  ]);
  const [input, setInput] = useState("");
  const [lastUserMsgTime, setLastUserMsgTime] = useState(Date.now());
  const [isAway, setIsAway] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // User info collection state
  const [collectingUserInfo, setCollectingUserInfo] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" });
  const [currentInfoField, setCurrentInfoField] = useState("name");
  const [pendingQuery, setPendingQuery] = useState("");

  const chatEndRef = useRef(null);
  const awayTimeoutRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    if (open) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, isAway, isTyping]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Away message automation
  useEffect(() => {
    if (!open || isAway) return;
    if (awayTimeoutRef.current) clearTimeout(awayTimeoutRef.current);
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.sender === "bot" && lastMsg.text === AWAY_MESSAGE) return;

    awayTimeoutRef.current = setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: AWAY_MESSAGE }]);
      setIsAway(true);
    }, 60000);

    return () => clearTimeout(awayTimeoutRef.current);
  }, [open, lastUserMsgTime, messages, isAway]);

  // Simulate bot typing delay then show response
  const showBotReply = (text, delay = 700) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text }]);
    }, delay);
  };

  const collectUserInfo = (query) => {
    setPendingQuery(query);
    setCollectingUserInfo(true);
    setCurrentInfoField("name");
    showBotReply("I'll create a support ticket for you! First, could you share your name?", 600);
  };

  const handleUserInfoInput = () => {
    if (!input.trim()) return;
    const newUserInfo = { ...userInfo, [currentInfoField]: input.trim() };
    setUserInfo(newUserInfo);

    if (currentInfoField === "name") {
      setCurrentInfoField("email");
      showBotReply(`Nice to meet you, ${input.trim()}! What's your email address?`, 600);
    } else if (currentInfoField === "email") {
      setCurrentInfoField("phone");
      showBotReply("Great! And what's your phone number?", 600);
    } else if (currentInfoField === "phone") {
      setCollectingUserInfo(false);
      setCurrentInfoField("name");
      showBotReply("Perfect! Creating your support ticket now...", 400);
      createTicket(newUserInfo, pendingQuery);
    }

    setInput("");
  };

  const createTicket = async (info, query) => {
    try {
      const result = await sendChatTicketEmail({
        userQuery: query,
        userName: info.name,
        userEmail: info.email,
        userPhone: info.phone,
        category: "General Inquiry",
        priority: "Medium",
      });

      if (result.success) {
        try {
          const confirmResult = await sendChatBotConfirmation({
            userName: info.name,
            userEmail: info.email,
            userPhone: info.phone,
            ticketId: result.ticketId,
            userQuery: query,
            category: "General Inquiry",
            priority: "Medium",
          });
          if (!confirmResult.success) console.warn("⚠️ Confirmation email failed:", confirmResult.error);
        } catch (e) {
          console.error("❌ Confirmation email error:", e);
        }

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: `✅ Ticket created! Your ID is **${result.ticketId}**.` },
            { sender: "bot", text: `Our team will reach out to ${info.email} or ${info.phone} within 24–48 hours.` },
            { sender: "bot", text: `📧 A confirmation email has been sent to ${info.email}.` },
          ]);
        }, 1200);
      } else if (result.requiresUserInfo) {
        showBotReply("I need a bit more detail. Let's try again.", 600);
        collectUserInfo(query);
      } else {
        showBotReply("Sorry, I couldn't create the ticket. Please try again or email us directly.", 600);
      }
    } catch (err) {
      console.error("Error creating ticket:", err);
      showBotReply("Oops! Something went wrong. Please try again later.", 600);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isAway || isTyping) return;

    setLastUserMsgTime(Date.now());
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    if (collectingUserInfo) {
      handleUserInfoInput();
      return;
    }

    const found = faqResponses.find((faq) => faq.question.test(input));
    if (found) {
      showBotReply(found.answer);
    } else {
      collectUserInfo(input);
    }

    setInput("");
  };

  const handleClose = () => {
    setOpen(false);
    setCollectingUserInfo(false);
    setUserInfo({ name: "", email: "", phone: "" });
    setCurrentInfoField("name");
    setPendingQuery("");
  };

  const handleStartFresh = () => {
    setMessages([{ sender: "bot", text: "Hi there! 👋 I'm the ATD assistant. Ask me anything about our services or let me help raise a support ticket." }]);
    setInput("");
    setIsAway(false);
    setIsTyping(false);
    setLastUserMsgTime(Date.now());
    setCollectingUserInfo(false);
    setUserInfo({ name: "", email: "", phone: "" });
    setCurrentInfoField("name");
    setPendingQuery("");
  };

  const handleContinue = () => {
    setMessages((prev) => prev.filter((msg) => msg.text !== AWAY_MESSAGE));
    setIsAway(false);
    setLastUserMsgTime(Date.now());
  };

  const inputPlaceholder = collectingUserInfo
    ? currentInfoField === "name"
      ? "Enter your name…"
      : currentInfoField === "email"
      ? "Enter your email…"
      : "Enter your phone number…"
    : "Ask me anything…";

  const today = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" });

  return (
    <>
      {/* FAB Button */}
      <div
        className={`chat-button ${open ? "hidden" : ""}`}
        onClick={() => setOpen(true)}
        title="Chat with us"
        role="button"
        aria-label="Open chat"
      >
        💬
      </div>

      {/* Chat Panel */}
      {open && (
        <div className="chat-box">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-top">
              <div className="chat-header-left">
                <div className="chat-avatar">🤖</div>
                <div className="chat-header-info">
                  <p className="chat-header-name">ATD Support</p>
                  <p className="chat-header-status">
                    <span className="chat-status-dot" />
                    Online · Usually replies instantly
                  </p>
                </div>
              </div>
              <div className="chat-header-actions">
                <button
                  className="chat-action-btn"
                  onClick={handleStartFresh}
                  title="Start fresh chat"
                  aria-label="Start fresh"
                >
                  ↺
                </button>
                <button
                  className="chat-action-btn"
                  onClick={handleClose}
                  title="Close chat"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="chat-header-band">Aditya Tech &amp; Devoops · AI Assistant</div>
          </div>

          {/* Messages */}
          <div className="chat-body">
            <div className="chat-date">{today}</div>

            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg-wrap ${msg.sender}`}>
                <div className="chat-msg-avatar">
                  {msg.sender === "bot" ? "🤖" : "👤"}
                </div>
                <div className="chat-msg">{msg.text}</div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="chat-typing">
                <div className="chat-msg-avatar" style={{ background: 'linear-gradient(135deg,#0044aa,#004cff)', color:'#fff', width:26, height:26, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:12 }}>🤖</div>
                <div className="chat-typing-bubble">
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Footer */}
          <div className="chat-footer">
            {isAway ? (
              <div className="away-options">
                <button onClick={handleClose}>Close Chat</button>
                <button onClick={handleStartFresh}>Start Fresh</button>
                <button onClick={handleContinue}>Continue Chat</button>
              </div>
            ) : (
              <div className="chat-input-row">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={inputPlaceholder}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  disabled={isAway || isTyping}
                  aria-label="Chat input"
                />
                <button
                  className="chat-send-btn"
                  onClick={handleSend}
                  disabled={isAway || isTyping || !input.trim()}
                  aria-label="Send message"
                >
                  <SendIcon />
                </button>
              </div>
            )}
            <div className="chat-branding">Powered by ATD Support AI</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
