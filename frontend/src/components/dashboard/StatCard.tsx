import Card from "@/components/ui/Card";

interface StatCardProps {
  title: string;
  value: string | number;
}

export default function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">
          {title}
        </p>

        <h2 className="text-3xl font-bold">
          {value}
        </h2>
      </div>
    </Card>
  );
}