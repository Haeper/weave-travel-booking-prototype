import { useState } from 'react';
import { Sparkles, MapPin, Calendar, DollarSign, Users, Sun } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Slider } from '../components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Badge } from '../components/ui/badge';

export default function AIPlanner() {
  const [budget, setBudget] = useState([2000]);
  const [duration, setDuration] = useState([7]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPlan(true);
    }, 3000);
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-4">
            <Sparkles className="size-5" />
            <span>AI-Powered Trip Planner</span>
          </div>
          <h1 className="mb-4">Plan Your Perfect Journey</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us your preferences and let our AI create a personalized itinerary tailored just for you
          </p>
        </div>

        {!generatedPlan ? (
          <form onSubmit={handleGenerate}>
            <Card>
              <CardHeader>
                <CardTitle>Trip Preferences</CardTitle>
                <CardDescription>Fill in your details to help us create the perfect itinerary</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Destination */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="destination">
                      <MapPin className="size-4 inline mr-2" />
                      Destination(s)
                    </Label>
                    <Input 
                      id="destination" 
                      placeholder="e.g., Paris, Tokyo, Multiple cities"
                      required
                    />
                    <p className="text-sm text-gray-500 mt-1">Enter one or more destinations</p>
                  </div>

                  <div>
                    <Label htmlFor="start-date">
                      <Calendar className="size-4 inline mr-2" />
                      Start Date
                    </Label>
                    <Input 
                      id="start-date" 
                      type="date"
                      required
                    />
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <Label>
                    <Calendar className="size-4 inline mr-2" />
                    Trip Duration: {duration[0]} days
                  </Label>
                  <Slider
                    value={duration}
                    onValueChange={setDuration}
                    min={1}
                    max={30}
                    step={1}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 day</span>
                    <span>30 days</span>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <Label>
                    <DollarSign className="size-4 inline mr-2" />
                    Budget: ${budget[0]}
                  </Label>
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    min={500}
                    max={10000}
                    step={100}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$500</span>
                    <span>$10,000+</span>
                  </div>
                </div>

                {/* Travel Style & Season */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="travelers">
                      <Users className="size-4 inline mr-2" />
                      Number of Travelers
                    </Label>
                    <Select defaultValue="2">
                      <SelectTrigger id="travelers">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Solo traveler</SelectItem>
                        <SelectItem value="2">2 travelers</SelectItem>
                        <SelectItem value="3-4">3-4 travelers</SelectItem>
                        <SelectItem value="5+">5+ travelers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="season">
                      <Sun className="size-4 inline mr-2" />
                      Preferred Season
                    </Label>
                    <Select defaultValue="any">
                      <SelectTrigger id="season">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any season</SelectItem>
                        <SelectItem value="spring">Spring</SelectItem>
                        <SelectItem value="summer">Summer</SelectItem>
                        <SelectItem value="fall">Fall</SelectItem>
                        <SelectItem value="winter">Winter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Trip Type */}
                <div>
                  <Label htmlFor="trip-type">Trip Type</Label>
                  <Select defaultValue="balanced">
                    <SelectTrigger id="trip-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adventure">Adventure & Outdoor</SelectItem>
                      <SelectItem value="culture">Culture & History</SelectItem>
                      <SelectItem value="beach">Beach & Relaxation</SelectItem>
                      <SelectItem value="food">Food & Culinary</SelectItem>
                      <SelectItem value="family">Family Friendly</SelectItem>
                      <SelectItem value="luxury">Luxury & Comfort</SelectItem>
                      <SelectItem value="balanced">Balanced Mix</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Interests & Special Requirements */}
                <div>
                  <Label htmlFor="interests">Interests & Activities</Label>
                  <Textarea 
                    id="interests"
                    placeholder="e.g., museums, hiking, local food markets, photography, nightlife..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="requirements">Special Requirements</Label>
                  <Textarea 
                    id="requirements"
                    placeholder="e.g., vegetarian food options, wheelchair accessibility, pet-friendly accommodations..."
                    rows={2}
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="size-5 mr-2 animate-spin" />
                      Generating Your Perfect Itinerary...
                    </>
                  ) : (
                    <>
                      <Sparkles className="size-5 mr-2" />
                      Generate AI Itinerary
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </form>
        ) : (
          <div className="space-y-6">
            {/* Success Message */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Sparkles className="size-8 text-green-600" />
                </div>
                <h2 className="mb-2">Your Itinerary is Ready!</h2>
                <p className="text-gray-600">
                  We've created a personalized {duration[0]}-day trip plan based on your preferences
                </p>
              </CardContent>
            </Card>

            {/* Generated Itinerary Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Paris & Rome Adventure</CardTitle>
                <CardDescription>10 days • 2 cities • Culture & Food Focus</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3 flex-wrap">
                  <Badge>Budget: $2,000</Badge>
                  <Badge variant="outline">2 Travelers</Badge>
                  <Badge variant="outline">Spring Season</Badge>
                </div>

                <div className="border-t pt-4 space-y-4">
                  <div>
                    <h3 className="text-lg mb-2">Day 1-5: Paris, France</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                        <span>Visit Eiffel Tower, Louvre Museum, and Notre-Dame</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                        <span>Food tour in Le Marais district</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                        <span>Day trip to Versailles Palace</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg mb-2">Day 6-10: Rome, Italy</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                        <span>Explore Colosseum, Roman Forum, and Pantheon</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                        <span>Vatican City and Sistine Chapel tour</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
                        <span>Cooking class: Learn to make authentic pasta</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-4 flex gap-4">
                  <Button className="flex-1">Save to Dashboard</Button>
                  <Button variant="outline" className="flex-1">Download PDF</Button>
                  <Button variant="outline" onClick={() => setGeneratedPlan(false)}>
                    Create New
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}