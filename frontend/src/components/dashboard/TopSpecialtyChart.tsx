import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import Card from "@/components/ui/Card";
import type { SpecialtyChart } from "@/types/dashboard";

interface Props {
  data: SpecialtyChart[];
}

export default function TopSpecialtyChart({
  data,
}: Props) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        Top Specialties
      </h2>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="specialty" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="interactions"
              fill="#2563eb"
            />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}