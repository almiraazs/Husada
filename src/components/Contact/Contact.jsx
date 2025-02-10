import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 pb-8 pt-20 text-white">
      <div className="container flex flex-col gap-y-8 px-6 md:flex-row">
        <div className="flex flex-1 flex-col gap-y-2 text-gray-400">
          <h2 className="text-lg text-white">Contact</h2>
          <div className="flex items-center gap-x-2">
            <Icon icon="bx:phone" />
            <span className="font-semibold">Telepon</span>
            <a href="tel:+62285392856" className="underline underline-offset-4">
              (0285) 3928-56
            </a>
          </div>
          <div className="flex items-center gap-x-2">
            <Icon icon="bx:envelope" />
            <span className="font-semibold">Email</span>
            <a href="mailto:husadabatang@gmail.com" className="underline underline-offset-4">
              husadabatang@gmail.com
            </a>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="mb-2 text-lg">About</h2>
          <p className="leading-relaxed text-gray-400">
            Koperasi Husada Batang adalah lembaga yang berkomitmen untuk meningkatkan kesejahteraan
            anggotanya melalui berbagai layanan. Kami menyediakan layanan kesehatan berkualitas,
            program simpan pinjam dengan bunga kompetitif. Selain itu, kami juga aktif dalam
            kegiatan sosial dan pemberdayaan ekonomi anggota untuk menciptakan komunitas yang lebih
            mandiri dan sejahtera.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;