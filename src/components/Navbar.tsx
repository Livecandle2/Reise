import { Search } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  return (
    <header className="w-full top-0 sticky z-50 glass-nav border-b border-outline-variant/15">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-2xl font-headline italic text-primary">
          The Editorial Explorer
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300">Tours</a>
          <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300">Destinations</a>
          <a href="#" className="text-primary border-b-2 border-primary pb-1 transition-colors duration-300">About Us</a>
        </nav>

        <div className="flex items-center space-x-6">
          <div className="hidden md:block relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search expeditions..." 
              className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary-container w-64 outline-none"
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-lg font-label text-sm font-bold shadow-lg"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </header>
  );
}
