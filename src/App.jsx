import { useState } from 'react'
import './App.css'
import Flashcard from './components/Flashcard.jsx'
import GuessForm from './components/GuessForm.jsx'
import Controls from './components/Controls.jsx'
import ScoreBoard from './components/ScoreBoard.jsx'
import MasteredList from './components/MasteredList.jsx'
import flashcards from './data/flashcards.js'
import { isCorrect } from './utils/checkAnswer.js'

const TITLE = 'CS Trivia Flashcards'
const DESCRIPTION = 'Test your knowledge of core computer science concepts, one card at a time.'

function shuffleArray(items) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function App() {
  const [deck, setDeck] = useState(flashcards)
  const [mastered, setMastered] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [guess, setGuess] = useState('')
  const [status, setStatus] = useState(null)
  const [streak, setStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  const currentCard = deck[currentIndex]

  function resetCardState() {
    setFlipped(false)
    setGuess('')
    setStatus(null)
  }

  function goTo(index) {
    setCurrentIndex(index)
    resetCardState()
  }

  function handleSubmit() {
    if (isCorrect(guess, currentCard)) {
      const newStreak = streak + 1
      setStreak(newStreak)
      setLongestStreak((prev) => Math.max(prev, newStreak))
      setStatus('correct')
    } else {
      setStreak(0)
      setStatus('incorrect')
    }
  }

  function handleShuffle() {
    setDeck(shuffleArray(deck))
    goTo(0)
  }

  function handleMaster() {
    setMastered([...mastered, currentCard])
    setDeck(deck.filter((card) => card.id !== currentCard.id))
    setCurrentIndex(Math.min(currentIndex, deck.length - 2))
    resetCardState()
  }

  function handleRestart() {
    setDeck(flashcards)
    setMastered([])
    goTo(0)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>{TITLE}</h1>
        <p className="description">{DESCRIPTION}</p>
        <p className="card-count">
          {deck.length} {deck.length === 1 ? 'card' : 'cards'} remaining
        </p>
      </header>

      <main className="board">
        <ScoreBoard
          streak={streak}
          longestStreak={longestStreak}
          masteredCount={mastered.length}
        />

        {currentCard ? (
          <>
            <Flashcard
              question={currentCard.question}
              answer={currentCard.answer}
              difficulty={currentCard.difficulty}
              flipped={flipped}
              onClick={() => setFlipped((prev) => !prev)}
            />
            <GuessForm
              guess={guess}
              status={status}
              onGuessChange={(value) => {
                setGuess(value)
                setStatus(null)
              }}
              onSubmit={handleSubmit}
            />
            <Controls
              position={currentIndex + 1}
              total={deck.length}
              onPrev={() => goTo(currentIndex - 1)}
              onNext={() => goTo(currentIndex + 1)}
              onShuffle={handleShuffle}
              onMaster={handleMaster}
            />
          </>
        ) : (
          <div className="complete">
            <h2>All cards mastered!</h2>
            <p>Great work. Restart to study the full set again.</p>
            <button className="btn btn-primary" onClick={handleRestart}>
              Restart
            </button>
          </div>
        )}

        <MasteredList cards={mastered} />
      </main>
    </div>
  )
}

export default App
