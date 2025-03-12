import SimpananWajibImg from "../../assets/simpanan-wajib.png";
import PinjamanWajibImg from "../../assets/pinjaman-wajib.png";
import ResikoKreditImg from "../../assets/resiko-kredit.png";
import SimpananAnggotaImg from "../../assets/simpanan-anggota.png";
import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    text: "Simpanan",
    imgSrc: SimpananWajibImg,
    bgClass: "bg-gradient-to-r from-gray-800 to-gray-900",
    textClass: "text-white",
    description:
      "Layanan simpanan kami menawarkan berbagai opsi penyimpanan dana dengan keamanan tinggi dan suku bunga kompetitif.",
  },
  {
    text: "Pinjaman",
    imgSrc: PinjamanWajibImg,
    bgClass: "bg-gradient-to-r from-blue-100 to-blue-300",
    textClass: "text-white",
    description:
      "Kami menyediakan layanan pinjaman dengan bunga rendah dan fleksibilitas pembayaran sesuai kebutuhan Anda.",
  },
  {
    text: "Dana Sosial",
    imgSrc: ResikoKreditImg,
    bgClass: "bg-gradient-to-r from-gray-800 to-gray-900",
    textClass: "text-white",
    description:
      "Dana sosial diperuntukkan bagi anggota yang membutuhkan bantuan keuangan dalam situasi darurat atau sosial.",
  },
  {
    text: "Dana Pendidikan",
    imgSrc: SimpananAnggotaImg,
    bgClass: "bg-gradient-to-r from-blue-100 to-blue-300",
    textClass: "text-white",
    description:
      "Dana pendidikan membantu anggota dalam pembiayaan pendidikan untuk diri sendiri maupun keluarga.",
  },
];

const Service = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="bg-gray-50 px-6 pb-16 pt-24">
      <motion.h2
        className="mb-6 text-center text-4xl font-extrabold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Layanan Kami
        </span>
      </motion.h2>

      <motion.p
        className="mb-12 text-center text-lg text-gray-600 md:w-3/4 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Kami menyediakan berbagai layanan simpanan dan pinjaman yang aman dan
        terpercaya untuk kebutuhan finansial Anda.
      </motion.p>

      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-center p-6 rounded-xl shadow-lg transition-all duration-300 ${service.bgClass} hover:shadow-2xl hover:scale-105`}
            onMouseEnter={() => setHoveredService(service.text)}
            onMouseLeave={() => setHoveredService(null)}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={service.imgSrc}
              alt={service.text}
              className="w-20 h-20 mb-4 transition-transform duration-300"
            />
            <h3 className={`text-xl font-semibold ${service.textClass}`}>
              {service.text}
            </h3>
            {hoveredService === service.text && (
              <motion.div
                className="mt-4 w-full p-4 rounded-lg text-center text-white bg-opacity-80"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm">{service.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
