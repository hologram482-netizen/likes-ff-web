export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">📊 DAFTAR HARGA</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Free Fire */}
          <div className="card border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-6">🔥 LIKES FREE FIRE</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>220 Likes</span>
                <span className="font-bold text-accent">5K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>1.200 Likes (Proses 5 Hari)</span>
                <span className="font-bold text-accent">20K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>2.300 Likes (Proses 10 Hari)</span>
                <span className="font-bold text-accent">40K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>3.300 Likes (Proses 15 Hari)</span>
                <span className="font-bold text-accent">55K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>6.600 Likes (Proses 31 Hari)</span>
                <span className="font-bold text-accent">100K</span>
              </div>
            </div>
          </div>

          {/* TikTok Likes */}
          <div className="card border-l-4 border-secondary">
            <h3 className="text-2xl font-bold text-secondary mb-6">📱 LIKES TIKTOK</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>100 Likes</span>
                <span className="font-bold text-accent">1.5K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>200 Likes</span>
                <span className="font-bold text-accent">3K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>500 Likes</span>
                <span className="font-bold text-accent">6.5K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>1.250 Likes</span>
                <span className="font-bold text-accent">22K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>5.000 Likes</span>
                <span className="font-bold text-accent">65K</span>
              </div>
            </div>
          </div>

          {/* Followers Instagram */}
          <div className="card border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-6">📸 FOLLOWERS INSTAGRAM</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>200 Followers</span>
                <span className="font-bold text-accent">3.5K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>400 Followers</span>
                <span className="font-bold text-accent">6.5K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>1.000 Followers</span>
                <span className="font-bold text-accent">15K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>5.000 Followers</span>
                <span className="font-bold text-accent">55K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>10.000 Followers</span>
                <span className="font-bold text-accent">100K</span>
              </div>
            </div>
          </div>

          {/* TikTok Followers */}
          <div className="card border-l-4 border-secondary">
            <h3 className="text-2xl font-bold text-secondary mb-6">👥 FOLLOWERS TIKTOK</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>50 Followers</span>
                <span className="font-bold text-accent">5K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>100 Followers</span>
                <span className="font-bold text-accent">10K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>300 Followers</span>
                <span className="font-bold text-accent">20K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>700 Followers</span>
                <span className="font-bold text-accent">35K</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>2.500 Followers</span>
                <span className="font-bold text-accent">100K</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-accent p-6 rounded-lg text-center">
          <p className="text-gray-900 font-bold text-lg">✨ Hanya Server Luar • Server Indo Mahal Cik</p>
          <p className="text-sm text-gray-800 mt-2">Setiap nomor adalah urutan BUKAN jumlah total</p>
        </div>
      </div>
    </section>
  );
}
