import { type FC } from "react";

type IconProps = { size?: number };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconDashboard: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

export const IconPatients: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 6.2A3 3 0 0 1 16 12" />
    <path d="M16.5 14.5A5.5 5.5 0 0 1 20.5 20" />
  </svg>
);

export const IconMicroscope: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M6 18h8" />
    <path d="M9 18a6 6 0 0 0 6-6" />
    <path d="M10.5 6.5 8 9l-2-2 2.5-2.5z" />
    <path d="m12.5 4.5 2 2" />
    <path d="m7 11 2 2" />
    <path d="M4 21h16" />
  </svg>
);

export const IconChat: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.9 9.9 0 0 1-4-.8L3 21l1.9-4.5A8.4 8.4 0 1 1 21 11.5z" />
  </svg>
);

export const IconBell: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
);

export const IconSettings: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z" />
  </svg>
);

export const IconUser: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
  </svg>
);

export const IconCheck: FC<IconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);

export const IconInfo: FC<IconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

export const IconZoom: FC<IconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m21 21-4.5-4.5" />
    <path d="M11 8.5v5" />
    <path d="M8.5 11h5" />
  </svg>
);

export const IconHistory: FC<IconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M3.5 8A9 9 0 1 1 3 12" />
    <path d="M3 4v4h4" />
    <path d="M12 8v4l3 2" />
  </svg>
);

export const IconBot: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <rect x="4" y="7" width="16" height="12" rx="2.5" />
    <path d="M12 7V4" />
    <circle cx="12" cy="3.2" r="1.2" />
    <path d="M9 12h.01M15 12h.01" />
    <path d="M9.5 16h5" />
  </svg>
);

export const IconReport: FC<IconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M6 3h8l4 4v14H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

export const IconProtocol: FC<IconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6z" />
    <path d="m9 11.5 2 2 4-4" />
  </svg>
);

export const IconCompare: FC<IconProps> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <rect x="3" y="4" width="7" height="16" rx="1.5" />
    <rect x="14" y="4" width="7" height="16" rx="1.5" />
    <path d="M12 2v20" strokeDasharray="2 2.5" />
  </svg>
);

export const IconAttach: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M20 11.5 12.5 19a4.5 4.5 0 0 1-6.4-6.4l7.6-7.6a3 3 0 0 1 4.3 4.3l-7.6 7.6a1.5 1.5 0 0 1-2.2-2.1l6.9-6.9" />
  </svg>
);

export const IconSend: FC<IconProps> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M4 12 20 4l-6 16-3-7z" />
    <path d="m11 13 9-9" />
  </svg>
);

export const IconLock: FC<IconProps> = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
