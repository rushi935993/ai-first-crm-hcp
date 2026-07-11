interface Props {
  type: string;
  priority: string;
  onTypeChange: (value: string) => void;
  onPriorityChange: (value: string) => void;
}

export default function InteractionFilters({
  type,
  priority,
  onTypeChange,
  onPriorityChange,
}: Props) {
  return (
    <div className="flex gap-4 mb-6">

      <select
        value={type}
        onChange={(e) => onTypeChange(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">All Types</option>
        <option value="VISIT">Visit</option>
        <option value="CALL">Call</option>
        <option value="EMAIL">Email</option>
      </select>

      <select
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

    </div>
  );
}