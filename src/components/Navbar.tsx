import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Plane, Menu, User, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check if we're on the Home page
  const isHomePage = pathname === '/';

  // Default hidden on home page, visible on other pages
  const [isVisible, setIsVisible] = useState(!isHomePage);

  // Check if we're on the Guides page, Auth page, or Dashboard page
  const isGuidesPage = pathname === '/guides';
  const isDarkTextPage = pathname === '/guides' || pathname === '/auth' || pathname === '/dashboard' || pathname === '/ai-planner' || pathname === '/contact';

  // Handle scroll visibility on home page
  useEffect(() => {
    if (!isHomePage) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Show navbar after scrolling past second screen (TripsSection + ParallaxHero)
      setIsVisible(scrollY > viewportHeight * 2.8);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleLogout = () => {
    console.log('Logging out...');
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setDropdownOpen(false);
    router.push('/');
  };

  const handleDashboardClick = () => {
    console.log('Navigating to dashboard...');
    setDropdownOpen(false);
    router.push('/dashboard');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/flights', label: 'Flights' },
    { href: '/hotels', label: 'Hotels' },
    { href: '/packages', label: 'Packages' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/journeys', label: 'Community Journeys' },
    { href: '/guides', label: 'Local Guides' },
    { href: '/ai-planner', label: 'AI Planner' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-full px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg shadow-lg">
                <Plane className="size-6 text-white" />
              </div>
              <span className={isDarkTextPage ? "text-black drop-shadow-lg" : "text-white drop-shadow-lg"}>Weave</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 7).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isDarkTextPage
                    ? "text-gray-700 hover:text-black transition-all duration-300 hover:scale-105"
                    : "text-white/90 hover:text-white transition-all duration-300 hover:scale-105 drop-shadow-md"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <div className="relative" ref={dropdownRef}>
                  <Button 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    variant="ghost" 
                    size="sm" 
                    className={isDarkTextPage
                      ? "gap-2 text-black bg-gray-100 hover:bg-gray-200 transition-all duration-300 border border-gray-300"
                      : "gap-2 text-white bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30"
                    }
                  >
                    <User className="size-4" />
                    <span className="hidden sm:inline">Profile</span>
                    <ChevronDown className={`size-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </Button>
                  
                  {/* Custom Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[100]">
                      <button
                        onClick={handleDashboardClick}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <LayoutDashboard className="size-4" />
                        Dashboard
                      </button>
                      <div className="h-px bg-gray-200 my-1" />
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="size-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button
                  onClick={() => router.push('/auth')}
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Sign In
                </Button>
              )}

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={isDarkTextPage 
                      ? "lg:hidden text-black hover:bg-gray-100" 
                      : "lg:hidden text-white hover:bg-white/20"
                    }
                  >
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors p-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                    
                    {/* Mobile Auth Section */}
                    {isAuthenticated && (
                      <>
                        <div className="h-px bg-gray-200 my-2" />
                        <button
                          onClick={handleDashboardClick}
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors p-2 text-left"
                        >
                          <LayoutDashboard className="size-4" />
                          Dashboard
                        </button>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors p-2 text-left"
                        >
                          <LogOut className="size-4" />
                          Logout
                        </button>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}