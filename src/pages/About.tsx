import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award, Zap, Globe } from "lucide-react";
import nssLogo from "@/assets/nss-logo.png";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Driven by empathy and care for those in need",
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Building a network of volunteers dedicated to saving lives",
    },
    {
      icon: Target,
      title: "Social Responsibility",
      description: "Creating awareness about the importance of blood donation",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining high standards in our service delivery",
    },
  ];

  const achievements = [
    { number: "50K+", label: "Blood Donations Organized" },
    { number: "200+", label: "NSS Units Participating" },
    { number: "300+", label: "Cities Covered" },
    { number: "100K+", label: "Lives Touched" },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <img src={nssLogo} alt="NSS Logo" className="w-24 h-24 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About NSS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            National Service Scheme - Transforming communities through youth power and social service
          </p>
        </div>

        {/* Motto */}
        <Card className="mb-12 bg-gradient-to-r from-primary to-blood-accent text-white shadow-blood animate-slide-in">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-2">NOT ME, BUT YOU</h2>
            <p className="text-lg opacity-90">
              The motto of NSS reflects the essence of democratic living and upholds the need for selfless service
            </p>
          </CardContent>
        </Card>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-blood">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To create a society where every student understands their social responsibility and actively 
                participates in nation-building through community service, making blood donation accessible 
                and saving countless lives.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-blood">
            <CardContent className="p-8">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To mobilize youth volunteers for blood donation drives, create awareness about voluntary blood 
                donation, and establish a reliable network connecting donors with those in need, ensuring 
                no life is lost due to blood shortage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About NSS Blood Connect */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">About NSS Blood Connect</h2>
          <Card className="shadow-blood">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">
                NSS Blood Connect is a revolutionary initiative by the National Service Scheme to bridge the 
                gap between blood donors and seekers. Launched with the vision of "Donate Life, Save Life," 
                this platform connects thousands of NSS volunteers across India who are ready to donate blood 
                and save lives.
              </p>
              <p className="text-muted-foreground mb-4">
                Our platform makes it easy for anyone to find blood donors in their area within minutes, 
                register as a donor, or raise emergency blood requests. With over 200 NSS units participating 
                and presence in 300+ cities, we're creating a nationwide network of life-savers.
              </p>
              <p className="text-muted-foreground">
                Every year, NSS volunteers organize hundreds of blood donation camps, creating awareness 
                about voluntary blood donation, and directly contributing to saving thousands of lives. 
                Through NSS Blood Connect, we're taking this mission digital and making it more accessible 
                than ever before.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-blood transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center bg-blood-light border-primary">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">NSS Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-blood">
              <CardContent className="p-6">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Community Service</h3>
                <p className="text-sm text-muted-foreground">
                  Regular camps, health awareness programs, and social welfare activities in rural and urban areas
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-blood">
              <CardContent className="p-6">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Blood Donation Drives</h3>
                <p className="text-sm text-muted-foreground">
                  Organizing regular blood donation camps in colleges, universities, and communities nationwide
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-blood">
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Volunteer Training</h3>
                <p className="text-sm text-muted-foreground">
                  Skill development and leadership training programs for student volunteers across India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
