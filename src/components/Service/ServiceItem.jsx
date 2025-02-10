const ServiceItem = ({ onClick, text, imgSrc, bgClass, textClass }) => {
    return (
      <div
        onClick={onClick}
        className={`flex w-80 transform items-center rounded-lg ${bgClass} p-8 shadow-xl transition duration-300 hover:scale-105 hover:cursor-pointer active:scale-90 active:shadow-2xl`}
      >
        <div className="flex-1">
          <h2 className={`text-shadow transform text-xl font-bold tracking-wide ${textClass}`}>
            <span>{text}</span>
          </h2>
        </div>
        <img src={imgSrc} alt={text} className="h-20 w-20 object-cover" />
      </div>
    );
  };
  
  export default ServiceItem;