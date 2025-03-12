const Location = () => {
  return (
    <div
      id="location"
      className="w-full flex-1 rounded-lg border bg-white px-6 py-4 text-gray-700 shadow-md md:w-fit md:px-8 md:py-6"
    >
      <h2 className="w-full py-2 text-left text-xl font-semibold md:text-2xl">Lokasi</h2>
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.867529811053!2d109.723755!3d-6.90644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70249283ec80ff%3A0x30aa7eca4ce90e3f!2sKoperasi%20%22Husada%22!5e0!3m2!1sen!2suk!4v1741748526220!5m2!1sen!2suk"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
