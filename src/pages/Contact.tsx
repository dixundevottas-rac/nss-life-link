import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    console.log("Contact form:", formData);
    
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <Mail className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with us or join our mission
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-blood animate-slide-in">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Have questions? We'd love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="shadow-blood">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:nss@bloodconnect.org" className="text-muted-foreground hover:text-primary transition-colors">
                        nss@bloodconnect.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">24/7 Helpline</div>
                      <a href="tel:+911800123456" className="text-muted-foreground hover:text-primary transition-colors">
                        1800-123-456 (Toll Free)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold">Headquarters</div>
                      <p className="text-muted-foreground">
                        NSS National Office<br />
                        New Delhi, India
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-blood">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white shadow-blood">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Join NSS Blood Connect</h3>
                <p className="mb-4 opacity-90">
                  Want to start a blood donation initiative at your college or institution? Contact our coordinator team.
                </p>
                <Button variant="secondary" className="w-full">
                  Become a Coordinator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center p-8 bg-secondary rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Emergency? Need Blood Urgently?</h3>
          <p className="text-muted-foreground mb-4">
            Don't wait! Submit an emergency request and we'll notify nearby donors immediately.
          </p>
          <Button size="lg" asChild>
            <a href="/emergency">Raise Emergency Request</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
