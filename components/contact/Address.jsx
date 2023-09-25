import { useTheme } from "next-themes";
import Image from "next/image";
import addressData from "../../data/addressData";

import { FaMapMarkerAlt } from "react-icons/fa";

const Address = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {addressData.map((item, i) => (
        <div
          key={i}
          style={{ background: `${theme === "dark" ? "#212425" : item?.bg}` }}
          className="flex flex-col p-[30px] md:p-[20px] lg:p-[30px]  border-[#A6A6A6] gap-2 rounded-xl"
        >
          <div className="flex space-x-4 items-center">
            <div className="w-8">
              <Image
                src={item.icon}
                width={30}
                height={20}
                alt="icon"
                className="text-4xl dark:text-white"
              />
            </div>

            <div>
              <p className="text-xl font-semibold dark:text-white">
                {item?.title}:
              </p>
            </div>
          </div>
          <div className="space-y-2 mt-0 lg:mt-4 leading-1">{item?.info}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
