export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div className="chip">
      <span className="chip-text">{children}</span>
    </div>
  )
}
