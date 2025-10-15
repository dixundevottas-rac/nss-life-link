import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { UserPlus } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodGroup: "",
    contact: "",
    city: "",
    nssUnit: "",
    lastDonation: "",
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.age || !formData.bloodGroup || !formData.contact || !formData.city) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Donor registration:", formData);
    
    toast.success("Registration successful! Thank you for becoming a life-saver.", {
      description: "Your information has been added to our donor database.",
    });

    // Reset form
    setFormData({
      name: "",
      age: "",
      bloodGroup: "",
      contact: "",
      city: "",
      nssUnit: "",
      lastDonation: "",
    });
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8 animate-fade-in">
          <UserPlus className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Become a Blood Donor</h1>
          <p className="text-xl text-muted-foreground">
            Join thousands of NSS volunteers saving lives across the nation
          </p>
        </div>

        <Card className="shadow-blood animate-slide-in">
          <CardHeader>
            <CardTitle>Donor Registration</CardTitle>
            <CardDescription>
              Fill in your details to register as a blood donor. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    min="18"
                    max="65"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="18-65"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bloodGroup">Blood Group *</Label>
                  <Select
                    value={formData.bloodGroup}
                    onValueChange={(value) => setFormData({ ...formData, bloodGroup: value })}
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Number *</Label>
                <Input
                  id="contact"
                  type="tel"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="+91 XXXXXXXXXX"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Enter your city"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nssUnit">NSS Unit (Optional)</Label>
                <Input
                  id="nssUnit"
                  value={formData.nssUnit}
                  onChange={(e) => setFormData({ ...formData, nssUnit: e.target.value })}
                  placeholder="e.g., NSS Unit 123, XYZ College"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastDonation">Last Donation Date (Optional)</Label>
                <Input
                  id="lastDonation"
                  type="date"
                  value={formData.lastDonation}
                  onChange={(e) => setFormData({ ...formData, lastDonation: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Register as Donor
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-blood-light rounded-lg">
          <h3 className="font-semibold mb-2 text-primary">Important Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• You must be between 18-65 years old and weigh at least 50 kg</li>
            <li>• Wait at least 3 months between blood donations</li>
            <li>• Ensure you're in good health before donating</li>
            <li>• Your contact information will only be shared with verified seekers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;
