import React from "react";
import Simpanan from "./Service/Simpanan";
import Pinjaman from "./Service/Pinjaman";
import DanaSosial from "./Service/DanaSosial";
import DanaPendidikan from "./Service/DanaPendidikan";

const ServiceAccordion = () => {
  return (
    <div className="max-w-3x1 mx-auto my-10">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-600">
          Our Services
        </span>
      </h1>
      <div className="space-y-4">
        <Simpanan />
        <Pinjaman />
        <DanaSosial />
        <DanaPendidikan />
      </div>
    </div>
  );
};

export default ServiceAccordion;
