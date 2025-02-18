import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Slider } from "./ui/slider";
import { Typography } from "./ui/typography";
import { useState } from "react";

interface PreferenceFormProps {
  onSubmit: (preferences: {
    roastLevel: number;
    acidity: number;
    sweetness: number;
  }) => void;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const [preferences, setPreferences] = useState({
    roastLevel: 50,
    acidity: 50,
    sweetness: 50,
  });

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Coffee Preferences</CardTitle>
        <CardDescription>
          Tell us about your taste preferences to get personalized recommendations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Typography.P>Roast Level</Typography.P>
          <Slider
            value={[preferences.roastLevel]}
            onValueChange={([value]) =>
              setPreferences({ ...preferences, roastLevel: value })
            }
            max={100}
            step={1}
          />
          <div className="flex justify-between">
            <Typography.Small className="text-muted-foreground">
              Light
            </Typography.Small>
            <Typography.Small className="text-muted-foreground">
              Dark
            </Typography.Small>
          </div>
        </div>

        <div className="space-y-2">
          <Typography.P>Acidity</Typography.P>
          <Slider
            value={[preferences.acidity]}
            onValueChange={([value]) =>
              setPreferences({ ...preferences, acidity: value })
            }
            max={100}
            step={1}
          />
          <div className="flex justify-between">
            <Typography.Small className="text-muted-foreground">
              Low
            </Typography.Small>
            <Typography.Small className="text-muted-foreground">
              High
            </Typography.Small>
          </div>
        </div>

        <div className="space-y-2">
          <Typography.P>Sweetness</Typography.P>
          <Slider
            value={[preferences.sweetness]}
            onValueChange={([value]) =>
              setPreferences({ ...preferences, sweetness: value })
            }
            max={100}
            step={1}
          />
          <div className="flex justify-between">
            <Typography.Small className="text-muted-foreground">
              Low
            </Typography.Small>
            <Typography.Small className="text-muted-foreground">
              High
            </Typography.Small>
          </div>
        </div>

        <Button
          onClick={() => onSubmit(preferences)}
          className="w-full"
          size="lg"
        >
          Get Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}