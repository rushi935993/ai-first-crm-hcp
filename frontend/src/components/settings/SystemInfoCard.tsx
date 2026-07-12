import Card from "@/components/ui/Card";

export default function SystemInfoCard() {
  return (
    <Card className="p-6">

      <h2 className="text-xl font-bold mb-4">
        ⚙️ System Information
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Frontend</span>
          <span className="font-semibold">
            React + TypeScript
          </span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Backend</span>
          <span className="font-semibold">
            FastAPI
          </span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Database</span>
          <span className="font-semibold">
            PostgreSQL (Neon)
          </span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Deployment</span>
          <span className="font-semibold">
            Vercel + Render
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Version</span>
          <span className="font-semibold">
            v1.0.0
          </span>
        </div>

      </div>

    </Card>
  );
}