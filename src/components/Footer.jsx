const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {/* Bagian Kontak */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Kontak</h2>
          <p className="flex items-center gap-2">
            📍 <span>Kauman, Batang</span>
          </p>
          <p className="flex items-center gap-2">
            🗺️{" "}
            <a
              href="https://maps.app.goo.gl/QBNWdJg2rP1MmyRc7?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Lihat di Google Maps
            </a>
          </p>
          <p className="flex items-center gap-2">
            📞 <span>0285-3928-56</span>
          </p>
          <p className="flex items-center gap-2">
            ✉️ <span className="text-green-400"><a href="mailto:husadabatang@gmail.com" className="text-green-400 hover:underline">husadabatang@gmail.com</a></span>
          </p>
        </div>

        {/* Bagian About */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Tentang Kami</h2>
          <p className="text-gray-400">
            Koperasi Husada Batang adalah lembaga yang berkomitmen untuk meningkatkan kesejahteraan anggotanya melalui berbagai layanan. Kami menyediakan layanan kesehatan berkualitas, program simpan pinjam dengan bunga kompetitif. Selain itu, kami juga aktif dalam kegiatan sosial dan pemberdayaan ekonomi anggota untuk menciptakan komunitas yang lebih mandiri dan sejahtera.
          </p>
        </div>
      </div>
          <div className='text-center text-gray-400 mt-6'>
        &copy; 2025 KPRI Husada. All Rights Reserved.
      </div>
  </footer>
  );
};

export default Footer;
