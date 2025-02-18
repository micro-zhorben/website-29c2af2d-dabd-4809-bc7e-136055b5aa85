import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";
import { Coffee, ThumbsUp } from "lucide-react";

interface CoffeeCardProps {
  name: string;
  description: string;
  roastLevel: string;
  matchScore: number;
  onSelect: () => void;
}

export function CoffeeCard({
  name,
  description,
  roastLevel,
  matchScore,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Coffee className="size-6 text-primary" />
            {name}
          </CardTitle>
          <div className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1">
            <ThumbsUp className="size-4 text-primary" />
            <Typography.Small>{matchScore}% Match</Typography.Small>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Typography.P>{description}</Typography.P>
        <div className="mt-4">
          <Typography.Small className="text-muted-foreground">
            Roast Level: {roastLevel}
          </Typography.Small>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onSelect}
          className="w-full"
          size="lg"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}