const extractData = (text) => {
  const patterns = {
      emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
      urls: /https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,})(?:\/[^\s]*)?/g,
      phoneNumbers: /(?:\+?\d{1,3}[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}/g,
      creditCards: /\b(?:\d{4}[- ]?){3}\d{4}\b/g
  };

 let extractedData = {};
  for (let key in patterns) {
      extractedData[key] = text.match(patterns[key]) || [];
  }
  return extractedData;
};
// Example input text
const testText = `
Contact us at support@example.com or visit our site https://www.example.com.
For inquiries, call (123) 456-7890 or 123-456-7890.
Use your credit card 1234-5678-9012-3456 or 1234 5678 9012 3456 for payment.
`;

// Extract data
const results = extractData(testText);

// Display extracted data
for (let category in results) {
  console.log(`${category.charAt(0).toUpperCase() + category.slice(1)}:`);
  results[category].forEach(match => console.log(`  - ${match}`));
}



