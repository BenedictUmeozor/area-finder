type Props = { className?: string; onClick?: () => void };
export default function SearchBlue({ className, onClick }: Props) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M5.40725 10.1481C8.02549 10.1481 10.148 8.02564 10.148 5.4074C10.148 2.78916 8.02549 0.666656 5.40725 0.666656C2.78901 0.666656 0.666504 2.78916 0.666504 5.4074C0.666504 8.02564 2.78901 10.1481 5.40725 10.1481Z"
        stroke="#3366FF"
        strokeWidth="1.18519"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3327 11.333L8.75488 8.75519"
        stroke="#0D2159"
        strokeWidth="1.18519"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
