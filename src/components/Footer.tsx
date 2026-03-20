import { Globe, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-outline-variant/15 bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-6">
          <div className="text-lg font-headline italic text-primary">The Editorial Explorer</div>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Crafting narratives through travel. Every itinerary is a new chapter in your life's story.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-primary mb-6">Discovery</h5>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100">Destinations</a></li>
            <li><a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100">Private Tours</a></li>
            <li><a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100">The Journal</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-primary mb-6">Company</h5>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100">Contact Us</a></li>
            <li><a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100">Newsletter Signup</a></li>
            <li><a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100">Our Story</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-primary mb-6">Legal</h5>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100">Privacy Policy</a></li>
            <li><a href="#" className="text-on-surface-variant hover:underline decoration-secondary transition-opacity opacity-80 hover:opacity-100">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-xs">© 2024 The Editorial Explorer. All rights reserved.</p>
        <div className="flex gap-6">
          <Globe className="w-5 h-5 text-outline cursor-pointer hover:text-primary transition-colors" />
          <Instagram className="w-5 h-5 text-outline cursor-pointer hover:text-primary transition-colors" />
          <Mail className="w-5 h-5 text-outline cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
    </footer>
  );
}
