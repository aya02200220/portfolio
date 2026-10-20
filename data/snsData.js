import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const snsData = [
  {
    id: 1,
    name: "LinkedIn",
    handle: "Aya Ishimura",
    link: "https://www.linkedin.com/in/aya-ishimura-8724a6247/",
    icon: <FaLinkedinIn />,
    iconClass: "text-[#0072b1]",
  },
  {
    id: 2,
    name: "GitHub",
    handle: "aya02200220",
    link: "https://github.com/aya02200220",
    icon: <BsGithub size={24} />,
    iconClass: "text-[#111]",
  },
  {
    id: 3,
    name: "DEV",
    handle: "aya02200220",
    link: "https://dev.to/aya02200220",
    icon: <FaDev size={24} />,
    iconClass: "text-[#333]",
  },
  {
    id: 4,
    name: "Facebook",
    handle: "aya.ishimura0220",
    link: "https://www.facebook.com/aya.ishimura0220",
    icon: <FaFacebookF />,
    iconClass: "text-[#1773EA]",
  },
];

export default snsData;
