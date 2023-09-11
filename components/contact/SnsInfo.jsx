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
        className="flex flex-wrap p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
      >
        {snsData.map((item) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
          >
            <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default SnsInfo;
