interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function InteractionSearchBar({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search interactions..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-lg p-3 mb-6"
    />
  );
}