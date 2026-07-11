import type { ButtonHTMLAttributes } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  loading?: boolean;
}

export default function Button({
  variant = "primary",
  loading = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-900",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        px-5
        py-2
        rounded-lg
        font-medium
        transition
        disabled:opacity-50
        ${styles[variant]}
        ${className}
      `}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}