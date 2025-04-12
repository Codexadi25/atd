from pathlib import Path

# Load the current ChatWidget.js file content
chat_widget_path = Path("../components/ChatWidget.js")
chat_widget_code = chat_widget_path.read_text(mode='r', encoding='UTF-8')

# Inject import statements and the NLP response logic
nlp_import = "import nlp from 'compromise';\nimport faqResponses from './faqResponses.js';"

matcher_function = """
const getBotResponse = (userMessage) => {
  const doc = nlp(userMessage.toLowerCase());
  const normalized = doc.normalize().out("text");

  // Try regex match first
  for (const faq of faqResponses) {
    if (faq.question.test(normalized)) return faq.answer;
  }

  // Fallback to keyword matching
  for (const faq of faqResponses) {
    if (faq.keywords?.some(k => normalized.includes(k))) {
      return faq.answer;
    }
  }

  return null; // No match found
};
"""

# Replace old matching logic with getBotResponse()
updated_code = chat_widget_code

# Add imports at the top after existing imports
if "faqResponses" not in updated_code:
    updated_code = updated_code.replace("import React", f"import React\n{nlp_import}")

# Add the matcher function (before the component)
if "const getBotResponse" not in updated_code:
    updated_code = updated_code.replace("const ChatWidget =", f"{matcher_function}\n\nconst ChatWidget =")

# Replace the matching logic inside handleSend
updated_code = updated_code.replace(
    "const matchedResponse = faqResponses.find((faq) => faq.question.test(userInput));",
    "const matchedResponse = getBotResponse(userInput);"
).replace(
    "if (matchedResponse) {",
    "if (matchedResponse !== null) {"
).replace(
    "botResponse: matchedResponse.answer,",
    "botResponse: matchedResponse,"
)

# Save the modified file
output_path = "/mnt/data/ChatWidget_NLP_Integrated.js"
Path(output_path).write_text(updated_code)

output_path
