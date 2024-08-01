import Switch from "@mui/joy/Switch";

import { useLanguage } from "../context/LanguageContext";
import engIcon from "../../public/eng.png";
import jpIcon from "../../public/jp.png";
import Image from "next/image";

export default function SwitchLanguage() {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === "en";

  return (
    <div className="flex items-center justify-center h-full">
      <Image
        src={isEnglish ? engIcon : jpIcon}
        alt={isEnglish ? "English" : "Japanese"}
        onClick={toggleLanguage}
        style={{ cursor: "pointer" }}
        height={40}
      />
      <Switch
        style={{ display: "none" }}
        checked={isEnglish}
        onChange={toggleLanguage}
      />
    </div>
  );
}
