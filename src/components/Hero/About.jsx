import KPRI from "../../assets/KPRI.png";

const About = () => {
  return (
    <section id="about" className="container flex min-h-[80dvh] py-12">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-flow-col-dense md:grid-cols-2">
        {/* Bagian Teks */}
        <div className="order-2 mb-6 flex flex-col justify-center md:order-1 md:pr-8">
          <h1 className="mb-6 text-center text-4xl font-extrabold text-gray-600 md:text-left">
            KPRI Husada Batang
          </h1>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            KPRI Husada Batang adalah sebuah organisasi koperasi yang berfungsi sebagai wadah
            pemberdayaan ekonomi bagi para anggotanya, yang sebagian besar merupakan pegawai negeri
            sipil (PNS) dari sektor kesehatan.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            KPRI Husada Batang memiliki visi untuk menjadi koperasi yang mandiri, profesional, dan
            mampu bersaing di era modern, dengan menekankan prinsip-prinsip koperasi.
          </p>
          <a
            className="mt-6 self-start rounded-md bg-emerald-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-600 active:bg-emerald-700"
            href="#services"
          >
            Lihat Selengkapnya
          </a>
        </div>

        {/* Bagian Gambar */}
        <div className="relative order-1 flex justify-center md:order-2">
          <img
            src={KPRI}
            alt="KPRI Logo"
            className="w-[200px] transform rounded-lg object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105 md:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;