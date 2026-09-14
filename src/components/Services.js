export default function Services() {
  const services = [
    { name: 'Likes Free Fire', icon: '🔥', desc: 'Dapatkan likes suntik untuk Free Fire' },
    { name: 'Likes TikTok', icon: '📱', desc: 'Tingkatkan engagement video TikTok Anda' },
    { name: 'Followers Instagram', icon: '📸', desc: 'Tambah followers & likes Instagram' },
    { name: 'Views TikTok', icon: '👁️', desc: 'Boost views untuk konten TikTok' },
    { name: 'Followers TikTok', icon: '⭐', desc: 'Tambah followers TikTok real & cepat' },
    { name: 'Reaksi Channel', icon: '😊', desc: 'Tambah reaksi di video & channel Anda' },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="card text-center hover:border-l-4 border-primary">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-secondary mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <button className="btn-primary">Lihat Harga</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
