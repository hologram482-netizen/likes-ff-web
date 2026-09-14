'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="gradient-primary text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-primary">
            FF
          </div>
          <h1 className="text-2xl font-bold">LIKES FF</h1>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-accent transition">Services</a>
          <a href="#pricing" className="hover:text-accent transition">Harga</a>
          <a href="#contact" className="hover:text-accent transition">Kontak</a>
          <button className="btn-accent">Order Sekarang</button>
        </div>

        <button 
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary p-4 space-y-4">
          <a href="#services" className="block hover:text-accent">Services</a>
          <a href="#pricing" className="block hover:text-accent">Harga</a>
          <a href="#contact" className="block hover:text-accent">Kontak</a>
          <button className="w-full btn-accent">Order Sekarang</button>
        </div>
      )}
    </header>
  );
}
