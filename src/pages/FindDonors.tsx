import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Phone, MapPin, Droplet, Calendar } from "lucide-react";

const FindDonors = () => {
  const [searchParams, setSearchParams] = useState({
    bloodGroup: "",
    city: "",
  });

  const [showResults, setShowResults] = useState(false);

  // Mock donor data - in a real app, this would come from your database
  const mockDonors = [
    { id: 1, name: "Rahul Sharma", bloodGroup: "A+", city: "Mumbai", contact: "+91 98765 43210", lastDonation: "2024-09-15", nssUnit: "NSS Unit 101" },
    { id: 2, name: "Priya Patel", bloodGroup: "A+", city: "Mumbai", contact: "+91 98765 43211", lastDonation: "2024-08-20", nssUnit: "NSS Unit 102" },
    { id: 3, name: "Amit Kumar", bloodGroup: "A+", city: "Mumbai", contact: "+91 98765 43212", lastDonation: "2024-10-01", nssUnit: "NSS Unit 103" },
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 animate-fade-in">
          <Search className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Find Blood Donors</h1>
          <p className="text-xl text-muted-foreground">
            Search for available donors in your area
          </p>
        </div>

        <Card className="shadow-blood mb-8 animate-slide-in">
          <CardHeader>
            <CardTitle>Search Donors</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bloodGroup">Blood Group *</Label>
                  <Select
                    value={searchParams.bloodGroup}
                    onValueChange={(value) => setSearchParams({ ...searchParams, bloodGroup: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood group" />
                    </SelectTrigger>
                    <SelectContent>
                      {bloodGroups.map((group) => (
                        <SelectItem key={group} value={group}>
                          {group}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={searchParams.city}
                    onChange={(e) => setSearchParams({ ...searchParams, city: e.target.value })}
                    placeholder="Enter city name"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Search className="w-5 h-5 mr-2" />
                Search Donors
              </Button>
            </form>
          </CardContent>
        </Card>

        {showResults && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">
              Available Donors ({mockDonors.length})
            </h2>

            {mockDonors.map((donor) => (
              <Card key={donor.id} className="hover:shadow-blood transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{donor.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Droplet className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-primary">{donor.bloodGroup}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {donor.city}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Last donated: {new Date(donor.lastDonation).toLocaleDateString()}
                        </div>
                      </div>
                      {donor.nssUnit && (
                        <p className="text-sm text-muted-foreground">{donor.nssUnit}</p>
                      )}
                    </div>

                    <Button className="md:w-auto w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      {donor.contact}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!showResults && (
          <div className="text-center p-12 bg-secondary rounded-lg">
            <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              Enter blood group and city to search for available donors
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDonors;
