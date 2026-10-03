import './ScoreBoard.css'

function ScoreBoard({ streak, longestStreak, masteredCount }) {
  return (
    <div className="scoreboard">
      <div className="stat">
        <span className="stat-value">{streak}</span>
        <span className="stat-label">Current streak</span>
      </div>
      <div className="stat">
        <span className="stat-value">{longestStreak}</span>
        <span className="stat-label">Longest streak</span>
      </div>
      <div className="stat">
        <span className="stat-value">{masteredCount}</span>
        <span className="stat-label">Mastered</span>
      </div>
    </div>
  )
}

export default ScoreBoard
