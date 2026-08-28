export function Logo({ size = 44, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src="/images/logo-aline.svg"
      alt="Logo Aline Alves"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
    />
  )
}
