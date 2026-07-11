import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Card from "@/components/ui/Card";

import type { ChartItem } from "@/types/dashboard";

interface Props {
  data: ChartItem[];
}

const COLORS = [
  "#ef4444",
  "#f59e0b",
  "#22c55e",
];

export default function PriorityPieChart({
  data,
}: Props) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        Priority Distribution
      </h2>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}