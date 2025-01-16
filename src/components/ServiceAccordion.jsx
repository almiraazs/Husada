import React from "react";
import Simpanan from "./Service/Simpanan";
import Pinjaman from "./Service/Pinjaman";
import DanaSosial from "./Service/DanaSosial";
import DanaPendidikan from "./Service/DanaPendidikan";

const ServiceAccordion = () => {
    return (
        <div className="max-w-3x1 mx-auto my-10">
            <h2 className="text-2x1 font-bold text-center mb-6">Layanan Kami</h2>
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