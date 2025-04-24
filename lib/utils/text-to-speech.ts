/**
 * Handles the text-to-speech functionality using the Web Speech API.
 *
 * This function checks if the browser supports the SpeechSynthesis API.
 * If supported, it converts the provided text into speech using the SpeechSynthesisUtterance object.
 * If not supported by the browser, it logs an error message to the console.
 *
 * @param {string} text - The text to be converted into speech.
 */
export const textToSpeech = (text: string) => {
  if (!("speechSynthesis" in window)) {
    console.error("Browser does not support speech synthesis.");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(utterance);
};
