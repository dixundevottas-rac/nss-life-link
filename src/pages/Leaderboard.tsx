import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const topUnits = [
    { rank: 1, name: "NSS Unit 101, Mumbai University", donations: 450, lives: 1350, volunteers: 120 },
    { rank: 2, name: "NSS Unit 203, Delhi College", donations: 420, lives: 1260, volunteers: 105 },
    { rank: 3, name: "NSS Unit 156, Bangalore Institute", donations: 380, lives: 1140, volunteers: 95 },
    { rank: 4, name: "NSS Unit 089, Pune University", donations: 350, lives: 1050, volunteers: 88 },
    { rank: 5, name: "NSS Unit 234, Chennai College", donations: 320, lives: 960, volunteers: 82 },
    { rank: 6, name: "NSS Unit 167, Hyderabad Institute", donations: 295, lives: 885, volunteers: 76 },
    { rank: 7, name: "NSS Unit 198, Kolkata University", donations: 275, lives: 825, volunteers: 70 },
    { rank: 8, name: "NSS Unit 123, Jaipur College", donations: 250, lives: 750, volunteers: 65 },
  ];

  const topDonors = [
    { rank: 1, name: "Rahul Sharma", donations: 28, city: "Mumbai", bloodGroup: "O+" },
    { rank: 2, name: "Priya Patel", donations: 25, city: "Delhi", bloodGroup: "A+" },
    { rank: 3, name: "Amit Kumar", donations: 23, city: "Bangalore", bloodGroup: "B+" },
    { rank: 4, name: "Sneha Reddy", donations: 21, city: "Hyderabad", bloodGroup: "AB+" },
    { rank: 5, name: "Vikram Singh", donations: 19, city: "Pune", bloodGroup: "O-" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-8 h-8 text-yellow-500" />;
      case 2:
        return <Medal className="w-8 h-8 text-gray-400" />;
      case 3:
        return <Award className="w-8 h-8 text-amber-600" />;
      default:
        return <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-muted-foreground">{rank}</div>;
    }
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
          <p className="text-xl text-muted-foreground">
            Celebrating our heroes making the biggest impact
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-primary to-blood-accent text-white shadow-blood">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">52,340</div>
              <div className="text-sm opacity-90">Total Donations This Year</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blood-accent to-primary text-white shadow-blood">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">157,020</div>
              <div className="text-sm opacity-90">Lives Saved This Year</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-primary to-blood-dark text-white shadow-blood">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">8,450</div>
              <div className="text-sm opacity-90">Active Volunteers</div>
            </CardContent>
          </Card>
        </div>

        {/* Top NSS Units */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Top NSS Units</h2>
          <div className="space-y-4">
            {topUnits.map((unit, index) => (
              <Card 
                key={unit.rank} 
                className={`hover:shadow-blood transition-all animate-slide-in ${
                  unit.rank <= 3 ? "border-l-4 border-l-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {getRankIcon(unit.rank)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{unit.name}</h3>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Donations:</span>{" "}
                          <span className="font-semibold text-primary">{unit.donations}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Lives Saved:</span>{" "}
                          <span className="font-semibold text-primary">{unit.lives}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Volunteers:</span>{" "}
                          <span className="font-semibold">{unit.volunteers}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Individual Donors */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Top Individual Donors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topDonors.map((donor, index) => (
              <Card 
                key={donor.rank} 
                className={`hover:shadow-blood transition-all ${
                  donor.rank <= 3 ? "bg-blood-light border-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    {getRankIcon(donor.rank)}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{donor.name}</h3>
                      <p className="text-sm text-muted-foreground">{donor.city}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Blood Group:</span>
                      <span className="font-semibold text-primary">{donor.bloodGroup}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Donations:</span>
                      <span className="font-semibold text-primary">{donor.donations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lives Saved:</span>
                      <span className="font-semibold">{donor.donations * 3}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center p-8 bg-blood-light rounded-lg">
          <p className="text-muted-foreground">
            Rankings are updated monthly based on verified donations. Keep donating to climb up the leaderboard!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
