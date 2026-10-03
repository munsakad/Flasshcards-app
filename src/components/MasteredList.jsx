import './MasteredList.css'

function MasteredList({ cards }) {
  if (cards.length === 0) return null

  return (
    <section className="mastered">
      <h2>Mastered cards</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>{card.question}</li>
        ))}
      </ul>
    </section>
  )
}

export default MasteredList
