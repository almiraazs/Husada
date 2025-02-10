import Location from "./Location";
import OperasionalHours from "./OperasionalHours";

const LocationHours = () => {
  return (
    <section
      id="location-hours"
      className="container mx-auto flex flex-col items-start gap-8 bg-white py-16 md:flex-row md:gap-16 md:py-20"
    >
      <Location />
      <OperasionalHours />
    </section>
  );
};

export default LocationHours;