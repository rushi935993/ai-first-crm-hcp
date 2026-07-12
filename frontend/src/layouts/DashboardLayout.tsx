import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import Button from "@/components/ui/Button";

import { toast } from "sonner";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged out successfully.");

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Topbar />

        {/* Logout Button */}
        <div className="flex justify-end p-4">
          <Button
            variant="danger"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>

        <main className="p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}