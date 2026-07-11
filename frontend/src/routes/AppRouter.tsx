import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";

import Dashboard from "@/pages/Dashboard";
import HCP from "@/pages/HCP";
import Interaction from "@/pages/Interaction";
import NotFound from "@/pages/NotFound";
import Analytics from "@/pages/Analytics";
import Settings from "@/pages/Settings";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/hcp" element={<HCP />} />
          <Route path="/interaction" element={<Interaction />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}