import { useTheme } from "next-themes";
import Image from "next/image";
import snsData from "../../data/snsData";

const SnsInfo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div
        style={{
          background: `${theme === "dark" ? "#212425" : "#D4C5C8"}`,
        }}
        className="flex flex-wrap p-[30px]  border-[#A6A6A6]  gap-5 md:gap-1 lg:gap-5 rounded-xl justify-center"
      >
        {snsData.map((item) => (
          <div data-aos="flip-left" data-aos-duration="2000">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default SnsInfo;
