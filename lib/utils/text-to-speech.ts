/**
 * Converts the provided text to speech using the Web Speech API.
 *
 * @param {string} text - The text to be converted to speech.
 * @param {SpeechSynthesisVoice|null} [voice] - An optional parameter specifying
 * the voice to be used for speech synthesis. If not provided, the default voice will be used.
 *
 * @throws Will log an error message to the console if the browser does not support speech synthesis.
 *
 * @description
 * This function uses the Web Speech API to perform text-to-speech operations.
 * It first ensures the browser supports the `speechSynthesis` feature, and if not,
 * logs an error message. If speech synthesis is supported, it cancels any ongoing
 * speech operations, creates a new `SpeechSynthesisUtterance` instance with the
 * provided text, and then starts speaking the text.
 */
export const textToSpeech = (
  text: string,
  voice?: SpeechSynthesisVoice | null
) => {
  if (!("speechSynthesis" in window)) {
    console.error("Browser does not support speech synthesis.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  // Set the voice if provided
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.speak(utterance);
};
