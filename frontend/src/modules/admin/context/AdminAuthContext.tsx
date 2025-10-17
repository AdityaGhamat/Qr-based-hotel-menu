import { createContext, useState, useEffect, useContext } from "react";
import type { AuthContextType } from "../types/AuthContext.type";
import { getAdmin } from "../actions/Get.actions";
import { useQuery } from "@tanstack/react-query";
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AdminAuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const savedToken = localStorage.getItem("access_token");
    if (savedToken) setToken(savedToken);
  }, []);
  const { data: admin, isLoading } = useQuery({
    queryKey: ["admin", token],
    queryFn: () => getAdmin(token!),
    enabled: !!token,
    retry: false,
  });
  return (
    <AuthContext.Provider
      value={{ token, setToken, admin: admin ?? null, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAdmin() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAdmin must be used inside AuthProvider");
  return ctx;
}
