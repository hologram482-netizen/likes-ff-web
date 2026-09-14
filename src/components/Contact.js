'use client';

import { useState } from 'react';

export default function Contact() {
  const [phone, setPhone] = useState('');

  const contactNumbers = [
    { name: 'WhatsApp 1', number: '083171106710', icon: '📱' },
    { name: 'WhatsApp 2', number: '083825534868', icon: '📱' },
  ];

  const handleContact = (number) => {
    window.open(`https://wa.me/${number.replace(/\D/g, '')}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 gradient-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">📞 HUBUNGI KAMI</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactNumbers.map((contact, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{contact.icon}</div>
                <p className="text-lg mb-2">{contact.name}</p>
                <p className="text-2xl font-bold text-accent mb-4">{contact.number}</p>
                <button 
                  onClick={() => handleContact(contact.number)}
                  className="btn-accent w-full"
                >
                  Chat WhatsApp
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">✉️ By: KYEL 🛍️</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nama Anda" 
                className="w-full p-3 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:bg-opacity-30"
              />
              <input 
                type="text" 
                placeholder="Username/ID" 
                className="w-full p-3 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:bg-opacity-30"
              />
              <select className="w-full p-3 rounded bg-white bg-opacity-20 text-white focus:outline-none focus:bg-opacity-30">
                <option value="" className="text-gray-900">Pilih Service</option>
                <option value="ff" className="text-gray-900">Free Fire Likes</option>
                <option value="tiktok" className="text-gray-900">TikTok Likes</option>
                <option value="ig" className="text-gray-900">Instagram Followers</option>
              </select>
              <button type="submit" className="btn-accent w-full">
                Kirim Pesanan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
