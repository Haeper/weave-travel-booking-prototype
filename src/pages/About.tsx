import { Plane, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export default function About() {
  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '50,000+' },
    { icon: Plane, label: 'Destinations', value: '150+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Heart, label: 'Five-Star Reviews', value: '10,000+' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?w=400',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1591194233688-dca69d406068?w=400',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Travel Experience Director',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400',
    },
    {
      name: 'David Park',
      role: 'Customer Success Lead',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=400',
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-6 text-white">About Weave</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            We're on a mission to make travel planning effortless and inspire people to explore the world with confidence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Weave was born from a simple observation: planning a trip shouldn't be overwhelming. 
              In 2020, our founder Sarah Johnson spent countless hours trying to plan a family vacation, 
              juggling multiple websites, spreadsheets, and conflicting advice from travel forums.
            </p>
            <p>
              She thought, "There has to be a better way." That spark of frustration became the inspiration 
              for Weave—a platform that brings together everything you need to plan, book, and experience 
              incredible journeys, all in one place.
            </p>
            <p>
              Today, we're a team of travel enthusiasts, technologists, and dreamers working together to 
              make travel accessible, affordable, and unforgettable for everyone. We believe that the world 
              is meant to be explored, and we're here to help you do just that.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                    <stat.icon className="size-8 text-white" />
                  </div>
                  <p className="text-3xl mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="size-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-4">Simplicity</h3>
                <p className="text-gray-600">
                  We believe travel planning should be simple and intuitive, not a puzzle to solve.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="size-6 text-purple-600" />
                </div>
                <h3 className="text-xl mb-4">Community</h3>
                <p className="text-gray-600">
                  Real travelers sharing real experiences to inspire and help each other explore.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="size-6 text-green-600" />
                </div>
                <h3 className="text-xl mb-4">Excellence</h3>
                <p className="text-gray-600">
                  From our technology to our customer service, we strive for excellence in everything.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
