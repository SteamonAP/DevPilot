import type { SVGProps } from "react";

type DevPilotIconProps = SVGProps<SVGSVGElement> & {
  variant?: "color" | "mono";
};

export function DevPilotIcon({
  className,
  variant = "color",
  ...props
}: DevPilotIconProps) {
  const mono = variant === "mono";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="14"
        fill={mono ? "currentColor" : "#7C3AED"}
      />

      <path
        d="M19 17H31C40.389 17 47 22.722 47 32C47 41.278 40.389 47 31 47H19V17Z"
        fill={mono ? "none" : "white"}
        stroke={mono ? "currentColor" : "white"}
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <path
        d="M19 32H34"
        stroke={mono ? "currentColor" : "#A78BFA"}
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle
        cx="39"
        cy="32"
        r="3"
        fill={mono ? "currentColor" : "#F59E0B"}
      />
    </svg>
  );
}