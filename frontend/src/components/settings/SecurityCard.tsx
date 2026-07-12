import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function SecurityCard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged out successfully.");

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Card className="p-6">

      <h2 className="text-xl font-bold mb-4">
        🔐 Security
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">
            Authentication
          </span>

          <span className="font-semibold text-green-600">
            JWT Enabled
          </span>
        </div>

        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">
            Password Storage
          </span>

          <span className="font-semibold">
            Bcrypt Hashing
          </span>
        </div>

        <div className="flex justify-between border-b pb-4">
          <span className="text-gray-500">
            Session Timeout
          </span>

          <span className="font-semibold">
            60 Minutes
          </span>
        </div>

        <Button
          variant="danger"
          className="w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>

      </div>

    </Card>
  );
}