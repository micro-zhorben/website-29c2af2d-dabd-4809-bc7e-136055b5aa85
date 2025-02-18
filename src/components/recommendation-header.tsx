import { Typography } from "./ui/typography";
import { Coffee } from "lucide-react";

export function RecommendationHeader() {
  return (
    <header className="text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-primary/10 p-3">
          <Coffee className="size-8 text-primary" />
        </div>
      </div>
      <Typography.H1>AI Coffee Recommendations</Typography.H1>
      <Typography.Lead className="mx-auto mt-4 max-w-2xl">
        Discover your perfect cup of coffee with our AI-powered recommendation
        system. Tell us your preferences, and we'll match you with coffees you'll
        love.
      </Typography.Lead>
    </header>
  );
}