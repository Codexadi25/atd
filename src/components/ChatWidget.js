import React, { useState, useRef, useEffect } from "react";
import "../styles/ChatBox.css";
import faqResponses from "../utils/faqResponses.js";
import { sendChatTicketEmail } from "../utils/chatTicketUtility";
import { sendChatBotConfirmation } from "../utils/confirmationEmailUtility";

const AWAY_MESSAGE = "Seems like you are away and everything is working fine. If you're still facing any issue just ping me here, we'll get back to you as soon as possible! 🕒";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about our services 😊" },
  ]);
  const [input, setInput] = useState("");
  const [lastUserMsgTime, setLastUserMsgTime] = useState(Date.now());
  const [isAway, setIsAway] = useState(false);
  
  // New state for user information collection
  const [collectingUserInfo, setCollectingUserInfo] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [currentInfoField, setCurrentInfoField] = useState('name');
  const [pendingQuery, setPendingQuery] = useState('');

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
    }, 60000); // 1 minute

    return () => clearTimeout(awayTimeoutRef.current);
  }, [open, lastUserMsgTime, messages, isAway]);

  // Function to collect user information
  const collectUserInfo = (query) => {
    setPendingQuery(query);
    setCollectingUserInfo(true);
    setCurrentInfoField('name');
    
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "I need some information to create a support ticket for you. Let me collect your details:",
      },
      {
        sender: "bot",
        text: "What's your name?",
      },
    ]);
  };

  // Function to handle user information input
  const handleUserInfoInput = () => {
    if (!input.trim()) return;

    const newUserInfo = { ...userInfo };
    newUserInfo[currentInfoField] = input.trim();
    setUserInfo(newUserInfo);

    if (currentInfoField === 'name') {
      setCurrentInfoField('email');
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Thanks ${input.trim()}! What's your email address?`,
        },
      ]);
    } else if (currentInfoField === 'email') {
      setCurrentInfoField('phone');
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Great! And what's your phone number?`,
        },
      ]);
    } else if (currentInfoField === 'phone') {
      // All information collected, create ticket
      setCollectingUserInfo(false);
      setCurrentInfoField('name');
      
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Perfect! Now let me create a support ticket for you...",
        },
      ]);

      // Create ticket with collected information
      createTicket(newUserInfo, pendingQuery);
    }

    setInput("");
  };

  // Function to create ticket
  const createTicket = async (userInfo, query) => {
    try {
      const result = await sendChatTicketEmail({
        userQuery: query,
        userName: userInfo.name,
        userEmail: userInfo.email,
        userPhone: userInfo.phone,
        category: 'General Inquiry',
        priority: 'Medium'
      });

             if (result.success) {
         // Send confirmation email to user
         try {
           const confirmationResult = await sendChatBotConfirmation({
             userName: userInfo.name,
             userEmail: userInfo.email,
             userPhone: userInfo.phone,
             ticketId: result.ticketId,
             userQuery: query,
             category: 'General Inquiry',
             priority: 'Medium'
           });

           if (confirmationResult.success) {
             console.log('✅ Chat Bot: Confirmation email sent successfully');
           } else {
             console.warn('⚠️ Chat Bot: Confirmation email failed:', confirmationResult.error);
           }
         } catch (error) {
           console.error('❌ Chat Bot: Error sending confirmation email:', error);
         }

         setMessages((prev) => [
           ...prev,
           {
             sender: "bot",
             text: `✅ Ticket created successfully!`,
           },
           {
             sender: "bot",
             text: `Your ticket ID is: **${result.ticketId}**`,
           },
           {
             sender: "bot",
             text: `Our team will reach out to you at ${userInfo.email} or ${userInfo.phone} within 24-48 hours with a proper response and assistance.`,
           },
           {
             sender: "bot",
             text: `📧 A confirmation email has been sent to ${userInfo.email} with your ticket details.`,
           },
         ]);
       } else if (result.requiresUserInfo) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "I need more information to create your ticket. Please provide your complete details.",
          },
        ]);
        collectUserInfo(query);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Sorry, I couldn't create the ticket. Please try again or contact support directly.",
          },
        ]);
      }
    } catch (error) {
      console.error('Error creating ticket:', error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Oops! Something went wrong. We couldn't create your ticket. Please try again later.",
        },
      ]);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isAway) return;

    setLastUserMsgTime(Date.now());

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // If collecting user info, handle that flow
    if (collectingUserInfo) {
      handleUserInfoInput();
      return;
    }

    const found = faqResponses.find((faq) => faq.question.test(input));
    if (found) {
      const botMsg = { sender: "bot", text: found.answer };
      setMessages((prev) => [...prev, botMsg]);
    } else {
      // Start collecting user information for ticket creation
      collectUserInfo(input);
    }
    
    setInput("");
  };

  // Footer actions
  const handleClose = () => {
    setOpen(false);
    // Reset user info collection state
    setCollectingUserInfo(false);
    setUserInfo({ name: '', email: '', phone: '' });
    setCurrentInfoField('name');
    setPendingQuery('');
  };

  const handleStartFresh = () => {
    setMessages([{ sender: "bot", text: "Hi! Ask me anything about our services 😊" }]);
    setInput("");
    setIsAway(false);
    setLastUserMsgTime(Date.now());
    // Reset user info collection state
    setCollectingUserInfo(false);
    setUserInfo({ name: '', email: '', phone: '' });
    setCurrentInfoField('name');
    setPendingQuery('');
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
                  placeholder={
                    collectingUserInfo 
                      ? currentInfoField === 'name' 
                        ? "Enter your name..." 
                        : currentInfoField === 'email' 
                        ? "Enter your email..." 
                        : "Enter your phone number..."
                      : "Type your question..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  disabled={isAway}
                />
                <button onClick={handleSend} disabled={isAway}>
                  {collectingUserInfo ? "Submit" : "Send"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
