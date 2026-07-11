import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";

import Dashboard from "@/pages/Dashboard";
import HCP from "@/pages/HCP";
import Interaction from "@/pages/Interaction";
import NotFound from "@/pages/NotFound";
import Analytics from "@/pages/Analytics";
import Settings from "@/pages/Settings";
import InteractionHistory from "@/pages/InteractionHistory";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hcp" element={<HCP />} />
          <Route path="/interaction" element={<Interaction />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/interactions"
            element={<InteractionHistory />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}