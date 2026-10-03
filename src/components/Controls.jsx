import './Controls.css'

function Controls({ position, total, onPrev, onNext, onShuffle, onMaster }) {
  return (
    <div className="controls">
      <div className="nav-row">
        <button className="btn btn-secondary" onClick={onPrev} disabled={position === 1}>
          &larr; Back
        </button>
        <span className="position">
          {position} / {total}
        </span>
        <button className="btn btn-secondary" onClick={onNext} disabled={position === total}>
          Next &rarr;
        </button>
      </div>
      <div className="action-row">
        <button className="btn btn-outline" onClick={onShuffle} disabled={total < 2}>
          Shuffle
        </button>
        <button className="btn btn-outline" onClick={onMaster}>
          Mark as mastered
        </button>
      </div>
    </div>
  )
}

export default Controls
