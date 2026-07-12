import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";

import Dashboard from "@/pages/Dashboard";
import HCP from "@/pages/HCP";
import Interaction from "@/pages/Interaction";
import Analytics from "@/pages/Analytics";
import Settings from "@/pages/Settings";
import InteractionHistory from "@/pages/InteractionHistory";
import NotFound from "@/pages/NotFound";

import Login from "@/features/auth/pages/Login";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
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

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}