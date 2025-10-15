import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { AlertCircle } from "lucide-react";

const Emergency = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    unitsNeeded: "",
    hospital: "",
    city: "",
    contactPerson: "",
    contactNumber: "",
    urgency: "",
    additionalInfo: "",
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.patientName || !formData.bloodGroup || !formData.contactNumber) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the emergency request and notify donors
    console.log("Emergency request:", formData);
    
    toast.success("Emergency request submitted successfully!", {
      description: "We are notifying nearby donors. You will receive calls shortly.",
    });

    // Reset form
    setFormData({
      patientName: "",
      bloodGroup: "",
      unitsNeeded: "",
      hospital: "",
      city: "",
      contactPerson: "",
      contactNumber: "",
      urgency: "",
      additionalInfo: "",
    });
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center animate-pulse-soft">
            <AlertCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Emergency Blood Request</h1>
          <p className="text-xl text-muted-foreground">
            We'll immediately notify nearby donors matching your requirements
          </p>
        </div>

        <Card className="shadow-blood border-l-4 border-l-primary animate-slide-in">
          <CardHeader>
            <CardTitle>Request Details</CardTitle>
            <CardDescription>
              Please provide accurate information for faster response
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="patientName">Patient Name *</Label>
                <Input
                  id="patientName"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  placeholder="Enter patient's name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bloodGroup">Blood Group Required *</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="unitsNeeded">Units Needed</Label>
                  <Input
                    id="unitsNeeded"
                    type="number"
                    min="1"
                    value={formData.unitsNeeded}
                    onChange={(e) => setFormData({ ...formData, unitsNeeded: e.target.value })}
                    placeholder="e.g., 2"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hospital">Hospital Name</Label>
                <Input
                  id="hospital"
                  value={formData.hospital}
                  onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                  placeholder="Enter hospital name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Enter city"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person Name</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  placeholder="+91 XXXXXXXXXX"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency Level</Label>
                <Select
                  value={formData.urgency}
                  onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical (Immediate)</SelectItem>
                    <SelectItem value="urgent">Urgent (Within 24 hours)</SelectItem>
                    <SelectItem value="normal">Normal (Within 48 hours)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  placeholder="Any specific requirements or information"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <AlertCircle className="w-5 h-5 mr-2" />
                Submit Emergency Request
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-blood-light rounded-lg">
          <h3 className="font-semibold mb-2 text-primary">For Immediate Assistance</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Call our 24/7 helpline: <strong className="text-primary">1800-123-456</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            Our team will personally coordinate with donors in your area
          </p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
