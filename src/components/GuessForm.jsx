import './GuessForm.css'

function GuessForm({ guess, status, onGuessChange, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form className="guess-form" onSubmit={handleSubmit}>
      <label htmlFor="guess-input" className="guess-label">
        Your answer
      </label>
      <div className="guess-row">
        <input
          id="guess-input"
          type="text"
          className={`guess-input ${status ? `guess-input--${status}` : ''}`}
          value={guess}
          placeholder="Type your guess here"
          autoComplete="off"
          onChange={(event) => onGuessChange(event.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled={!guess.trim()}>
          Submit
        </button>
      </div>
      <p className={`guess-feedback ${status ? `guess-feedback--${status}` : ''}`} role="status">
        {status === 'correct' && 'Correct! Well done.'}
        {status === 'incorrect' && 'Not quite. Try again, or flip the card to see the answer.'}
      </p>
    </form>
  )
}

export default GuessForm
