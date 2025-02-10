import { Icon } from "@iconify/react";

const Location = () => {
  return (
    <div
      id="location"
      className="w-full flex-1 rounded-lg border bg-white px-6 py-4 text-gray-700 shadow-md md:w-fit md:px-8 md:py-6"
    >
      <h2 className="w-full py-2 text-left text-xl font-semibold md:text-2xl">Lokasi</h2>
      <div className="flex gap-4">
        <Icon icon="bx:map" width="48" height="48" className="hidden md:block" />
        <div className="mt-2">
          <p>Jl. Jendral Sudirman, Kauman, Kec. Batang, Kabupaten Batang,</p>
          <p>Jawa Tengah, Indonesia</p>
          <a
            href="https://maps.app.goo.gl/QBNWdJg2rP1MmyRc7?g_st=iw"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-500 hover:underline"
          >
            <span className="my-2 flex items-center gap-1">
              Lihat di Google Maps <Icon icon="bx:link-external" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Location;