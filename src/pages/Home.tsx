import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Heart, Users, MapPin, Trophy, AlertCircle } from "lucide-react";
import heroImage from "@/assets/hero-blood-donation.jpg";

const Home = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "Active Donors" },
    { icon: Heart, value: "15000+", label: "Lives Saved" },
    { icon: MapPin, value: "200+", label: "Cities Covered" },
    { icon: Trophy, value: "100+", label: "NSS Units" },
  ];

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.7), rgba(220, 38, 38, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <Droplet className="w-20 h-20 mx-auto mb-6 animate-pulse-soft" fill="currentColor" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Donate Life, Save Life ❤️
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join NSS Blood Connect - Where heroes meet those in need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-primary font-semibold">
                Register as Donor
              </Button>
            </Link>
            <Link to="/find-donors">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Find Donors Near Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Every Donation Counts</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One blood donation can save up to 3 lives. Be the reason someone smiles today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary hover:shadow-blood transition-all">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
                <p className="text-muted-foreground">
                  Your single donation can help patients during surgeries, cancer treatments, and emergencies.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-blood transition-all">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Join Community</h3>
                <p className="text-muted-foreground">
                  Become part of a nationwide network of NSS volunteers dedicated to saving lives.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-blood transition-all">
              <CardContent className="p-6">
                <AlertCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Emergency</h3>
                <p className="text-muted-foreground">
                  Quick response system for emergency blood requests with instant donor notifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blood Groups Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">All Blood Groups Welcome</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
            {bloodGroups.map((group) => (
              <div
                key={group}
                className="aspect-square rounded-full bg-white flex items-center justify-center font-bold text-primary text-xl border-2 border-primary hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of NSS volunteers in the life-saving mission
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="text-primary font-semibold">
              Register Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
