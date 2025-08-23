import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Access your API key as an environment variable
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

// Helper function to search within existing blogs
const searchInBlogs = (query, blogs) => {
  const lowerCaseQuery = query.toLowerCase();
  // Find a blog where the title, tags, or content includes the query
  return blogs.find(blog => 
    blog.title.toLowerCase().includes(lowerCaseQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
    blog.content.toLowerCase().includes(lowerCaseQuery)
  );
};

// Helper function to format the new blog object
const createNewBlogObject = (parsedResponse) => {
  const readTime = Math.ceil(parsedResponse.content.split(' ').length / 200);
  return {
    id: new Date().getTime(), // Unique ID
    title: parsedResponse.title,
    content: parsedResponse.content,
    excerpt: parsedResponse.excerpt,
    category: "AI Generated",
    author: "Gemini Assistant",
    date: new Date().toISOString().split('T')[0],
    readTime: `${readTime} min read`,
    tags: parsedResponse.tags || [],
  };
};

function ChatComponent({ blogs, onNewBlog }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    const query = input;
    setInput('');
    setLoading(true);
    setError(null);

    try {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(input);
      const response = await result.response;
      const text = response.text();

      const botMessage = { text: text, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (e) {
      setError('Failed to fetch response. Please check your API key and network connection.');
      console.error('Error:', e);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="message bot">Thinking...</div>}
        {error && <div className="message error">{error}</div>}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatComponent;