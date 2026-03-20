/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactSection from './components/ContactSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-8 py-16 w-full">
        <Hero />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
