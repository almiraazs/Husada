import React from "react";
import SimpananWajibImg from "../../assets/simpanan-wajib.png";
import PinjamanWajibImg from "../../assets/pinjaman-wajib.png";
import ResikoKreditImg from "../../assets/resiko-kredit.png";
import SimpananAnggotaImg from "../../assets/simpanan-anggota.png";

const Service = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8 max-w-4xl mx-auto">
      {/* Simpanan Wajib */}
      <div className="flex items-center bg-gray-100 rounded-xl shadow-md p-6 space-x-4">
        <img
          src={SimpananWajibImg}
          alt="Simpanan Wajib"
          className="w-20 h-20 object-contain"
        />
        <div className="text-center">
          <h2 className="text-xl font-bold leading-tight">
            <span className="text-green-600">Simpanan</span>
            <br />
            <span className="text-green-600">Wajib</span>
          </h2>
        </div>
      </div>

      {/* Pinjaman Wajib */}
      <div className="flex items-center bg-green-100 rounded-xl shadow-md p-6 space-x-4">
        <img
          src={PinjamanWajibImg}
          alt="Pinjaman Wajib"
          className="w-20 h-20 object-contain"
        />
        <div className="text-center">
          <h2 className="text-xl font-bold leading-tight">
            <span className="text-green-700">Pinjaman</span>
            <br />
            <span className="text-green-700">Wajib</span>
          </h2>
        </div>
      </div>

      {/* Resiko Kredit */}
      <div className="flex items-center bg-black rounded-xl shadow-md p-6 space-x-4">
        <img
          src={ResikoKreditImg}
          alt="Resiko Kredit"
          className="w-20 h-20 object-contain"
        />
        <div className="text-center">
          <h2 className="text-xl font-bold leading-tight">
            <span className="text-white">Resiko</span>
            <br />
            <span className="text-white">Kredit</span>
          </h2>
        </div>
      </div>

      {/* Simpanan Anggota (Pihak 3) */}
      <div className="flex items-center bg-gray-100 rounded-xl shadow-md p-6 space-x-4">
        <img
          src={SimpananAnggotaImg}
          alt="Simpanan Anggota (Pihak 3)"
          className="w-20 h-20 object-contain"
        />
        <div className="text-center">
          <h2 className="text-xl font-bold leading-tight">
            <span className="text-green-600">Simpanan</span>
            <br />
            <span className="text-green-600">Anggota</span>
            <br />
            <span className="text-green-600">(Pihak 3)</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
