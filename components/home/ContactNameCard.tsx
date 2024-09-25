export default function ContactNameCard({
  background,
}: {
  background: number
}) {
  return (
    <div className={`contact-name-card bg-${background}`}>
      <h2 className="contact-name-card-text extra-bold">Prawsang</h2>
    </div>
  )
}
