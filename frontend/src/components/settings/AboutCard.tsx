import Card from "@/components/ui/Card";

export default function AboutCard() {
  return (
    <Card className="p-6">

      <h2 className="text-xl font-bold mb-4">
        ℹ️ About
      </h2>

      <div className="space-y-3">

        <p className="font-semibold text-lg">
          AI First CRM
        </p>

        <p className="text-gray-600">
          Intelligent Healthcare CRM powered by
          AI for managing Healthcare Professionals,
          interaction analysis, compliance tracking,
          and business insights.
        </p>

        <div className="pt-3 border-t">

          <p className="text-sm text-gray-500">
            Built with
          </p>

          <div className="flex flex-wrap gap-2 mt-3">

            {[
              "React",
              "TypeScript",
              "FastAPI",
              "LangGraph",
              "Groq",
              "PostgreSQL",
              "JWT",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-slate-100 text-sm"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>

    </Card>
  );
}