// Lowercase, strip punctuation, and collapse whitespace.
export function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// Correct when the guess matches the full answer or contains any accepted key phrase.
export function isCorrect(guess, card) {
  const cleanGuess = normalize(guess)
  if (!cleanGuess) return false
  if (cleanGuess === normalize(card.answer)) return true
  return card.acceptedAnswers.some((phrase) => {
    const cleanPhrase = normalize(phrase)
    return cleanPhrase && cleanGuess.includes(cleanPhrase)
  })
}
