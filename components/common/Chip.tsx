export default function Chip({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`chip ${className}`}>
      <span className="chip-text">{children}</span>
    </div>
  )
}
