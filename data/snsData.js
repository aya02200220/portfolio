import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

module.exports = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/aya-ishimura-8724a6247/",
    icon: <FaLinkedinIn />,
    iconClass: "text-[#0072b1]",
  },
  {
    id: 2,
    link: "https://github.com/aya02200220",
    icon: <BsGithub size={24} />,
    iconClass: "text-[#111]",
  },
  {
    id: 3,
    link: "https://dev.to/aya02200220",
    icon: <FaDev size={24} />,
    iconClass: "text-[#333]",
  },
  {
    id: 4,
    link: "https://www.facebook.com/aya.ishimura0220",
    icon: <FaFacebookF />,
    iconClass: "text-[#1773EA]",
  },
];
