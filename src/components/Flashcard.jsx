import './Flashcard.css'

function Flashcard({ question, answer, difficulty, flipped, onClick }) {
  return (
    <div
      className={`flashcard ${flipped ? 'flashcard--flipped' : ''}`}
      onClick={onClick}
    >
      <div className="flashcard-inner">
        <div className={`flashcard-face flashcard-front difficulty-${difficulty.toLowerCase()}`}>
          <span className="difficulty-badge">{difficulty}</span>
          <p>{question}</p>
        </div>
        <div className={`flashcard-face flashcard-back difficulty-${difficulty.toLowerCase()}`}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Flashcard
