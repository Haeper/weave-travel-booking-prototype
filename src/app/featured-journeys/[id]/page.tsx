'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  Calendar,
  Camera,
  Check,
  Clock,
  DollarSign,
  Hotel,
  MapPin,
  Plane,
  Users,
  Utensils,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

interface DayActivity {
  time: string;
  activity: string;
  description: string;
  icon: any;
}

interface JourneyData {
  id: number;
  title: string;
  destination: string;
  days: number;
  nights: number;
  price: number;
  image: string;
  includes: string[];
  type: string;
  description: string;
  itinerary: {
    day: number;
    title: string;
    activities: DayActivity[];
  }[];
  accommodation: {
    name: string;
    type: string;
    location: string;
    amenities: string[];
    images: string[];
    rating: number;
  }[];
  transportation: {
    type: string;
    details: string;
    from: string;
    to: string;
    duration: string;
  }[];
}

export default function FeaturedJourneyDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('itinerary');

  // Featured Journey data with comprehensive details
  const journeysData: { [key: string]: JourneyData } = {
    '1': {
      id: 1,
      title: "SARDINIA'S SPECTACULAR SERENADE: 10 DAYS ON THE ITALIAN ISLAND",
      destination: 'Sardinia, Italy',
      days: 14,
      nights: 9,
      price: 4680,
      image:
        'https://images.unsplash.com/photo-1557207773-caf19e055e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXJkaW5pYSUyMGJlYWNoJTIwaXRhbHl8ZW58MXx8fHwxNzY1MzE3MTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      includes: [
        'Round-trip flights',
        '9 nights in luxury hotels',
        'Daily breakfast',
        'Guided tours',
        'Boat excursions',
        'Wine tasting experiences',
      ],
      type: 'Cultural & Beach',
      description:
        'Discover the enchanting island of Sardinia with its pristine beaches, ancient ruins, and authentic Italian charm. This journey combines relaxation on white-sand beaches with cultural exploration of nuragic sites and charming coastal towns.',
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Cagliari',
          activities: [
            {
              time: '2:00 PM',
              activity: 'Arrive at Cagliari Airport',
              description: 'Transfer to your hotel in the historic center',
              icon: Plane,
            },
            {
              time: '4:00 PM',
              activity: 'Hotel Check-in',
              description:
                'Settle into your boutique hotel in Castello district',
              icon: Hotel,
            },
            {
              time: '7:00 PM',
              activity: 'Welcome Dinner',
              description: 'Traditional Sardinian dinner with local wines',
              icon: Utensils,
            },
          ],
        },
        {
          day: 2,
          title: 'Cagliari City Tour',
          activities: [
            {
              time: '9:00 AM',
              activity: 'Old Town Walking Tour',
              description:
                'Explore the medieval Castello district and Bastione di Saint Remy',
              icon: Camera,
            },
            {
              time: '12:00 PM',
              activity: 'Market Visit',
              description:
                'Experience San Benedetto Market with fresh local produce',
              icon: Camera,
            },
            {
              time: '2:00 PM',
              activity: 'Lunch at Local Trattoria',
              description: 'Fresh seafood and traditional culurgiones pasta',
              icon: Utensils,
            },
            {
              time: '4:00 PM',
              activity: 'Poetto Beach',
              description: "Relax on Cagliari's famous 8km beach",
              icon: Camera,
            },
          ],
        },
        {
          day: 3,
          title: 'Costa del Sud Exploration',
          activities: [
            {
              time: '9:00 AM',
              activity: 'Coastal Drive',
              description: 'Scenic drive along the southern coast',
              icon: Plane,
            },
            {
              time: '11:00 AM',
              activity: 'Chia Beaches',
              description:
                'Visit the stunning beaches of Chia with turquoise waters',
              icon: Camera,
            },
            {
              time: '1:00 PM',
              activity: 'Beachside Lunch',
              description: 'Fresh grilled fish at a beach restaurant',
              icon: Utensils,
            },
            {
              time: '3:00 PM',
              activity: 'Nora Archaeological Site',
              description: 'Explore ancient Phoenician and Roman ruins',
              icon: Camera,
            },
          ],
        },
        {
          day: 4,
          title: 'Transfer to Alghero',
          activities: [
            {
              time: '9:00 AM',
              activity: 'Departure from Cagliari',
              description: 'Scenic drive to the northwest coast',
              icon: Plane,
            },
            {
              time: '1:00 PM',
              activity: 'Lunch Stop in Bosa',
              description: 'Explore this colorful riverside town',
              icon: Utensils,
            },
            {
              time: '4:00 PM',
              activity: 'Arrive in Alghero',
              description: 'Check into seaside hotel',
              icon: Hotel,
            },
            {
              time: '7:00 PM',
              activity: 'Alghero Old Town',
              description:
                'Evening stroll through Catalan-influenced historic center',
              icon: Camera,
            },
          ],
        },
        {
          day: 5,
          title: "Neptune's Grotto & Coastal Beauty",
          activities: [
            {
              time: '9:00 AM',
              activity: 'Boat Excursion',
              description: "Boat trip to Neptune's Grotto sea caves",
              icon: Camera,
            },
            {
              time: '12:00 PM',
              activity: 'Swimming Break',
              description: 'Swim in crystal-clear coves',
              icon: Camera,
            },
            {
              time: '2:00 PM',
              activity: 'Seafood Lunch',
              description: 'Fresh lobster and local specialties',
              icon: Utensils,
            },
            {
              time: '4:00 PM',
              activity: 'Free Time',
              description: 'Explore Alghero at your leisure',
              icon: Clock,
            },
          ],
        },
        {
          day: 6,
          title: 'Wine Country Adventure',
          activities: [
            {
              time: '9:30 AM',
              activity: 'Vineyard Visit',
              description: 'Tour organic vineyard in Romangia region',
              icon: Camera,
            },
            {
              time: '11:00 AM',
              activity: 'Wine Tasting',
              description: 'Sample Vermentino and Cannonau wines',
              icon: Utensils,
            },
            {
              time: '1:00 PM',
              activity: 'Farm Lunch',
              description: 'Traditional agriturismo meal with local products',
              icon: Utensils,
            },
            {
              time: '3:30 PM',
              activity: 'Nuraghe Palmavera',
              description: 'Visit ancient megalithic stone structure',
              icon: Camera,
            },
          ],
        },
        {
          day: 7,
          title: 'La Maddalena Archipelago',
          activities: [
            {
              time: '8:00 AM',
              activity: 'Ferry to La Maddalena',
              description: 'Scenic ferry ride to the archipelago',
              icon: Plane,
            },
            {
              time: '10:00 AM',
              activity: 'Island Hopping Tour',
              description: 'Visit Budelli, Spargi, and Santa Maria islands',
              icon: Camera,
            },
            {
              time: '1:00 PM',
              activity: 'Beach Picnic',
              description: 'Lunch on pristine pink sand beach',
              icon: Utensils,
            },
            {
              time: '5:00 PM',
              activity: 'Return to Alghero',
              description: 'Ferry and transfer back',
              icon: Plane,
            },
          ],
        },
        {
          day: 8,
          title: 'Costa Smeralda',
          activities: [
            {
              time: '9:00 AM',
              activity: 'Drive to Porto Cervo',
              description: 'Visit the glamorous Costa Smeralda',
              icon: Plane,
            },
            {
              time: '11:00 AM',
              activity: 'Porto Cervo Marina',
              description: 'Admire luxury yachts and designer boutiques',
              icon: Camera,
            },
            {
              time: '1:00 PM',
              activity: 'Lunch with a View',
              description: 'Mediterranean cuisine overlooking the harbor',
              icon: Utensils,
            },
            {
              time: '3:00 PM',
              activity: 'Beach Time',
              description: 'Relax at exclusive Liscia Ruja beach',
              icon: Camera,
            },
          ],
        },
        {
          day: 9,
          title: 'Castelsardo & Crafts',
          activities: [
            {
              time: '9:00 AM',
              activity: 'Castelsardo Visit',
              description: 'Explore medieval hilltop town',
              icon: Camera,
            },
            {
              time: '11:00 AM',
              activity: 'Basket Weaving Workshop',
              description: 'Learn traditional Sardinian palm weaving',
              icon: Camera,
            },
            {
              time: '1:00 PM',
              activity: 'Local Lunch',
              description: 'Enjoy zuppa gallurese and mirto liqueur',
              icon: Utensils,
            },
            {
              time: '3:00 PM',
              activity: 'Elephant Rock',
              description: 'Visit unique wind-carved rock formation',
              icon: Camera,
            },
          ],
        },
        {
          day: 10,
          title: 'Departure',
          activities: [
            {
              time: '9:00 AM',
              activity: 'Final Breakfast',
              description: 'Leisurely breakfast at hotel',
              icon: Utensils,
            },
            {
              time: '11:00 AM',
              activity: 'Transfer to Airport',
              description: 'Private transfer to Alghero or Olbia airport',
              icon: Plane,
            },
            {
              time: '2:00 PM',
              activity: 'Departure',
              description: 'Flight home with unforgettable memories',
              icon: Plane,
            },
          ],
        },
      ],
      accommodation: [
        {
          name: 'Hotel Palazzo Doglio',
          type: '5-Star Luxury Hotel',
          location: 'Cagliari, Sardinia',
          rating: 5,
          amenities: [
            'Rooftop infinity pool',
            'Spa and wellness center',
            'Michelin-starred restaurant',
            'Free Wi-Fi',
            'Concierge service',
            'Fitness center',
            'Room service',
            'Air conditioning',
          ],
          images: [
            'https://images.unsplash.com/photo-1672092994742-d0a22e2a14c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXJkaW5pYSUyMGJlYWNoJTIwaG90ZWx8ZW58MXx8fHwxNzY1MzE3MTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          ],
        },
        {
          name: 'Hotel Villa Las Tronas',
          type: 'Historic Seaside Hotel',
          location: 'Alghero, Sardinia',
          rating: 5,
          amenities: [
            'Private beach access',
            'Panoramic sea views',
            'Restaurant with terrace',
            'Free Wi-Fi',
            'Swimming pool',
            'Bar and lounge',
          ],
          images: [
            'https://images.unsplash.com/photo-1557207773-caf19e055e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXJkaW5pYSUyMGJlYWNoJTIwaXRhbHl8ZW58MXx8fHwxNzY1MzE3MTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          ],
        },
      ],
      transportation: [
        {
          type: 'International Flight',
          details: 'Round-trip economy class tickets',
          from: 'Auckland, New Zealand',
          to: 'Cagliari, Sardinia (via Rome)',
          duration: '26 hours (with connections)',
        },
        {
          type: 'Private Car',
          details: 'Comfortable vehicle with driver for transfers',
          from: 'Cagliari',
          to: 'Alghero',
          duration: '3 hours',
        },
        {
          type: 'Boat Excursions',
          details: 'Various boat trips to caves and islands',
          from: 'Alghero',
          to: "Neptune's Grotto, La Maddalena",
          duration: 'Full day tours',
        },
      ],
    },
    '2': {
      id: 2,
      title:
        "JAPAN'S GOLDEN ROUTE: TOKYO, KANAZAWA, KYOTO, AND FUJI IN 14 DAYS",
      destination: 'Japan',
      days: 14,
      nights: 12,
      price: 8820,
      image:
        'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGZ1amklMjBqYXBhbnxlbnwxfHx8fDE3NjQ1MjYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      includes: [
        'Round-trip flights',
        '12 nights accommodation',
        'JR Rail Pass',
        'Daily breakfast',
        'Guided tours',
        'Cultural experiences',
      ],
      type: 'Cultural',
      description:
        "Experience the perfect blend of ancient traditions and modern marvels on this comprehensive journey through Japan. From Tokyo's neon-lit streets to Kyoto's serene temples, discover the heart of Japanese culture.",
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Tokyo',
          activities: [
            {
              time: '3:00 PM',
              activity: 'Arrive at Narita Airport',
              description: 'Airport transfer to hotel in Shinjuku',
              icon: Plane,
            },
            {
              time: '5:00 PM',
              activity: 'Hotel Check-in',
              description: 'Modern hotel in central Tokyo',
              icon: Hotel,
            },
            {
              time: '7:00 PM',
              activity: 'Welcome Dinner',
              description: 'Traditional izakaya experience',
              icon: Utensils,
            },
          ],
        },
        {
          day: 2,
          title: 'Tokyo Highlights',
          activities: [
            {
              time: '9:00 AM',
              activity: 'Senso-ji Temple',
              description: "Visit Tokyo's oldest temple in Asakusa",
              icon: Camera,
            },
            {
              time: '12:00 PM',
              activity: 'Sushi Lunch',
              description: 'Fresh sushi at Tsukiji Outer Market',
              icon: Utensils,
            },
            {
              time: '2:00 PM',
              activity: 'Imperial Palace Gardens',
              description: 'Explore the beautiful palace grounds',
              icon: Camera,
            },
            {
              time: '5:00 PM',
              activity: 'Shibuya Crossing',
              description: "Experience the world's busiest intersection",
              icon: Camera,
            },
          ],
        },
      ],
      accommodation: [
        {
          name: 'Park Hyatt Tokyo',
          type: '5-Star Luxury Hotel',
          location: 'Shinjuku, Tokyo',
          rating: 5,
          amenities: [
            'Panoramic city views',
            'New York Grill restaurant',
            'Spa and pool',
            'Free Wi-Fi',
            'Concierge service',
            'Fitness center',
          ],
          images: [
            'https://images.unsplash.com/photo-1702453757229-1ce6a9c78ab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRyYWRpdGlvbmFsJTIwaG90ZWx8ZW58MXx8fHwxNzY1MzE3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          ],
        },
      ],
      transportation: [
        {
          type: 'International Flight',
          details: 'Round-trip business class tickets',
          from: 'Auckland, New Zealand',
          to: 'Tokyo, Japan',
          duration: '12 hours direct',
        },
        {
          type: 'JR Rail Pass',
          details: '14-day unlimited travel on JR trains',
          from: 'All major cities',
          to: 'Nationwide',
          duration: 'Full journey',
        },
      ],
    },
    '3': {
      id: 3,
      title: 'MEXICO CITY: A WEEK OF CULTURAL AND CULINARY MARVELS',
      destination: 'Mexico City, Mexico',
      days: 7,
      nights: 6,
      price: 2415,
      image:
        'https://images.unsplash.com/photo-1518638150340-f706e86654de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZm9vZCUyMHN0cmVldHxlbnwxfHx8fDE3NjQ1MzU0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      includes: [
        'Round-trip flights',
        '6 nights boutique hotel',
        'Daily breakfast',
        'Food tours',
        'Museum passes',
        'Cooking class',
      ],
      type: 'Culinary & Cultural',
      description:
        'Immerse yourself in the vibrant culture and world-class cuisine of Mexico City. From ancient ruins to contemporary art, street tacos to fine dining, this journey celebrates all that makes CDMX unforgettable.',
      itinerary: [
        {
          day: 1,
          title: 'Welcome to CDMX',
          activities: [
            {
              time: '2:00 PM',
              activity: 'Airport Arrival',
              description: 'Transfer to boutique hotel in Roma Norte',
              icon: Plane,
            },
            {
              time: '4:00 PM',
              activity: 'Hotel Check-in',
              description: 'Settle into trendy neighborhood hotel',
              icon: Hotel,
            },
            {
              time: '7:00 PM',
              activity: 'Welcome Dinner',
              description: 'Contemporary Mexican cuisine with mezcal tasting',
              icon: Utensils,
            },
          ],
        },
      ],
      accommodation: [
        {
          name: 'La Valise Roma',
          type: 'Boutique Design Hotel',
          location: 'Roma Norte, Mexico City',
          rating: 5,
          amenities: [
            'Rooftop terrace',
            'Free Wi-Fi',
            'Gourmet breakfast',
            'Art gallery',
            'Concierge service',
            'Bar',
          ],
          images: [
            'https://images.unsplash.com/photo-1598998130480-b6cced377594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY28lMjBjaXR5JTIwaG90ZWx8ZW58MXx8fHwxNzY1MzE3MTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          ],
        },
      ],
      transportation: [
        {
          type: 'International Flight',
          details: 'Round-trip economy class tickets',
          from: 'Auckland, New Zealand',
          to: 'Mexico City, Mexico',
          duration: '18 hours (with connections)',
        },
      ],
    },
  };

  const journey = journeysData[(id as string) || '1'];

  if (!journey) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Journey not found</h2>
          <Button onClick={() => router.push('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    toast.success(
      'Booking request submitted! Our team will contact you within 24 hours.'
    );
    setTimeout(() => router.push('/'), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={journey.image}
          alt={journey.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              className="mb-4 text-white hover:bg-white/20 hover:text-white"
              onClick={() => router.push('/')}
            >
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Button>

            {/* WEAVE JOURNEYS Badge */}
            <div className="mb-4 inline-block rounded-sm bg-white/10 px-4 py-2 backdrop-blur-md">
              <p className="text-xs tracking-[0.15em] text-white uppercase">
                WEAVE JOURNEYS
              </p>
            </div>

            <h1 className="mb-4 text-white">{journey.title}</h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center gap-2">
                <MapPin className="size-5" />
                <span>{journey.destination}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-5" />
                <span>
                  {journey.days} Days / {journey.nights} Nights
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="border-white/30 bg-white/20 text-white backdrop-blur-md">
                  {journey.type}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Details */}
          <div className="space-y-8 lg:col-span-2">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4">Journey Overview</h2>
                <p className="mb-6 text-gray-600">{journey.description}</p>

                <h3 className="mb-3">What's Included</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {journey.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-5 flex-shrink-0 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tabs for Itinerary, Accommodation, Transportation */}
            <Card>
              <CardContent className="p-6">
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="accommodation">Hotels</TabsTrigger>
                    <TabsTrigger value="transportation">Transport</TabsTrigger>
                  </TabsList>

                  {/* Itinerary Tab */}
                  <TabsContent value="itinerary" className="mt-6 space-y-6">
                    {journey.itinerary.map((day) => (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: day.day * 0.05 }}
                      >
                        <div className="border-l-4 border-blue-600 py-2 pl-4">
                          <h3 className="mb-2">
                            Day {day.day}: {day.title}
                          </h3>
                          <div className="mt-4 space-y-4">
                            {day.activities.map((activity, idx) => (
                              <div key={idx} className="flex gap-4">
                                <div className="flex-shrink-0">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                                    <activity.icon className="size-5 text-blue-600" />
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="mb-1 flex items-center gap-2">
                                    <span className="font-mono text-sm text-blue-600">
                                      {activity.time}
                                    </span>
                                    <span className="text-gray-400">•</span>
                                    <span style={{ fontWeight: '600' }}>
                                      {activity.activity}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    {activity.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </TabsContent>

                  {/* Accommodation Tab */}
                  <TabsContent value="accommodation" className="mt-6 space-y-6">
                    {journey.accommodation.map((hotel, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden rounded-lg border"
                      >
                        <div className="grid gap-6 p-6 md:grid-cols-2">
                          <div>
                            <img
                              src={hotel.images[0]}
                              alt={hotel.name}
                              className="h-64 w-full rounded-lg object-cover"
                            />
                          </div>
                          <div>
                            <div className="mb-2 flex items-center gap-2">
                              <h3>{hotel.name}</h3>
                              <div className="flex">
                                {[...Array(hotel.rating)].map((_, i) => (
                                  <span key={i} className="text-yellow-400">
                                    ★
                                  </span>
                                ))}
                              </div>
                            </div>
                            <p className="mb-1 text-gray-600">{hotel.type}</p>
                            <div className="mb-4 flex items-center gap-1 text-gray-500">
                              <MapPin className="size-4" />
                              <span className="text-sm">{hotel.location}</span>
                            </div>
                            <h4 className="mb-2 text-sm">Amenities:</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {hotel.amenities.map((amenity, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-1"
                                >
                                  <Check className="mt-0.5 size-4 flex-shrink-0 text-green-600" />
                                  <span className="text-sm text-gray-600">
                                    {amenity}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </TabsContent>

                  {/* Transportation Tab */}
                  <TabsContent
                    value="transportation"
                    className="mt-6 space-y-4"
                  >
                    {journey.transportation.map((transport, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="rounded-lg border p-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                            <Plane className="size-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-2">{transport.type}</h3>
                            <p className="mb-3 text-gray-600">
                              {transport.details}
                            </p>
                            <div className="grid gap-4 text-sm md:grid-cols-3">
                              <div>
                                <p className="mb-1 text-gray-500">From</p>
                                <p style={{ fontWeight: '600' }}>
                                  {transport.from}
                                </p>
                              </div>
                              <div>
                                <p className="mb-1 text-gray-500">To</p>
                                <p style={{ fontWeight: '600' }}>
                                  {transport.to}
                                </p>
                              </div>
                              <div>
                                <p className="mb-1 text-gray-500">Duration</p>
                                <p style={{ fontWeight: '600' }}>
                                  {transport.duration}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="mb-2 text-gray-600">Price per person</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl">
                      ${journey.price.toLocaleString()}
                    </span>
                    <span className="text-gray-500">USD</span>
                  </div>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center justify-between border-b py-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="size-4" />
                      <span>Duration</span>
                    </div>
                    <span>{journey.days} days</span>
                  </div>
                  <div className="flex items-center justify-between border-b py-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="size-4" />
                      <span>Destination</span>
                    </div>
                    <span>{journey.destination}</span>
                  </div>
                  <div className="flex items-center justify-between border-b py-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="size-4" />
                      <span>Group Size</span>
                    </div>
                    <span>Max 16</span>
                  </div>
                </div>

                <Button
                  className="mb-3 w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                  onClick={handleBooking}
                >
                  <DollarSign className="mr-2 size-5" />
                  Book This Journey
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push('/contact')}
                >
                  Contact Us
                </Button>

                <p className="mt-4 text-center text-xs text-gray-500">
                  *Price based on double occupancy. Single supplements
                  available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
