type Props = {
  className?: string;
};
export default function SearchIcon({ className = "" }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5766 13.5812L13.0636 11.0588C13.7225 10.0329 14.1084 8.81882 14.1084 7.52C14.1084 3.87765 11.1625 0.931763 7.52012 0.931763C3.87777 0.931763 0.931885 3.87765 0.931885 7.52C0.931885 11.1624 3.87777 14.1082 7.52012 14.1082C8.82836 14.1082 10.0425 13.7129 11.0589 13.0635L13.5813 15.5765C13.8354 15.8306 14.1931 15.9906 14.5789 15.9906C15.3601 15.9906 15.9907 15.36 15.9907 14.5788C15.9907 14.1929 15.8307 13.8353 15.5766 13.5812ZM7.52012 12.2259C4.92247 12.2259 2.81424 10.1176 2.81424 7.52C2.81424 4.92235 4.92247 2.81412 7.52012 2.81412C10.1178 2.81412 12.226 4.92235 12.226 7.52C12.226 10.1176 10.1178 12.2259 7.52012 12.2259Z"
        fill="#8F95B2"
      />
    </svg>
  );
}
