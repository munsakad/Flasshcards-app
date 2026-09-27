import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard.jsx'
import flashcards from './data/flashcards.js'

const TITLE = 'CS Trivia Flashcards'
const DESCRIPTION = 'Test your knowledge of core computer science concepts, one card at a time.'

function getRandomIndex(excludeIndex, length) {
  if (length <= 1) return 0
  let index = excludeIndex
  while (index === excludeIndex) {
    index = Math.floor(Math.random() * length)
  }
  return index
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * flashcards.length)
  )
  const [flipped, setFlipped] = useState(false)

  const currentCard = flashcards[currentIndex]

  function handleFlip() {
    setFlipped((prev) => !prev)
  }

  function handleNext() {
    setFlipped(false)
    setCurrentIndex((prev) => getRandomIndex(prev, flashcards.length))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>{TITLE}</h1>
        <p className="description">{DESCRIPTION}</p>
        <p className="card-count">{flashcards.length} cards</p>
      </header>

      <main className="board">
        <Flashcard
          question={currentCard.question}
          answer={currentCard.answer}
          difficulty={currentCard.difficulty}
          flipped={flipped}
          onClick={handleFlip}
        />
        <button className="next-button" onClick={handleNext}>
          Next Card
        </button>
      </main>
    </div>
  )
}

export default App
