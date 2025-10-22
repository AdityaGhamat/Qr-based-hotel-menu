import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white border-b px-6 py-3 shadow-sm">
      {/* Left section - Logo / Title */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
      </div>

      {/* Right section - Actions */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-gray-600" />
        </Button>

        {/* User Avatar */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>
          <span className="text-sm font-medium text-gray-700 hidden md:inline">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}
