import { useState } from "react";
import { Icon } from "@iconify/react";

const OperationalHours = () => {
  const [isOpen, setIsOpen] = useState(true);
  const hours = [
    { day: "Senin", time: "08.00 - 14.00" },
    { day: "Selasa", time: "08.00 - 14.00" },
    { day: "Rabu", time: "08.00 - 14.00" },
    { day: "Kamis", time: "08.00 - 14.00" },
    { day: "Jumat", time: "08.00 - 14.00" },
    { day: "Sabtu", time: "08.00 - 14.00" },
    { day: "Minggu", time: "08.00 - 14.00" },
  ];

  const today = new Date().toLocaleDateString("id-ID", { weekday: "long" });

  return (
    <div
      id="operational-hours"
      className="w-full flex-1 rounded-lg border bg-white px-6 py-4 shadow-md md:w-fit md:px-8 md:py-6"
    >
      <button
        className="mr-4 flex w-full items-center justify-between py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-left text-xl font-semibold text-gray-700 md:text-2xl">
          Jam Operasional
        </h2>
        <Icon icon={isOpen ? "bx:chevron-up" : "bx:chevron-down"} width={36} height={36} />
      </button>
      <div
        className={`transition-max-height duration-500 ease-out ${isOpen ? "max-h-96" : "max-h-0 overflow-hidden"}`}
      >
        <ul
          className={`mt-2 divide-y divide-gray-300 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          {hours.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between py-2 text-gray-600 ${
                item.day === today ? "font-bold text-black" : ""
              }`}
            >
              <span>{item.day}</span>
              <span>{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OperationalHours;