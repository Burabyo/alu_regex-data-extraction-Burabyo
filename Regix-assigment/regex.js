const extractData = (text) => {
  const patterns = {
      emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
      urls: /https?:\/\/(?:www\.)?[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,})(?:\/[^\s]*)?/g,
      phoneNumbers: /(?:\+?\d{1,3}[-.\s]?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}/g,
      creditCards: /\b(?:\d{4}[- ]?){3}\d{4}\b/g
  };
