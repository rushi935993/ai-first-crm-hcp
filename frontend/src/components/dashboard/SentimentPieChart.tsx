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
  "#22c55e", // Positive
  "#f59e0b", // Neutral
  "#ef4444", // Negative
];

export default function SentimentPieChart({
  data,
}: Props) {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">
        Sentiment Distribution
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
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
                  fill={COLORS[index % COLORS.length]}
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