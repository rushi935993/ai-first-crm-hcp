import type { AIAnalysis } from "../types";

type Props = {
  analysis: AIAnalysis;
};

export default function AIResultCard({
  analysis,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Analysis
      </h2>

      <div className="space-y-5">

        <div>
          <h3 className="font-semibold text-gray-600">
            Summary
          </h3>

          <p className="mt-1">
            {analysis.summary}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <h3 className="font-semibold text-gray-600">
              Sentiment
            </h3>

            <p>{analysis.sentiment}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600">
              Priority
            </h3>

            <p>{analysis.priority}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600">
              Compliance
            </h3>

            <p>{analysis.compliance_status}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-600">
              Follow Up
            </h3>

            <p>{analysis.follow_up}</p>
          </div>

        </div>

        <div>

          <h3 className="font-semibold text-gray-600 mb-2">
            Missing Information
          </h3>

          <ul className="list-disc ml-6">
            {analysis.missing_information.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>

        </div>

        <div>

          <h3 className="font-semibold text-gray-600 mb-2">
            Extracted Entities
          </h3>

          <div className="flex flex-wrap gap-2">

            {analysis.extracted_entities.map((entity) => (
              <span
                key={entity}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {entity}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}