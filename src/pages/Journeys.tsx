import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, MapPin, Calendar, Users, Sun, Cloud, Snowflake, Heart, ChevronDown, Compass, Globe, Camera, Map } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { motion } from 'motion/react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet';

export default function Journeys() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>([]);

  const journeys = [
    {
      id: 1,
      title: 'Bali Adventure',
      author: 'Sarah M.',
      destination: 'Bali, Indonesia',
      season: 'Summer',
      weather: 'Sunny',
      duration: '10 Days',
      type: 'Adventure',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2NDUzNzMxMXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'An incredible journey through temples, beaches, and rice terraces. Perfect blend of culture and relaxation.',
      likes: 234,
    },
    {
      id: 2,
      title: 'European Grand Tour',
      author: 'Mike R.',
      destination: 'Multiple Cities, Europe',
      season: 'Spring',
      weather: 'Mild',
      duration: '21 Days',
      type: 'Culture',
      image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NDQ3MTg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Visited 7 countries in 3 weeks. Every moment was magical, from Paris cafes to Roman ruins.',
      likes: 456,
    },
    {
      id: 3,
      title: 'Mountain Trekking Nepal',
      author: 'Emma K.',
      destination: 'Himalayas, Nepal',
      season: 'Autumn',
      weather: 'Clear',
      duration: '14 Days',
      type: 'Adventure',
      image: 'https://images.unsplash.com/photo-1669986480140-2c90b8edb443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjQ1MTI0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Challenging but rewarding trek through the Himalayas. Views that will take your breath away.',
      likes: 189,
    },
    {
      id: 4,
      title: 'Tokyo Food Tour',
      author: 'David L.',
      destination: 'Tokyo, Japan',
      season: 'Spring',
      weather: 'Mild',
      duration: '7 Days',
      type: 'Food & Culture',
      image: 'https://images.unsplash.com/photo-1591194233688-dca69d406068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXxlbnwxfHx8fDE3NjQ1MjYyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A culinary adventure through Tokyo\'s best restaurants, street food, and hidden gems.',
      likes: 312,
    },
    {
      id: 5,
      title: 'Greek Island Hopping',
      author: 'Lisa P.',
      destination: 'Greek Islands',
      season: 'Summer',
      weather: 'Sunny',
      duration: '12 Days',
      type: 'Beach & Relaxation',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2V8ZW58MXx8fHwxNzY0NDIxNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Explored 5 beautiful Greek islands. Crystal clear waters, stunning sunsets, amazing food.',
      likes: 278,
    },
    {
      id: 6,
      title: 'New York City Explorer',
      author: 'Tom W.',
      destination: 'New York, USA',
      season: 'Fall',
      weather: 'Cool',
      duration: '5 Days',
      type: 'City Break',
      image: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eXxlbnwxfHx8fDE3NjQ1MjUyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Fast-paced NYC adventure covering all major attractions, Broadway shows, and rooftop bars.',
      likes: 201,
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const weatherIcons = {
    Sunny: Sun,
    Mild: Cloud,
    Clear: Sun,
    Cool: Cloud,
  };

  const scrollToJourneys = () => {
    document.getElementById('journeys-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO COVER SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-900/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920"
            alt="Travel background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-white/20"
        >
          <Compass className="size-32" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 text-white/20"
        >
          <Camera className="size-24" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-50 rounded-full" />
                <Map className="size-20 text-white relative" strokeWidth={1.5} />
              </div>
            </motion.div>

            <h1 className="text-7xl md:text-8xl text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Community Journeys
            </h1>

            <p className="text-2xl md:text-3xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Discover Real Stories from Real Travelers
            </p>

            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Explore authentic travel experiences, get inspired by incredible adventures, and plan your next journey with insights from our global community
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  150+
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Journeys</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  80+
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Countries</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  10k+
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider">Travelers</div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                onClick={scrollToJourneys}
                className="bg-white text-slate-900 hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all"
              >
                Explore Journeys
                <ChevronDown className="size-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
          onClick={scrollToJourneys}
        >

        </motion.div>

        {/* Decorative gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />
      </section>

      {/* JOURNEYS SECTION */}
      <section id="journeys-section" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Journeys
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-picked adventures from our community of passionate travelers
            </p>
          </motion.div>

          <div className="flex gap-8">
            {/* Filters Sidebar - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block w-64 flex-shrink-0"
            >
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Filter className="size-5 text-primary" />
                    <h3 className="">Filters</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm mb-3">Season</h4>
                      <div className="space-y-2">
                        {['Summer', 'Spring', 'Fall', 'Winter'].map(season => (
                          <div key={season} className="flex items-center space-x-2">
                            <Checkbox id={`season-${season}`} />
                            <Label htmlFor={`season-${season}`} className="text-sm cursor-pointer">
                              {season}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm mb-3">Weather</h4>
                      <div className="space-y-2">
                        {['Sunny', 'Rainy', 'Mild', 'Cool'].map(weather => (
                          <div key={weather} className="flex items-center space-x-2">
                            <Checkbox id={`weather-${weather}`} />
                            <Label htmlFor={`weather-${weather}`} className="text-sm cursor-pointer">
                              {weather}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm mb-3">Trip Type</h4>
                      <div className="space-y-2">
                        {['Adventure', 'Beach & Relaxation', 'Culture', 'Food & Culture', 'Family', 'City Break'].map(type => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`type-${type}`} />
                            <Label htmlFor={`type-${type}`} className="text-sm cursor-pointer">
                              {type}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm mb-3">Duration</h4>
                      <div className="space-y-2">
                        {['< 1 week', '1-2 weeks', '2-3 weeks', '> 3 weeks'].map(duration => (
                          <div key={duration} className="flex items-center space-x-2">
                            <Checkbox id={`duration-${duration}`} />
                            <Label htmlFor={`duration-${duration}`} className="text-sm cursor-pointer">
                              {duration}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6" variant="outline">
                    Reset Filters
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="lg" className="shadow-lg">
                    <Filter className="size-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="text-sm mb-3">Season</h4>
                      <div className="space-y-2">
                        {['Summer', 'Spring', 'Fall', 'Winter'].map(season => (
                          <div key={season} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-season-${season}`} />
                            <Label htmlFor={`mobile-season-${season}`} className="text-sm cursor-pointer">
                              {season}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm mb-3">Trip Type</h4>
                      <div className="space-y-2">
                        {['Adventure', 'Beach & Relaxation', 'Culture', 'Food & Culture', 'Family'].map(type => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-type-${type}`} />
                            <Label htmlFor={`mobile-type-${type}`} className="text-sm cursor-pointer">
                              {type}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Journey Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {journeys.map((journey, index) => {
                  const WeatherIcon = weatherIcons[journey.weather as keyof typeof weatherIcons] || Sun;
                  return (
                    <motion.div
                      key={journey.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full">
                        <div className="relative h-56 overflow-hidden">
                          <img 
                            src={journey.image} 
                            alt={journey.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`absolute top-3 right-3 ${favorites.includes(journey.id) ? 'text-red-500' : 'text-white'} hover:bg-white/20 backdrop-blur-sm`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(journey.id);
                            }}
                          >
                            <Heart className={`size-5 ${favorites.includes(journey.id) ? 'fill-current' : ''}`} />
                          </Button>
                          <div className="absolute bottom-3 left-3 right-3">
                            <h3 className="text-white mb-1 text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>{journey.title}</h3>
                            <p className="text-white/90 text-sm">by {journey.author}</p>
                          </div>
                        </div>
                        
                        <CardContent className="p-5">
                          <div className="flex gap-2 mb-3 flex-wrap">
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                              <MapPin className="size-3 mr-1" />
                              {journey.destination}
                            </Badge>
                            <Badge variant="outline">
                              <Calendar className="size-3 mr-1" />
                              {journey.duration}
                            </Badge>
                            <Badge variant="outline">
                              <WeatherIcon className="size-3 mr-1" />
                              {journey.season}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {journey.description}
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Heart className="size-4" />
                              {journey.likes} likes
                            </div>
                            <Button 
                              size="sm"
                              onClick={() => navigate(`/journeys/${journey.id}`)}
                              className="group-hover:scale-105 transition-transform"
                            >
                              View Details
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
