// import { useState } from "react";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// export default function SwitchLanguage() {
//   const [alignment, setAlignment] = useState("left");

//   const handleAlignment = (event, newAlignment) => {
//     setAlignment(newAlignment);
//   };

//   return (
//     <ToggleButtonGroup
//       size="small"
//       value={alignment}
//       exclusive
//       onChange={handleAlignment}
//       className="dark:bg-[#dfd0ed8d]"
//     >
//       <ToggleButton value="left" className="w-[60px] ">
//         {/* <FormatAlignLeftIcon /> */}ENG
//       </ToggleButton>
//       <ToggleButton value="right" className="w-[60px]">
//         {/* <FormatAlignCenterIcon /> */}日本語
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

import Switch from "@mui/joy/Switch";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import WavesRoundedIcon from "@mui/icons-material/WavesRounded";
import { useLanguage } from "../context/LanguageContext";

export default function SwitchLanguage() {
  const { language, toggleLanguage } = useLanguage();
  const isEnglish = language === "en";

  return (
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
  );
}
