import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-2 bg-surface-container-lowest p-10 rounded-3xl shadow-sm"
      >
        <h2 className="text-3xl font-headline text-primary mb-8">Send an Inquiry</h2>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant">Name</label>
              <input 
                type="text" 
                placeholder="Alexander Sterling" 
                className="w-full border-none bg-surface-container-low rounded-lg p-4 focus:ring-2 focus:ring-primary-container outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant">Email Address</label>
              <input 
                type="email" 
                placeholder="alex@example.com" 
                className="w-full border-none bg-surface-container-low rounded-lg p-4 focus:ring-2 focus:ring-primary-container outline-none"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant">Subject</label>
            <select className="w-full border-none bg-surface-container-low rounded-lg p-4 focus:ring-2 focus:ring-primary-container outline-none appearance-none">
              <option>Custom Tour Curation</option>
              <option>Existing Reservation Inquiry</option>
              <option>Partnership Proposal</option>
              <option>Media & Editorial Request</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant">Message</label>
            <textarea 
              placeholder="Tell us about the landscapes you dream of..." 
              rows={5}
              className="w-full border-none bg-surface-container-low rounded-lg p-4 focus:ring-2 focus:ring-primary-container outline-none resize-none"
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300"
          >
            Deliver Inquiry
          </motion.button>
        </form>
      </motion.div>

      {/* Sidebar Info */}
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-low p-8 rounded-3xl space-y-8"
        >
          <div>
            <h3 className="font-headline text-xl text-primary mb-4">Headquarters</h3>
            <p className="text-on-surface-variant leading-relaxed">
              112 Heritage Square<br />
              Old Town Edinburgh, EH1 1BB<br />
              United Kingdom
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-surface-container-lowest p-2 rounded-full">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-on-surface font-medium">+44 (0) 20 7946 0123</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-surface-container-lowest p-2 rounded-full">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-on-surface font-medium">concierge@editorialexplorer.com</span>
            </div>
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden h-64 relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&q=80&w=600" 
            alt="Stylized map of Edinburgh" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <div className="bg-surface-container-lowest px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary fill-secondary" />
              <span className="font-bold text-xs uppercase tracking-tighter">View on Maps</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
