import React from "react";

const Time = () => {
  const schedule = [
    { day: "Monday", time: "08:00 - 16:00", active: true },
    { day: "Tuesday", time: "08:00 - 16:00", active: true },
    { day: "Wednesday", time: "08:00 - 16:00", active: false },
    { day: "Thursday", time: "08:00 - 16:00", active: false },
    { day: "Friday", time: "08:00 - 16:00", active: true },
    { day: "Saturday", time: "08:00 - 16:00", active: false },
    { day: "Sunday", time: "Day Off", active: false },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg mt-10">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-600">
          Jam Operasional 
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg ${
              item.active ? "border-yellow-400" : "border-gray-200"
            }`}
          >
            <div className="text-sm text-gray-500 text-center">{item.day}</div>
            <div className="flex flex-col items-center justify-center my-2 space-y-2">
              {/* Icon for active or day off */}
              <img
                src={
                  item.active
                    ? "https://img.icons8.com/ios-filled/50/000000/clock--v1.png"
                    : "https://img.icons8.com/ios-filled/50/000000/clock--v1.png"
                }
                alt={item.active ? "Clock Icon" : "Clock Icon"}
                className="w-8 h-8"
              />
              {/* Displaying the time */}
              {item.active && (
                <div className="text-yellow-600 font-bold">{item.time}</div>
              )}
              {item.time === "Day Off" && (
                <div className="text-gray-400 font-medium">{item.time}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Time;
