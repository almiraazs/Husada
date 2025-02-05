import { useState } from "react";

export default function OperationalHours() {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <button
        className="w-full text-left text-xl font-semibold text-gray-700 py-2 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Jam Operasional
        <span>{isOpen ? "^" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className="divide-y divide-gray-300 mt-2">
          {hours.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between py-2 text-gray-600 ${item.day === today ? "font-bold text-black" : ""}`}
            >
              <span>{item.day}</span>
              <span>{item.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
