import Card from "@/components/ui/Card";

export default function AISettingsCard() {
  return (
    <Card className="p-6">

      <h2 className="text-xl font-bold mb-4">
        🤖 AI Configuration
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Provider</span>
          <span className="font-semibold">Groq</span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Model</span>
          <span className="font-semibold">
            Llama 3.3 70B Versatile
          </span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Temperature</span>
          <span className="font-semibold">0.2</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">AI Status</span>

          <span className="text-green-600 font-semibold">
            ● Connected
          </span>
        </div>

      </div>

    </Card>
  );
}