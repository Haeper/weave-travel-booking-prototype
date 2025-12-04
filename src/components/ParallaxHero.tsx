import { useEffect, useRef, useState } from 'react';

const ParallaxHero = () => {
  const [mountainOffset, setMountainOffset] = useState(500);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const stickyStart = 0; // When sticky container hits top of viewport

      // Calculate how far we've scrolled into the sticky section
      // rect.top will be 0 when sticky, negative when scrolling past
      if (rect.top <= stickyStart && rect.bottom > window.innerHeight) {
        // We're in the sticky zone - move the mountain up
        const scrolledIntoSticky = -rect.top;
        const newOffset = Math.max(0, 500 - scrolledIntoSticky * 0.6);
        setMountainOffset(newOffset);
      } else if (rect.top > stickyStart) {
        // Before sticky zone - mountain at initial position
        setMountainOffset(500);
      } else {
        // After sticky zone - mountain fully up
        setMountainOffset(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Outer container with extra height for scroll distance
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky inner container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/home/background.jpg)',
          }}
        />

        {/* Text layer */}
        <div
          className="absolute inset-x-0 top-20 w-[80%] mx-auto flex items-center justify-center"
        >
          <img
            src="/home/text.png"
            alt=""
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Mountain layer - moves up during sticky scroll */}
        <div
          className="absolute inset-x-0 bottom-0 h-full pointer-events-none"
          style={{
            backgroundImage: 'url(/home/mountain.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
            transform: `translateY(${mountainOffset}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxHero;
