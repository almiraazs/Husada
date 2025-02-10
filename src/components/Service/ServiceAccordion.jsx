import Simpanan from "./Simpanan";
import Pinjaman from "./Pinjaman";
import DanaSosial from "./DanaSosial";
import DanaPendidikan from "./DanaPendidikan";

const ServiceAccordion = ({ simpananRef, danaSosialRef, danaPendidikanRef, pinjamanRef }) => {
  return (
    <section className="w-full bg-zinc-100">
      <div className="pb-24 md:container">
        <div className="space-y-4">
          <Simpanan ref={simpananRef} />
          <Pinjaman ref={pinjamanRef} />
          <DanaSosial ref={danaSosialRef} />
          <DanaPendidikan ref={danaPendidikanRef} />
        </div>
      </div>
    </section>
  );
};

export default ServiceAccordion;