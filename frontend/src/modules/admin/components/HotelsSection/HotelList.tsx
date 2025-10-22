import { useState } from "react";
import { Plus, Building2, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function HotelsList() {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Hotel Sunrise",
      address: "MG Road, Pune",
      contact: "9876543210",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600",
    },
    {
      id: 2,
      name: "Blue Lagoon",
      address: "Marine Drive, Mumbai",
      contact: "9123456780",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
    },
  ]);

  const [newHotel, setNewHotel] = useState({
    name: "",
    address: "",
    contact: "",
    image: "",
  });

  const addHotel = () => {
    if (!newHotel.name.trim()) return;
    setHotels([...hotels, { id: Date.now(), ...newHotel }]);
    setNewHotel({ name: "", address: "", contact: "", image: "" });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Hotels</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Hotel
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Hotel</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addHotel();
              }}
              className="space-y-4"
            >
              <div>
                <Label>Hotel Name</Label>
                <Input
                  value={newHotel.name}
                  onChange={(e) =>
                    setNewHotel({ ...newHotel, name: e.target.value })
                  }
                  placeholder="Enter hotel name"
                  required
                />
              </div>
              <div>
                <Label>Address</Label>
                <Input
                  value={newHotel.address}
                  onChange={(e) =>
                    setNewHotel({ ...newHotel, address: e.target.value })
                  }
                  placeholder="Enter address"
                />
              </div>
              <div>
                <Label>Contact</Label>
                <Input
                  value={newHotel.contact}
                  onChange={(e) =>
                    setNewHotel({ ...newHotel, contact: e.target.value })
                  }
                  placeholder="Enter contact number"
                />
              </div>
              <div>
                <Label>Image URL</Label>
                <Input
                  value={newHotel.image}
                  onChange={(e) =>
                    setNewHotel({ ...newHotel, image: e.target.value })
                  }
                  placeholder="Enter image URL"
                />
              </div>

              <Button type="submit" className="w-full">
                Create
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Hotels Grid */}
      {hotels.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <Building2 className="w-12 h-12 text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-700 mb-1">
            No hotels yet
          </h3>
          <p className="text-gray-500 mb-4">
            Start by adding your first hotel to the platform.
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" /> Add Hotel
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hotels.map((hotel) => (
            <Card
              key={hotel.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-40 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg">{hotel.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>{hotel.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>{hotel.contact}</span>
                </div>
                <Button
                  variant="outline"
                  className="mt-3 w-full"
                  onClick={() => alert(`Viewing details of ${hotel.name}`)}
                >
                  Manage
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
