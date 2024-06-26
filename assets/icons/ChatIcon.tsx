type Props = { className?: string };
export default function ChatIcon({ className }: Props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3083 0.875H1.69167C1.2425 0.875 0.875 1.2425 0.875 1.69167V9.04167C0.875 9.49083 1.2425 9.85833 1.69167 9.85833H3.325V12.3083C3.325 12.7575 3.6925 13.125 4.14167 13.125C4.37033 13.125 4.5745 13.0352 4.7215 12.8882L7.74317 9.85833H12.3083C12.7575 9.85833 13.125 9.49083 13.125 9.04167V1.69167C13.125 1.2425 12.7575 0.875 12.3083 0.875Z"
        fill="#8F95B2"
      />
    </svg>
  );
}
