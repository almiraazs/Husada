import React from "react";
import KPRI from "../../assets/KPRI.png";

const About = () => {
  return (
    <div id="about" className="container py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Bagian Teks */}
        <div className="flex flex-col justify-center md:pr-8">
          <h1 className="text-4xl font-extrabold text-gray-600 mb-6 text-center md:text-left">
            KPRI Husada Batang
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            KPRI Husada Batang adalah sebuah organisasi koperasi yang berfungsi
            sebagai wadah pemberdayaan ekonomi bagi para anggotanya, yang
            sebagian besar merupakan pegawai negeri sipil (PNS) dari sektor
            kesehatan.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            KPRI Husada Batang memiliki visi untuk menjadi koperasi yang
            mandiri, profesional, dan mampu bersaing di era modern, dengan
            menekankan prinsip-prinsip koperasi.
          </p>
        </div>

        {/* Bagian Gambar */}
        <div className="relative flex justify-center">
          <img
            src={KPRI}
            alt="KPRI Logo"
            className="w-[300px] object-contain drop-shadow-lg md:w-[400px] rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
