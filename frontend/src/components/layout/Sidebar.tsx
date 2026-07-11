import {
  LayoutDashboard,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "HCP",
    icon: Users,
    path: "/hcp",
  },
  {
    name: "Interactions",
    icon: MessageSquare,
    path: "/interaction",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          AI First CRM
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Healthcare Platform
        </p>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}