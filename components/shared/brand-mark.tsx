interface BrandMarkProps {
  readonly className?: string;
}

export function BrandMark({ className }: BrandMarkProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="13.5" r="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="27.5" cy="22" r="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="27.5" r="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="12.5" cy="22" r="7" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
