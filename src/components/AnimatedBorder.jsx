export default function AnimatedBorder({
  children,
  className = "",
}) {
  return (
    <div className={`animated-border ${className}`}>
      {children}
    </div>
  );
}