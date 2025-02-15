/**
 * DataExtractor class for extracting various data patterns from text using regular expressions
 */
class DataExtractor {
  /**
   * Initialize the DataExtractor with text to process
   * @param {string} sampleText - The text to extract data from
   */
  constructor(sampleText) {
      this.sampleText = sampleText;
  }

  /**
   * Extract email addresses from the text
   * @returns {string[]} Array of found email addresses
   */
  extractEmails() {
      const pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
      return this.sampleText.match(pattern) || [];
  }

  /**
   * Extract URLs from the text
   * @returns {string[]} Array of found URLs
   */
  extractUrls() {
      const pattern = /https?:\/\/(?:[-\w.]|(?:%[\da-fA-F]{2}))+[^\s,)"]*/g;
      return this.sampleText.match(pattern) || [];
  }

  /**
   * Extract phone numbers from the text
   * @returns {string[]} Array of found phone numbers
   */
  extractPhoneNumbers() {
      const pattern = /(?:\+\d{1,2}\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
      return this.sampleText.match(pattern) || [];
  }

  /**
   * Extract credit card numbers from the text
   * @returns {string[]} Array of found credit card numbers
   */
  extractCreditCards() {
      const pattern = /\b(?:\d{4}[-\s]?){3}\d{4}\b/g;
      return this.sampleText.match(pattern) || [];
  }

  /**
   * Extract time formats from the text
   * @returns {string[]} Array of found time formats
   */
  extractTime() {
      const pattern = /(?:(?:0?[1-9]|1[0-2]):[0-5]\d\s?(?:AM|PM)|(?:2[0-3]|[01]?\d):[0-5]\d)/g;
      return this.sampleText.match(pattern) || [];
  }

  /**
   * Extract HTML tags from the text
   * @returns {string[]} Array of found HTML tags
   */
  extractHtmlTags() {
      const pattern = /<[^>]+>/g;
      return this.sampleText.match(pattern) || [];
  }

  /**
   * Extract hashtags from the text
   * @returns {string[]} Array of found hashtags
   */
  extractHashtags() {
      const pattern = /#[a-zA-Z0-9_]+\b/g;
      return this.sampleText.match(pattern) || [];
  }

  /**
   * Extract currency amounts from the text
   * @returns {string[]} Array of found currency amounts
   */
  extractCurrency() {
      const pattern = /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;
      return this.sampleText.match(pattern) || [];
  }
}

module.exports = DataExtractor;
