import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Hotel, Package, Map, LayoutDashboard, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import TripsSection from '../components/TripsSection';
import ParallaxHero from '../components/ParallaxHero';

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredDestinations = [
    {
      id: 1,
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY0NTE3NjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'November - April',
      price: 'From $1,299',
    },
    {
      id: 2,
      name: 'Paris',
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NDQ3MTg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'April - June, September - October',
      price: 'From $899',
    },
    {
      id: 3,
      name: 'Tokyo',
      image: 'https://images.unsplash.com/photo-1591194233688-dca69d406068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXxlbnwxfHx8fDE3NjQ1MjYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'March - May, September - November',
      price: 'From $1,099',
    },
    {
      id: 4,
      name: 'Santorini',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY0NDIxNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'April - November',
      price: 'From $799',
    },
    {
      id: 5,
      name: 'New York',
      image: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eXxlbnwxfHx8fDE3NjQ1MjUyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      season: 'April - June, September - November',
      price: 'From $699',
    },
    {
      id: 6,
      name: 'Dubai',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmV8ZW58MXx8fHwxNzY0NDk3MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2NDUzNzMxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      review: 'An incredible journey through temples, beaches, and rice terraces. Perfect blend of culture and relaxation.',
      author: 'Sarah M.',
    },
    {
      id: 2,
      destination: 'European Grand Tour',
      season: 'Spring',
      duration: '21 Days',
      image: 'https://images.unsplash.com/photo-1745016176874-cd3ed3f5bfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBiaWclMjBiZW58ZW58MXx8fHwxNzY0NTIxNDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      review: 'Visited 7 countries in 3 weeks. Every moment was magical, from Paris cafes to Roman ruins.',
      author: 'Mike R.',
    },
    {
      id: 3,
      destination: 'Mountain Trekking Nepal',
      season: 'Autumn',
      duration: '14 Days',
      image: 'https://images.unsplash.com/photo-1669986480140-2c90b8edb443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjQ1MTI0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      review: 'Challenging but rewarding trek through the Himalayas. Views that will take your breath away.',
      author: 'Emma K.',
    },
  ];

  const quickLinks = [
    { icon: Plane, label: 'Flight Booking', path: '/flights', color: 'from-blue-500 to-blue-600' },
    { icon: Hotel, label: 'Hotel Booking', path: '/hotels', color: 'from-purple-500 to-purple-600' },
    { icon: Package, label: 'Packages', path: '/packages', color: 'from-pink-500 to-pink-600' },
    { icon: Map, label: 'User Journeys', path: '/journeys', color: 'from-orange-500 to-orange-600' },
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', color: 'from-green-500 to-green-600' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trendingJourneys.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trendingJourneys.length) % trendingJourneys.length);
  };

  return (
    <div className="pt-0">
      {/* Trips Section - First Screen */}
      <TripsSection />

      {/* Parallax Hero - Second Screen */}
      <ParallaxHero />

      {/* Your Journey Begins Here Section */}
      <section className="py-20 bg-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex-1">
              <p className="text-sm tracking-[0.2em] uppercase text-gray-700">YOUR JOURNEY BEGINS HERE.</p>
            </div>
            <div className="hidden md:block flex-1 h-px bg-gray-400" />
            <div className="flex-1 text-right">
              <p className="text-sm tracking-[0.2em] uppercase text-gray-700">CHOOSE YOUR FIRST STEP.</p>
            </div>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Sale */}
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => navigate('/packages')}
            >
              <div className="aspect-[3/4] relative">
                <img 
                  src="https://images.unsplash.com/photo-1587395925079-4bfbb0488fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29rcyUyMG1hZ2F6aW5lc3xlbnwxfHx8fDE3NjQ4MDY1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Travel books and guides"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-white text-xs tracking-[0.2em] uppercase mb-3 opacity-90">TRAVEL WITH US</p>
                  <h2 className="text-white mb-6 drop-shadow-lg text-5xl md:text-6xl font-black tracking-tight leading-none">JOURNEYS</h2>
                  <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors">
                    <span className="text-sm tracking-wider uppercase font-mono">START PLANNING</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - Stories */}
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => navigate('/journeys')}
            >
              <div className="aspect-[3/4] relative">
                <img 
                  src="https://images.unsplash.com/photo-1493508994801-b87b8970d035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXZlJTIwc3dpbW1pbmclMjBjZW5vdGV8ZW58MXx8fHwxNzY0ODA2NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cave swimming adventure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-white text-xs tracking-[0.2em] uppercase mb-3 opacity-90">READ</p>
                  <h2 className="text-white mb-6 drop-shadow-lg text-5xl md:text-6xl font-black tracking-tight leading-none">STORIES</h2>
                  <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors">
                    <span className="text-sm tracking-wider uppercase font-mono">FIND INSPIRATION</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - Journeys */}
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => navigate('/packages')}
            >
              <div className="aspect-[3/4] relative">
                <img 
                  src="https://images.unsplash.com/photo-1515623959088-7617915baa1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjB0cmF2ZWwlMjBqb3VybmV5fGVufDF8fHx8MTc2NDc1MjIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Adventure travel journey"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-white text-xs tracking-[0.2em] uppercase mb-3 opacity-90">AI POWERED</p>
                  <h2 className="text-white mb-6 drop-shadow-lg text-5xl md:text-6xl font-black tracking-tight leading-none">PLAN YOUR JOURNEY</h2>
                  <button className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full w-fit hover:bg-gray-100 transition-colors">
                    <span className="text-sm tracking-wider uppercase font-mono">TRY AI PLANNER</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Destinations</h2>
            <p className="text-gray-600">Discover the world's most breathtaking locations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white">{destination.name}</h3>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Best Season</p>
                      <p className="text-sm">{destination.season}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Starting</p>
                      <p className="text-blue-600">{destination.price}</p>
                    </div>
                  </div>
                  <Button className="w-full transition-all duration-300 hover:scale-105" onClick={() => navigate('/packages')}>
                    Explore
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending User Journeys */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Trending User Journeys</h2>
            <p className="text-gray-600">Get inspired by real travel experiences from our community</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {trendingJourneys.map((journey) => (
                  <div key={journey.id} className="w-full flex-shrink-0">
                    <Card className="overflow-hidden max-w-3xl mx-auto">
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto">
                          <img 
                            src={journey.image} 
                            alt={journey.destination}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-6 flex flex-col justify-center">
                          <div className="flex gap-2 mb-4">
                            <Badge variant="secondary">{journey.season}</Badge>
                            <Badge variant="outline">{journey.duration}</Badge>
                          </div>
                          <h3 className="mb-4">{journey.destination}</h3>
                          <p className="text-gray-600 mb-4 italic">"{journey.review}"</p>
                          <p className="text-sm text-gray-500 mb-6">- {journey.author}</p>
                          <Button onClick={() => navigate(`/journeys/${journey.id}`)}>
                            View Journey
                            <ArrowRight className="size-4 ml-2" />
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
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
              onClick={prevSlide}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
              onClick={nextSlide}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Quick Access</h2>
            <p className="text-gray-600">Everything you need for your perfect journey</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {quickLinks.map((link, index) => (
              <Card 
                key={index}
                className="cursor-pointer hover:shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                onClick={() => navigate(link.path)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${link.color} flex items-center justify-center transition-transform duration-300 hover:rotate-12`}>
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