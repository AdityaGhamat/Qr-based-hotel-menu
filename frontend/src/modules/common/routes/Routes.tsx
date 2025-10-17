import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminAuthContextProvider } from "@/modules/admin/context/AdminAuthContext";
import AdminLayout from "@/modules/admin/layout/AdminLayout";
import AdminDashboard from "@/modules/admin/pages/desktop/AdminDashboard";
import AdminLoginPage from "@/modules/admin/pages/desktop/AdminLoginPage";
import OtpVerificationPage from "@/modules/otp/pages/OtpVerificationPage";
import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLoginPage />,
  },
  {
    path: "/otp",
    element: <OtpVerificationPage />,
  },
  {
    path: "/admin/:adminId",
    element: (
      <AdminAuthContextProvider>
        <ProtectedRoute>
          <SidebarProvider>
            <AdminLayout />
          </SidebarProvider>
        </ProtectedRoute>
      </AdminAuthContextProvider>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
]);
