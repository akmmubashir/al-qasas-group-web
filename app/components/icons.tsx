type Props = {
  size: string;
  color: string;
  stroke?: string;
};

export const ArrowIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20.5V3.67001"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ArrowDownIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.92 8.95001L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.95001"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ArrowUpIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CrownIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6992 18.98H7.29922C6.87922 18.98 6.40922 18.65 6.26922 18.25L2.12922 6.66999C1.53922 5.00999 2.22922 4.49999 3.64922 5.51999L7.54922 8.30999C8.19922 8.75999 8.93922 8.52999 9.21922 7.79999L10.9792 3.10999C11.5392 1.60999 12.4692 1.60999 13.0292 3.10999L14.7892 7.79999C15.0692 8.52999 15.8092 8.75999 16.4492 8.30999L20.1092 5.69999C21.6692 4.57999 22.4192 5.14999 21.7792 6.95999L17.7392 18.27C17.5892 18.65 17.1192 18.98 16.6992 18.98Z"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 22H17.5"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 14H14.5"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const QuoteIcon = ({ size, color }: Props) => (
  <svg
    className={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10.4142L2.70711 14.7071L1.29289 13.2929L5 9.58579V9L1 9V2H7V10.4142Z"
      className={color}
    />
    <path
      d="M9 9L13 9V9.58579L9.29289 13.2929L10.7071 14.7071L15 10.4142L15 2H9L9 9Z"
      className={color}
    />
  </svg>
);
export const ToggleIcon = ({ size, color, stroke }: Props) => (
  <svg
    className={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 4.5H21"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 9.5H21"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 14.5H21"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 19.5H21"
      className={color}
      strokeWidth={stroke ? stroke : "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
