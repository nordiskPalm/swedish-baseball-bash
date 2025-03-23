
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Bell } from 'lucide-react';
import Button from './Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if user is logged in (mock implementation)
  const isLoggedIn = false;
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
  ];
  
  const authenticatedLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'My Leagues', path: '/my-leagues' },
    { name: 'Players', path: '/players' },
  ];
  
  const links = isLoggedIn ? authenticatedLinks : navLinks;
  
  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 px-6 md:px-10',
        isScrolled ? 'py-2 glass-effect shadow-sm' : 'py-4 bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold text-primary transition-all duration-300"
        >
          Svenska <span className="text-foreground">Baseball</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={cn(
                    'link-hover font-medium',
                    location.pathname === link.path ? 'text-primary' : 'text-foreground'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-full hover:bg-secondary transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
              </button>
              <Link to="/profile" className="p-1 rounded-full border-2 border-primary">
                <User size={22} />
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" size="sm">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-transform duration-300 transform md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <ul className="space-y-6 text-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={cn(
                    'text-lg font-medium link-hover',
                    location.pathname === link.path ? 'text-primary' : 'text-foreground'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto space-y-4">
            {!isLoggedIn && (
              <>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" fullWidth>Log In</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button fullWidth>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
