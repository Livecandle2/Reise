import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="mb-20 pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-4 block">
            Connect with our Concierge
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary leading-tight mb-8 -tracking-tight text-balance">
            Let’s Script Your Next <span className="italic font-normal">Odyssey.</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            Whether you're seeking a private coastal retreat or a deep-forest expedition, our curators are ready to tailor your journey down to the final punctuation mark.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1000" 
              alt="Sophisticated travel planner desk" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-lg shadow-xl max-w-xs hidden md:block"
          >
            <p className="font-headline italic text-primary text-lg">
              "The best journeys are those that tell a story before they even begin."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
