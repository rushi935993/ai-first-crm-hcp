import Card from "@/components/ui/Card";

export default function AccountCard() {
  return (
    <Card className="p-6">

      <h2 className="text-xl font-bold mb-4">
        👤 Account
      </h2>

      <div className="space-y-3">

        <div>
          <p className="text-gray-500 text-sm">
            Name
          </p>

          <p className="font-semibold">
            Administrator
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Email
          </p>

          <p className="font-semibold">
            admin@crm.com
          </p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Role
          </p>

          <p className="font-semibold">
            Admin
          </p>
        </div>

      </div>

    </Card>
  );
}