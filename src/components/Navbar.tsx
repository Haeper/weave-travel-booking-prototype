import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Plane, Menu, User, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet';
import { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export default function Navbar({ isAuthenticated, setIsAuthenticated }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check if we're on the Guides page, Auth page, or Dashboard page
  const isGuidesPage = location.pathname === '/guides';
  const isDarkTextPage = location.pathname === '/guides' || location.pathname === '/auth' || location.pathname === '/dashboard' || location.pathname === '/ai-planner' || location.pathname === '/contact';

  const handleLogout = () => {
    console.log('Logging out...');
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setDropdownOpen(false);
    navigate('/');
  };

  const handleDashboardClick = () => {
    console.log('Navigating to dashboard...');
    setDropdownOpen(false);
    navigate('/dashboard');
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
    { to: '/', label: 'Home' },
    { to: '/flights', label: 'Flights' },
    { to: '/hotels', label: 'Hotels' },
    { to: '/packages', label: 'Packages' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/journeys', label: 'Community Journeys' },
    { to: '/guides', label: 'Local Guides' },
    { to: '/ai-planner', label: 'AI Planner' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-full px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg shadow-lg">
                <Plane className="size-6 text-white" />
              </div>
              <span className={isDarkTextPage ? "text-black drop-shadow-lg" : "text-white drop-shadow-lg"}>Weave</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 7).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
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
                  onClick={() => navigate('/auth')} 
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
                        key={link.to}
                        to={link.to}
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