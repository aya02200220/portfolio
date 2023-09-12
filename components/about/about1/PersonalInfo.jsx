import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegCalendarAlt,
  FaLinkedinIn,
} from "react-icons/fa";

const PersonalInfo = () => {
  const personalContent = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      iconColor: "text-oriange-lite",
      name: "Location",
      meta: <>Vancouver B.C, Canada</>,
    },
  ];

  return (
    <>
      {personalContent.map((item) => (
        <div className="flex w-full" key={item.id}>
          <span
            className={`${item.iconColor} dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-`}
          >
            {item.icon}
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-lite dark:text-color-910">
              {item.name}
            </p>
            <h6 className="font-medium dark:text-white">{item.meta}</h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
