import React from 'react';
import KPRI from "../../assets/KPRI.png";

const About = () => {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[400px]">
        {/* Bagian Teks */}
        <div className="flex flex-col justify-center md:pr-8">
          <h1 className="text-4xl font-bold mb-4">
            KPRI Husada Batang
          </h1>
          <p className="text-gray-700 leading-relaxed">
            KPRI Husada Batang adalah sebuah organisasi koperasi yang berfungsi sebagai wadah pemberdayaan ekonomi bagi para anggotanya, 
            yang sebagian besar merupakan pegawai negeri sipil (PNS) dari sektor kesehatan. Didirikan dengan tujuan meningkatkan kesejahteraan anggota, 
            KPRI ini menjalankan berbagai kegiatan usaha seperti simpan pinjam, perdagangan kebutuhan pokok, dan penyediaan layanan finansial lainnya.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            KPRI Husada Batang memiliki visi untuk menjadi koperasi yang mandiri, profesional, dan mampu bersaing di era modern, 
            dengan menekankan prinsip-prinsip koperasi seperti keanggotaan sukarela, pengelolaan demokratis, dan pembagian hasil yang adil.
          </p>
        </div>

        {/* Bagian Gambar */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <img src={KPRI} alt="KPRI Logo" className="w-[300px] object-contain drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
