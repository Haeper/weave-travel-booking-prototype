import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import TripCarousel, { type TripCarouselRef } from './TripCarousel';

const TripsSection = () => {
  const [selectedTrip, setSelectedTrip] = useState(upcomingTrips[0]);
  const [isInitialMount, setIsInitialMount] = useState(true);

  const carouselRef = useRef<TripCarouselRef>(null);

  useEffect(() => {
    setIsInitialMount(false);
  }, []);

  const handleVideoEnd = () => {
    carouselRef.current?.selectNext();
  };

  return (
    <div className="bg-slate-900 relative h-screen snap-start overflow-hidden">
      {/* Landmark background */}
      <AnimatePresence>
        <motion.div
          key={selectedTrip.id}
          className="absolute inset-0"
          style={{ zIndex: selectedTrip.id }}
          initial={{
            clipPath: isInitialMount
              ? 'circle(150% at 50% 50%)'
              : 'circle(0% at 50% 50%)',
            opacity: 1,
          }}
          animate={{ clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {selectedTrip.video ? (
            <video
              key={selectedTrip.video}
              className="bg-slate-900 absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
            >
              <source src={selectedTrip.video} type="video/mp4" />
            </video>
          ) : (
            <div
              className="bg-slate-900 absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${selectedTrip.image})`,
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full px-6 py-16">
        <motion.div
          className="mx-auto flex h-full max-w-7xl flex-col justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Weave
          </h1>

          <TripCarousel
            ref={carouselRef}
            trips={upcomingTrips}
            onTripSelect={setSelectedTrip}
          />

          {/* Statistics indicators */}
          <motion.div
            className="mx-auto grid max-w-6xl grid-cols-4 gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {tripStatistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mx-auto mb-2 h-px w-12 bg-white/50"></div>
                <div className="text-sm uppercase tracking-wider text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TripsSection;

export const tripStatistics = [
  { value: 'English', label: 'Official language' },
  { value: 'September', label: 'Best time to travel' },
  { value: 'Paris', label: 'Capital' },
  { value: '350w', label: 'Population' },
];

export const upcomingTrips = [
  {
    id: 1,
    title: 'PATAGONIA EXPRESS',
    location: 'Tierra del Fuego, Chile',
    image: '/travels/america.jpg',
    video: 'https://www.pexels.com/download/video/33197886/',
    cardImage: '/travels/america_card.jpg',
    distance: '45.5M',
    elevation: '620M',
    likes: 730,
  },
  {
    id: 2,
    title: 'TOKYO NIGHTS',
    location: 'Shibuya, Tokyo',
    image: '/travels/tokyo.jpg',
    video: 'https://www.pexels.com/download/video/31385032/',
    cardImage: '/travels/tokyo_card.jpg',
    distance: '32.1M',
    elevation: '210M',
    likes: 892,
  },
  {
    id: 3,
    title: 'GREAT WALL TREK',
    location: 'Beijing, China',
    image: '/travels/china.jpg',
    video: 'https://www.pexels.com/download/video/5907129/',
    cardImage: '/travels/china_card.jpg',
    distance: '28.3M',
    elevation: '850M',
    likes: 654,
  },
  {
    id: 4,
    title: 'HIMALAYAN SUNRISE',
    location: 'Ladakh, India',
    image: '/travels/india.jpg',
    video: 'https://www.pexels.com/download/video/29632693/',
    cardImage: '/travels/india_card.jpg',
    distance: '52.7M',
    elevation: '1420M',
    likes: 1024,
  },
  {
    id: 5,
    title: 'FJORD EXPLORER',
    location: 'South Island, New Zealand',
    image: '/travels/new_zealand.jpg',
    video: 'https://www.pexels.com/download/video/5700949/',
    cardImage: '/travels/new_zealand_card.jpg',
    distance: '38.9M',
    elevation: '540M',
    likes: 765,
  },
  {
    id: 6,
    title: 'THAI TEMPLE TRAIL',
    location: 'Chiang Mai, Thailand',
    image: '/travels/thailand.jpg',
    video: 'https://www.pexels.com/download/video/8303084/',
    cardImage: '/travels/thailand_card.jpg',
    distance: '24.6M',
    elevation: '380M',
    likes: 583,
  },
];
