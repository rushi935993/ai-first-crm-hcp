
interface BadgeProps {
  text: string;
  color: "green" | "yellow" | "red" | "blue" | "gray";
}

const colorClasses = {
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-700",
  blue: "bg-blue-100 text-blue-700",
  gray: "bg-gray-100 text-gray-700",
};

export default function Badge({
  text,
  color,
}: BadgeProps) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses[color]}`}
    >
      {text}
    </span>
  );
}