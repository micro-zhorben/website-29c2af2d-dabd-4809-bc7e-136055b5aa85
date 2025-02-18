import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { RecommendationHeader } from "@/components/recommendation-header";
import { PreferenceForm } from "@/components/preference-form";
import { CoffeeCard } from "@/components/coffee-card";

// Mock data for coffee recommendations
const COFFEE_RECOMMENDATIONS = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description:
      "A light roasted coffee with bright acidity, floral notes, and hints of citrus and bergamot.",
    roastLevel: "Light",
    matchScore: 95,
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description:
      "Medium roasted with a balanced profile, featuring caramel sweetness and subtle nutty notes.",
    roastLevel: "Medium",
    matchScore: 88,
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description:
      "Dark roasted with full body, low acidity, and rich earthy flavors with hints of dark chocolate.",
    roastLevel: "Dark",
    matchScore: 82,
  },
];

export function Home() {
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handlePreferenceSubmit = (preferences: {
    roastLevel: number;
    acidity: number;
    sweetness: number;
  }) => {
    console.log("Preferences submitted:", preferences);
    setShowRecommendations(true);
  };

  const handleCoffeeSelect = (coffeeId: number) => {
    console.log("Selected coffee:", coffeeId);
  };

  return (
    <div className="min-h-screen bg-background px-4 pb-12 pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex justify-end">
          <ModeToggle />
        </div>

        <RecommendationHeader />

        <div className="mt-12 flex justify-center">
          {!showRecommendations ? (
            <PreferenceForm onSubmit={handlePreferenceSubmit} />
          ) : (
            <div className="w-full">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {COFFEE_RECOMMENDATIONS.map((coffee) => (
                  <CoffeeCard
                    key={coffee.id}
                    name={coffee.name}
                    description={coffee.description}
                    roastLevel={coffee.roastLevel}
                    matchScore={coffee.matchScore}
                    onSelect={() => handleCoffeeSelect(coffee.id)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}