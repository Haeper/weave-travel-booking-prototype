import { useState, useEffect } from 'react';
import { Calendar, MapPin, Plane, Hotel, Edit, Trash2, Plus, Check, X, Package } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Calendar as CalendarComponent } from '../components/ui/calendar';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

interface Journey {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
  flightBooked: boolean;
  hotelBooked: boolean;
  type: 'upcoming' | 'past' | 'copied';
  notes?: string;
  photos?: string[];
  cities?: string[];
}

interface SavedPackage {
  id: number;
  name: string;
  destination: string;
  duration: string;
  price: number;
  image: string;
  includes: string[];
  type: string;
}

export default function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [savedPackages, setSavedPackages] = useState<SavedPackage[]>([]);
  
  // Load saved packages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('savedPackages');
    if (saved) {
      setSavedPackages(JSON.parse(saved));
    }
  }, []);

  const [journeys, setJourneys] = useState<Journey[]>([
    {
      id: 1,
      destination: 'Paris, France',
      startDate: '2025-12-15',
      endDate: '2025-12-22',
      flightBooked: true,
      hotelBooked: true,
      type: 'upcoming',
    },
    {
      id: 2,
      destination: 'Tokyo, Japan',
      startDate: '2026-02-10',
      endDate: '2026-02-20',
      flightBooked: false,
      hotelBooked: false,
      type: 'upcoming',
    },
    {
      id: 3,
      destination: 'Bali, Indonesia',
      startDate: '2025-06-01',
      endDate: '2025-06-10',
      flightBooked: true,
      hotelBooked: true,
      type: 'past',
      notes: 'Amazing trip! The temples were breathtaking.',
    },
    {
      id: 4,
      destination: 'European Grand Tour',
      startDate: '2026-04-01',
      endDate: '2026-04-21',
      flightBooked: false,
      hotelBooked: false,
      type: 'copied',
      cities: ['Paris', 'Amsterdam', 'Berlin', 'Prague', 'Vienna', 'Venice', 'Rome'],
    },
  ]);

  const upcomingJourneys = journeys.filter(j => j.type === 'upcoming');
  const pastJourneys = journeys.filter(j => j.type === 'past');
  const copiedJourneys = journeys.filter(j => j.type === 'copied');

  const savedJourneys = copiedJourneys.length;

  const handleRemovePackage = (packageId: number) => {
    const updated = savedPackages.filter(pkg => pkg.id !== packageId);
    setSavedPackages(updated);
    localStorage.setItem('savedPackages', JSON.stringify(updated));
    toast.success('Package removed from journeys');
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="mb-2">Welcome back, Traveler!</h1>
          <p className="text-gray-600">Manage your journeys and plan your next adventure</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Upcoming Trips</p>
                  <p className="text-3xl">{upcomingJourneys.length}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <Plane className="size-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Past Journeys</p>
                  <p className="text-3xl">{pastJourneys.length}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="size-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Saved Journeys</p>
                  <p className="text-3xl">{savedJourneys}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <Calendar className="size-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Travel Calendar</CardTitle>
                <CardDescription>View your upcoming trips at a glance</CardDescription>
              </CardHeader>
              <CardContent>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
                <div className="mt-4 space-y-2">
                  {upcomingJourneys.map(journey => (
                    <div key={journey.id} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                      <Calendar className="size-4 text-blue-600" />
                      <span className="text-sm">{journey.destination}</span>
                      <span className="text-sm text-gray-500 ml-auto">
                        {new Date(journey.startDate).toLocaleDateString()} - {new Date(journey.endDate).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Journey Management */}
            <Card>
              <CardHeader>
                <CardTitle>My Journeys</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                    <TabsTrigger value="copied">Copied</TabsTrigger>
                    <TabsTrigger value="packages">
                      Packages
                      {savedPackages.length > 0 && (
                        <Badge className="ml-2 bg-blue-600 text-white">{savedPackages.length}</Badge>
                      )}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="upcoming" className="space-y-4">
                    {upcomingJourneys.map(journey => (
                      <Card key={journey.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-lg">{journey.destination}</h3>
                              <p className="text-sm text-gray-500">
                                {new Date(journey.startDate).toLocaleDateString()} - {new Date(journey.endDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="size-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="size-4 text-red-600" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant={journey.flightBooked ? "default" : "secondary"}>
                              {journey.flightBooked ? <Check className="size-3 mr-1" /> : <X className="size-3 mr-1" />}
                              Flight
                            </Badge>
                            <Badge variant={journey.hotelBooked ? "default" : "secondary"}>
                              {journey.hotelBooked ? <Check className="size-3 mr-1" /> : <X className="size-3 mr-1" />}
                              Hotel
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="past" className="space-y-4">
                    {pastJourneys.map(journey => (
                      <Card key={journey.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-lg">{journey.destination}</h3>
                              <p className="text-sm text-gray-500">
                                {new Date(journey.startDate).toLocaleDateString()} - {new Date(journey.endDate).toLocaleDateString()}
                              </p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Edit className="size-4" />
                            </Button>
                          </div>
                          {journey.notes && (
                            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                              <p className="text-sm text-gray-600 italic">"{journey.notes}"</p>
                            </div>
                          )}
                          <Button variant="outline" size="sm" className="mt-3">
                            <Plus className="size-4 mr-2" />
                            Add Photos & Notes
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="copied" className="space-y-4">
                    {copiedJourneys.map(journey => (
                      <Card key={journey.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-lg">{journey.destination}</h3>
                              <p className="text-sm text-gray-500">
                                {new Date(journey.startDate).toLocaleDateString()} - {new Date(journey.endDate).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="size-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Trash2 className="size-4 text-red-600" />
                              </Button>
                            </div>
                          </div>
                          {journey.cities && (
                            <div className="space-y-2">
                              <p className="text-sm">Cities: {journey.cities.join(' → ')}</p>
                              <div className="flex gap-2 flex-wrap mt-2">
                                <Button variant="outline" size="sm">
                                  Change Dates
                                </Button>
                                <Button variant="outline" size="sm">
                                  Edit Destinations
                                </Button>
                                <Button variant="outline" size="sm">
                                  Modify Activities
                                </Button>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="packages" className="space-y-4">
                    {savedPackages.map(pkg => (
                      <Card key={pkg.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="text-lg">{pkg.name}</h3>
                              <p className="text-sm text-gray-500">
                                {pkg.destination} - {pkg.duration}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm">
                                <Edit className="size-4" />
                              </Button>
                              <Button variant="ghost" size="sm" onClick={() => handleRemovePackage(pkg.id)}>
                                <Trash2 className="size-4 text-red-600" />
                              </Button>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant="default">
                              {pkg.price} USD
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm text-gray-500">Name</Label>
                  <p>John Traveler</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Email</Label>
                  <p>john@example.com</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Country</Label>
                  <p>United States</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Budget Preference</Label>
                  <Badge>Mid-Range</Badge>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Season Preference</Label>
                  <Badge variant="outline">Spring/Fall</Badge>
                </div>
                <Button className="w-full" variant="outline">
                  <Edit className="size-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full" variant="outline">
                  <Plane className="size-4 mr-2" />
                  Book a Flight
                </Button>
                <Button className="w-full" variant="outline">
                  <Hotel className="size-4 mr-2" />
                  Book a Hotel
                </Button>
                <Button className="w-full" variant="outline">
                  <Plus className="size-4 mr-2" />
                  Plan New Trip
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}