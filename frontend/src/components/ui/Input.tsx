import type { InputHTMLAttributes } from "react";

interface Props
  extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: Props) {
  return (
    <input
      {...props}
      className={`
        w-full
        border
        rounded-lg
        p-3
        outline-none
        focus:ring-2
        focus:ring-blue-500
        ${className}
      `}
    />
  );
}