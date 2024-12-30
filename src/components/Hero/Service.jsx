import React from "react";
import SimpananWajibImg from "../../assets/simpanan-wajib.png";
import PinjamanWajibImg from "../../assets/pinjaman-wajib.png";
import ResikoKreditImg from "../../assets/resiko-kredit.png";
import SimpananAnggotaImg from "../../assets/simpanan-anggota.png";

const Service = () => {
  return (
    <div id="services" className="p-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-green-300">
          Our Services
        </span>
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Simpanan Wajib */}
        <div className="flex items-center bg-gradient-to-r from-green-100 to-green-300 rounded-lg shadow-xl p-8 w-80 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-green-700">
              <span>Simpanan</span>
              <br />
              <span>Wajib</span>
            </h2>
          </div>
          <img
            src={SimpananWajibImg}
            alt="Simpanan Wajib"
            className="w-20 h-20 object-cover"
          />
        </div>

        {/* Pinjaman Wajib */}
        <div className="flex items-center bg-gradient-to-r from-yellow-100 to-yellow-300 rounded-lg shadow-xl p-8 w-80 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-yellow-700">
              <span>Pinjaman</span>
              <br />
              <span>Wajib</span>
            </h2>
          </div>
          <img
            src={PinjamanWajibImg}
            alt="Pinjaman Wajib"
            className="w-20 h-20 object-cover"
          />
        </div>

        {/* Resiko Kredit */}
        <div className="flex items-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-xl p-8 w-80 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">
              <span>Resiko</span>
              <br />
              <span>Kredit</span>
            </h2>
          </div>
          <img
            src={ResikoKreditImg}
            alt="Resiko Kredit"
            className="w-20 h-20 object-cover"
          />
        </div>

        {/* Simpanan Anggota */}
        <div className="flex items-center bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-xl p-8 w-80 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-blue-400">
              <span>Simpanan</span>
              <br />
              <span>Anggota (Pihak 3)</span>
            </h2>
          </div>
          <img
            src={SimpananAnggotaImg}
            alt="Simpanan Anggota (Pihak 3)"
            className="w-20 h-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
