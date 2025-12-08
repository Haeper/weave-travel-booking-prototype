'use client';

import ParallaxHero from '@/components/ParallaxHero';
import TripsSection from '@/components/TripsSection';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Hotel,
  LayoutDashboard,
  Map,
  Package,
  Plane,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredDestinations = [
    {
      id: 1,
      name: 'Maldives',
      image:
        'https://images.unsplash.com/photo-1551727095-10465ee6b17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY0NTE3NjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'November - April',
      price: 'From $1,299',
    },
    {
      id: 2,
      name: 'Paris',
      image:
        'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NDQ3MTg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'April - June, September - October',
      price: 'From $899',
    },
    {
      id: 3,
      name: 'Tokyo',
      image:
        'https://images.unsplash.com/photo-1591194233688-dca69d406068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXxlbnwxfHx8fDE3NjQ1MjYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'March - May, September - November',
      price: 'From $1,099',
    },
    {
      id: 4,
      name: 'Santorini',
      image:
        'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY0NDIxNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'April - November',
      price: 'From $799',
    },
    {
      id: 5,
      name: 'New York',
      image:
        'https://images.unsplash.com/photo-1543716091-a840c05249ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eXxlbnwxfHx8fDE3NjQ1MjUyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'April - June, September - November',
      price: 'From $699',
    },
    {
      id: 6,
      name: 'Dubai',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmV8ZW58MXx8fHwxNzY0NDk3MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'November - March',
      price: 'From $999',
    },
  ];

  const trendingJourneys = [
    {
      id: 1,
      destination: 'Bali Adventure',
      season: 'Summer',
      duration: '10 Days',
      image:
        'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2NDUzNzMxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      review:
        'An incredible journey through temples, beaches, and rice terraces. Perfect blend of culture and relaxation.',
      author: 'Sarah M.',
    },
    {
      id: 2,
      destination: 'European Grand Tour',
      season: 'Spring',
      duration: '21 Days',
      image:
        'https://images.unsplash.com/photo-1745016176874-cd3ed3f5bfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBiaWclMjBiZW58ZW58MXx8fHwxNzY0NTIxNDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      review:
        'Visited 7 countries in 3 weeks. Every moment was magical, from Paris cafes to Roman ruins.',
      author: 'Mike R.',
    },
    {
      id: 3,
      destination: 'Mountain Trekking Nepal',
      season: 'Autumn',
      duration: '14 Days',
      image:
        'https://images.unsplash.com/photo-1669986480140-2c90b8edb443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjQ1MTI0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      review:
        'Challenging but rewarding trek through the Himalayas. Views that will take your breath away.',
      author: 'Emma K.',
    },
  ];

  const quickLinks = [
    {
      icon: Plane,
      label: 'Flight Booking',
      path: '/flights',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Hotel,
      label: 'Hotel Booking',
      path: '/hotels',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Package,
      label: 'Packages',
      path: '/packages',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Map,
      label: 'User Journeys',
      path: '/journeys',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      path: '/dashboard',
      color: 'from-green-500 to-green-600',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trendingJourneys.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + trendingJourneys.length) % trendingJourneys.length
    );
  };

  return (
    <div className="pt-0">
      {/* Trips Section - First Screen */}
      <TripsSection />

      {/* Parallax Hero - Second Screen */}
      <ParallaxHero />

      {/* Your Journey Begins Here Section */}
      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm tracking-[0.2em] text-gray-700 uppercase">
                YOUR JOURNEY BEGINS HERE.
              </p>
            </div>
            <div className="hidden h-px flex-1 bg-gray-400 md:block" />
            <div className="flex-1 text-right">
              <p className="text-sm tracking-[0.2em] text-gray-700 uppercase">
                CHOOSE YOUR FIRST STEP.
              </p>
            </div>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1 - Sale */}
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
              onClick={() => router.push('/packages')}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1587395925079-4bfbb0488fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29rcyUyMG1hZ2F6aW5lc3xlbnwxfHx8fDE3NjQ4MDY1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Travel books and guides"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="mb-3 text-xs tracking-[0.2em] text-white uppercase opacity-90">
                    TRAVEL WITH US
                  </p>
                  <h2 className="mb-6 text-5xl leading-none font-black tracking-tight text-white drop-shadow-lg md:text-6xl">
                    JOURNEYS
                  </h2>
                  <button className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-900 transition-colors hover:bg-gray-100">
                    <span className="font-mono text-sm tracking-wider uppercase">
                      START PLANNING
                    </span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - Stories */}
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
              onClick={() => router.push('/journeys')}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1493508994801-b87b8970d035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXZlJTIwc3dpbW1pbmclMjBjZW5vdGV8ZW58MXx8fHwxNzY0ODA2NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cave swimming adventure"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="mb-3 text-xs tracking-[0.2em] text-white uppercase opacity-90">
                    READ
                  </p>
                  <h2 className="mb-6 text-5xl leading-none font-black tracking-tight text-white drop-shadow-lg md:text-6xl">
                    STORIES
                  </h2>
                  <button className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-900 transition-colors hover:bg-gray-100">
                    <span className="font-mono text-sm tracking-wider uppercase">
                      FIND INSPIRATION
                    </span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - Journeys */}
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl"
              onClick={() => router.push('/packages')}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1515623959088-7617915baa1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmF2ZWwlMjBqb3VybmV5fGVufDF8fHx8MTc2NDc1MjIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Adventure travel journey"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="mb-3 text-xs tracking-[0.2em] text-white uppercase opacity-90">
                    AI POWERED
                  </p>
                  <h2 className="mb-6 text-5xl leading-none font-black tracking-tight text-white drop-shadow-lg md:text-6xl">
                    PLAN YOUR JOURNEY
                  </h2>
                  <button className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-900 transition-colors hover:bg-gray-100">
                    <span className="font-mono text-sm tracking-wider uppercase">
                      TRY AI PLANNER
                    </span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Featured Destinations</h2>
            <p className="text-gray-600">
              Discover the world's most breathtaking locations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="group cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white">
                    {destination.name}
                  </h3>
                </div>
                <CardContent className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Best Season</p>
                      <p className="text-sm">{destination.season}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Starting</p>
                      <p className="text-blue-600">{destination.price}</p>
                    </div>
                  </div>
                  <Button
                    className="w-full transition-all duration-300 hover:scale-105"
                    onClick={() => router.push('/packages')}
                  >
                    Explore
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending User Journeys */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Trending User Journeys</h2>
            <p className="text-gray-600">
              Get inspired by real travel experiences from our community
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {trendingJourneys.map((journey) => (
                  <div key={journey.id} className="w-full flex-shrink-0">
                    <Card className="mx-auto max-w-3xl overflow-hidden">
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto">
                          <img
                            src={journey.image}
                            alt={journey.destination}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <CardContent className="flex flex-col justify-center p-6">
                          <div className="mb-4 flex gap-2">
                            <Badge variant="secondary">{journey.season}</Badge>
                            <Badge variant="outline">{journey.duration}</Badge>
                          </div>
                          <h3 className="mb-4">{journey.destination}</h3>
                          <p className="mb-4 text-gray-600 italic">
                            "{journey.review}"
                          </p>
                          <p className="mb-6 text-sm text-gray-500">
                            - {journey.author}
                          </p>
                          <Button
                            onClick={() =>
                              router.push(`/journeys/${journey.id}`)
                            }
                          >
                            View Journey
                            <ArrowRight className="ml-2 size-4" />
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Quick Access</h2>
            <p className="text-gray-600">
              Everything you need for your perfect journey
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-lg"
                onClick={() => router.push(link.path)}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r ${link.color} flex items-center justify-center transition-transform duration-300 hover:rotate-12`}
                  >
                    <link.icon className="size-8 text-white" />
                  </div>
                  <p>{link.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
