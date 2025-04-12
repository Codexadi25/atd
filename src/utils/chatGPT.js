// utils/chatGPT.js
import axios from "axios";

const openAIKey = "sk-..."  // Use a secure .env for production!

const getGPTReply = async (question) => {
  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAIKey}`,
        },
      }
    );
    return res.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI Error:", error);
    return "Sorry, I couldn't get an answer at the moment.";
  }
};

export default getGPTReply;
