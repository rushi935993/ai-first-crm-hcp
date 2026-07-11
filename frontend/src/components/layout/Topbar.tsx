export default function Topbar() {
  return (
    <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-semibold">
          AI First CRM Dashboard
        </h2>

        <p className="text-gray-500 text-sm">
          AI-powered Healthcare CRM
        </p>
      </div>

      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Medical Representative
      </div>
    </header>
  );
}