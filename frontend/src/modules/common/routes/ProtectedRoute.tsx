import React from "react";
import { Navigate } from "react-router";
import { useAdmin } from "@/modules/admin/context/AdminAuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token, admin, isLoading } = useAdmin();

  if (isLoading) return <p>Checking authentication...</p>;

  if (!token || !admin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
