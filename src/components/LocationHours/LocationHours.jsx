import Location from "./Location";
import OperationalHours from "./OperationalHours";

const LocationHours = () => {
  return (
    <section
      id="location-hours"
      className="container mx-auto flex flex-col items-start gap-8 bg-white py-16 md:flex-row md:gap-16 md:py-20"
    >
      <Location />
      <OperationalHours />
    </section>
  );
};

export default LocationHours;