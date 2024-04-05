type Props = { className?: string };
export default function Ratings({ className }: Props) {
  return (
    <svg
      width="60"
      height="12"
      viewBox="0 0 60 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 0L7.875 3.975L12 4.575L9 7.65L9.675 12L6 9.975L2.325 12L3 7.65L0 4.575L4.125 3.975L6 0Z"
        fill="#FABB07"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0L19.875 3.975L24 4.575L21 7.65L21.675 12L18 9.975L14.325 12L15 7.65L12 4.575L16.125 3.975L18 0Z"
        fill="#FABB07"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 0L31.875 3.975L36 4.575L33 7.65L33.675 12L30 9.975L26.325 12L27 7.65L24 4.575L28.125 3.975L30 0Z"
        fill="#FABB07"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42 0L43.875 3.975L48 4.575L45 7.65L45.675 12L42 9.975L38.325 12L39 7.65L36 4.575L40.125 3.975L42 0Z"
        fill="#D1D1D1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54 0L55.875 3.975L60 4.575L57 7.65L57.675 12L54 9.975L50.325 12L51 7.65L48 4.575L52.125 3.975L54 0Z"
        fill="#D1D1D1"
      />
    </svg>
  );
}
