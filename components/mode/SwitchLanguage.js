import Switch from "@mui/joy/Switch";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import WavesRoundedIcon from "@mui/icons-material/WavesRounded";
import { useLanguage } from "../context/LanguageContext";

export default function SwitchLanguage() {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === "en";

  return (
    <div>
      <Switch
        color={isEnglish ? "primary" : "danger"}
        slotProps={{ input: { "aria-label": "Language mode" } }}
        startDecorator={
          <LocalFireDepartmentRoundedIcon
            sx={{ color: isEnglish ? "text.tertiary" : "danger.600" }}
          />
        }
        endDecorator={
          <WavesRoundedIcon
            sx={{ color: isEnglish ? "primary.500" : "text.tertiary" }}
          />
        }
        checked={isEnglish}
        onChange={toggleLanguage}
        sx={{
          "--Switch-thumb-size": "27px",
          "--Switch-track-width": "51px",
          "--Switch-track-height": "31px",
          mr: "12px",
        }}
      />
    </div>
  );
}
