import { Outlet, useParams, NavLink } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger, // ✅ Built-in toggle button
  useSidebar,
} from "@/components/ui/sidebar";
import { LogOut, LayoutDashboard, Users, Settings } from "lucide-react";
import AdminHeader from "../components/AdminHeader";

const AdminLayout = () => {
  const { adminId } = useParams();
  const { state } = useSidebar();
  const isSidebarOpen = state === "expanded";

  const navItems = [
    {
      to: `/admin/${adminId}/dashboard`,
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    { to: `/admin/${adminId}/users`, label: "Users", icon: Users },
    { to: `/admin/${adminId}/settings`, label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar collapsible="icon" className="border-r bg-white">
        <SidebarHeader
          className={`p-4 flex ${
            isSidebarOpen ? "flex-row" : "flex-col"
          } items-center justify-between`}
        >
          <h1
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } text-xl font-bold text-gray-800`}
          >
            Admin Panel
          </h1>

          <SidebarTrigger className="p-2 rounded-lg hover:bg-gray-100" />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel
              className={`${isSidebarOpen ? "block" : "hidden"}`}
            >
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `flex items-center gap-3 p-2 rounded-lg transition-colors ${
                            isActive
                              ? "bg-blue-100 text-blue-700"
                              : "text-gray-700 hover:bg-gray-100"
                          }`
                        }
                        title={item.label}
                      >
                        <item.icon className="h-5 w-5" />
                        <span
                          className={`${isSidebarOpen ? "block" : "hidden"}`}
                        >
                          {item.label}
                        </span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <button
                  className="flex items-center gap-3 p-2 w-full text-gray-700 hover:bg-gray-100 rounded-lg"
                  onClick={() => console.log("Logout clicked")}
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                  <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                    Logout
                  </span>
                </button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet context={{ adminId }} />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
