import Switch from "@mui/joy/Switch";

import { useLanguage } from "../context/LanguageContext";
import engIcon from "../../public/eng.png";
import jpIcon from "../../public/jp.png";
import Image from "next/image";

export default function SwitchLanguage() {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === "en";

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-[40px]">
      <Image
        src={isEnglish ? engIcon : jpIcon}
        alt={isEnglish ? "English" : "Japanese"}
        onClick={toggleLanguage}
        style={{ cursor: "pointer" }}
        height={40}
      />
      <p
        className="text-[10px] text-[#333] absolute top-0 left-0 w-[40px] h-full flex items-center justify-center pointer-events-none font-bold bg-[#ffffff67] rounded-full
        "
        style={{ zIndex: 1 }}
      >
        {language === "ja" ? "日本語" : "English"}
      </p>

      <Switch
        style={{ display: "none" }}
        checked={isEnglish}
        onChange={toggleLanguage}
      />
    </div>
  );
}
