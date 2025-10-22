import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp, Hotel, QrCode, Wallet } from "lucide-react";

const dailyBookings = [
  { name: "Mon", bookings: 12 },
  { name: "Tue", bookings: 19 },
  { name: "Wed", bookings: 8 },
  { name: "Thu", bookings: 15 },
  { name: "Fri", bookings: 22 },
  { name: "Sat", bookings: 18 },
  { name: "Sun", bookings: 25 },
];

const revenueData = [
  { name: "Week 1", revenue: 12000 },
  { name: "Week 2", revenue: 18000 },
  { name: "Week 3", revenue: 22000 },
  { name: "Week 4", revenue: 19500 },
];

const recentBookings = [
  {
    id: 1,
    hotel: "Hotel Sunrise",
    table: "T12",
    amount: "₹850",
    status: "Completed",
  },
  {
    id: 2,
    hotel: "Blue Lagoon",
    table: "T03",
    amount: "₹1,200",
    status: "Pending",
  },
  {
    id: 3,
    hotel: "Ocean View",
    table: "T09",
    amount: "₹1,500",
    status: "Completed",
  },
  {
    id: 4,
    hotel: "Hotel Elite",
    table: "T07",
    amount: "₹650",
    status: "Cancelled",
  },
];
export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Total Hotels</p>
              <h3 className="text-2xl font-bold">8</h3>
            </div>
            <Hotel className="text-blue-600 w-8 h-8" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Total Tables</p>
              <h3 className="text-2xl font-bold">42</h3>
            </div>
            <QrCode className="text-green-600 w-8 h-8" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Total Bookings</p>
              <h3 className="text-2xl font-bold">320</h3>
            </div>
            <TrendingUp className="text-yellow-600 w-8 h-8" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold">₹54,000</h3>
            </div>
            <Wallet className="text-purple-600 w-8 h-8" />
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Bookings Per Day</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyBookings}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="bookings"
                  fill="hsl(var(--primary))"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hotel</TableHead>
                <TableHead>Table</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentBookings.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{b.hotel}</TableCell>
                  <TableCell>{b.table}</TableCell>
                  <TableCell>{b.amount}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        b.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : b.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {b.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
