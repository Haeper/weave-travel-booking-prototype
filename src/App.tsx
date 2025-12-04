import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Journeys from './pages/Journeys';
import JourneyDetails from './pages/JourneyDetails';
import FlightBooking from './pages/FlightBooking';
import HotelBooking from './pages/HotelBooking';
import Packages from './pages/Packages';
import AIPlanner from './pages/AIPlanner';
import About from './pages/About';
import Contact from './pages/Contact';
import Guides from './pages/Guides';
import TrendingDestinations from './pages/TrendingDestinations';
import DestinationDetail from './pages/DestinationDetail';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Initialize from localStorage
    const authStatus = localStorage.getItem('isAuthenticated');
    return authStatus === 'true';
  });

  // Save authentication state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', String(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
            <Route 
              path="/dashboard" 
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />} 
            />
            <Route path="/journeys" element={<Journeys />} />
            <Route path="/journeys/:id" element={<JourneyDetails />} />
            <Route path="/flights" element={<FlightBooking />} />
            <Route path="/hotels" element={<HotelBooking />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/ai-planner" element={<AIPlanner />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/destinations" element={<TrendingDestinations />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
          </Routes>
        </main>
        <Footer />
        <AIChat />
        <Toaster />
      </div>
    </Router>
  );
}