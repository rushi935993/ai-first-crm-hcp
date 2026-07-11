import Input from "@/components/ui/Input";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <Input
      type="text"
      placeholder="Search doctor..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-300 px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}