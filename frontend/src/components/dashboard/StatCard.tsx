import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
};

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className={`${color} p-4 rounded-xl text-white`}>
          <Icon size={28} />
        </div>

      </div>
    </div>
  );
}