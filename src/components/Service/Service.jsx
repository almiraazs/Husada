import SimpananWajibImg from "../../assets/simpanan-wajib.png";
import PinjamanWajibImg from "../../assets/pinjaman-wajib.png";
import ResikoKreditImg from "../../assets/resiko-kredit.png";
import SimpananAnggotaImg from "../../assets/simpanan-anggota.png";
import { useRef } from "react";
import ServiceAccordion from "./ServiceAccordion";
import ServiceItem from "./ServiceItem";

const Service = () => {
  const simpananRef = useRef();
  const danaSosialRef = useRef();
  const danaPendidikanRef = useRef();
  const pinjamanRef = useRef();

  const handleClick = (ref) => {
    if (ref.current) {
      // Tutup accordion lainnya
      [simpananRef, danaSosialRef, danaPendidikanRef, pinjamanRef].forEach((accordionRef) => {
        if (accordionRef !== ref && accordionRef.current) {
          accordionRef.current.closeAccordion();
        }
      });
      // Switch accordion yang diklik
      ref.current.toggleAccordion();
    }
  };

  return (
    <section id="services" className="bg-zinc-100 px-6 pb-12 pt-24">
      {/* Title */}
      <h2 className="mb-12 text-center text-3xl font-bold">
        <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
          Service
        </span>
      </h2>

      <div className="mb-8 hidden flex-wrap justify-center gap-6 md:flex md:gap-12">
        {/* Simpanan Wajib */}
        <ServiceItem
          onClick={() => handleClick(simpananRef)}
          text="Simpanan"
          imgSrc={SimpananWajibImg}
          bgClass="bg-gradient-to-r from-gray-800 to-gray-900"
          textClass="text-white"
        />

        {/* Pinjaman Wajib */}
        <ServiceItem
          onClick={() => handleClick(pinjamanRef)}
          text="Pinjaman"
          imgSrc={PinjamanWajibImg}
          bgClass="bg-gradient-to-r from-blue-100 to-blue-300"
          textClass="text-blue-500"
        />

        {/* Dana Sosial */}
        <ServiceItem
          onClick={() => handleClick(danaSosialRef)}
          text="Dana Sosial"
          imgSrc={ResikoKreditImg}
          bgClass="bg-gradient-to-r from-gray-800 to-gray-900"
          textClass="text-white"
        />

        {/* Dana Pendidikan */}
        <ServiceItem
          onClick={() => handleClick(danaPendidikanRef)}
          text="Dana Pendidikan"
          imgSrc={SimpananAnggotaImg}
          bgClass="bg-gradient-to-r from-blue-100 to-blue-300"
          textClass="text-blue-500"
        />
      </div>

      <ServiceAccordion
        simpananRef={simpananRef}
        danaSosialRef={danaSosialRef}
        danaPendidikanRef={danaPendidikanRef}
        pinjamanRef={pinjamanRef}
      />
    </section>
  );
};

export default Service;