import { Outlet } from "react-router-dom";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}