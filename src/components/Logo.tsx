export function Logo({ size = 44, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo — mente em crescimento"
    >
      {/* brain outline — rounded lobes like the reference */}
      <path
        d="M32 8c-2.8-2.4-6.8-2.2-9 .4-3.6-.8-7 1.6-7.2 5.2-2.8 1.2-4.2 4.6-3 7.6-1.6 2.8-.8 6.2 1.8 8 0 3.2 2.4 5.8 5.6 6 .8 2.8 3.6 4.6 6.6 4.2C28 40.6 29.9 41.4 32 41.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 8c2.8-2.4 6.8-2.2 9 .4 3.6-.8 7 1.6 7.2 5.2 2.8 1.2 4.2 4.6 3 7.6 1.6 2.8.8 6.2-1.8 8 0 3.2-2.4 5.8-5.6 6-.8 2.8-3.6 4.6-6.6 4.2C36 40.6 34.1 41.4 32 41.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* inner gyri curls */}
      <path
        d="M24.5 15.5c2.4.8 3.4 2.8 3 5M19.5 23c2 1.8 2.2 4 1.2 6.2M26.5 32c-1.8 1.2-4 1-5.6-.4M39.5 15.5c-2.4.8-3.4 2.8-3 5M44.5 23c-2 1.8-2.2 4-1.2 6.2M37.5 32c1.8 1.2 4 1 5.6-.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* center line descending into stem */}
      <path d="M32 8v33" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* two large leaves at the base, like the reference */}
      <path d="M32 41v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M32 47.5c-5 0-9.2-2.8-10.8-7.6 5 0 9.2 2.8 10.8 7.6Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M32 47.5c5 0 9.2-2.8 10.8-7.6-5 0-9.2 2.8-10.8 7.6Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* base line */}
      <path d="M20 55h24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
    </svg>
  )
}
