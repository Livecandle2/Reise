import { motion } from 'motion/react';

const FAQS = [
  {
    question: "How long does custom curation take?",
    answer: "Typically, our concierge provides a first draft of your itinerary within 48 to 72 hours of your initial inquiry."
  },
  {
    question: "Do you offer solo traveler packages?",
    answer: "Yes, we specialize in 'The Introspective Odyssey,' designed specifically for those navigating the world independently."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Bookings can be rescheduled with 30 days' notice. For full cancellations, please refer to our luxury protection tier."
  },
  {
    question: "Are local guides part of every tour?",
    answer: "Every Editorial Explorer journey is led by a local storyteller—historians, naturalists, or artists from the region."
  }
];

export default function FAQ() {
  return (
    <section className="mt-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-headline text-primary mb-4">Common Enquiries</h2>
        <div className="w-24 h-1 bg-secondary mx-auto opacity-30"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {FAQS.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <h4 className="font-headline text-xl text-primary">{faq.question}</h4>
            <p className="text-on-surface-variant leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
