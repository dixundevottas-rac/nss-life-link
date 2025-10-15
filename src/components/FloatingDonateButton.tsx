import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FloatingDonateButton = () => {
  return (
    <Link to="/register" className="fixed bottom-8 right-8 z-40 animate-float">
      <Button
        size="lg"
        className="rounded-full shadow-blood h-14 px-6 bg-primary hover:bg-blood-dark text-white"
      >
        <Heart className="w-5 h-5 mr-2 fill-current" />
        Donate Now
      </Button>
    </Link>
  );
};

export default FloatingDonateButton;
