import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function SwitchLanguage() {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={alignment}
      exclusive
      onChange={handleAlignment}
      className="dark:bg-[#d9c0f18d]"
    >
      <ToggleButton value="left" className="w-[60px] ">
        {/* <FormatAlignLeftIcon /> */}ENG
      </ToggleButton>
      <ToggleButton value="right" className="w-[60px]">
        {/* <FormatAlignCenterIcon /> */}日本語
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
