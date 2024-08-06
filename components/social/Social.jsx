import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "mailto:aya.dev.canada@gmail.com",
      icon: <FiMail />,
      iconClass: "text-[#4A68DA]",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/aya-ishimura-8724a6247/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
    {
      id: 3,
      link: "https://github.com/aya02200220",
      icon: <BsGithub size={24} />,
      iconClass: "text-[#111]",
    },
    {
      id: 5,
      link: "https://www.facebook.com/aya.ishimura0220",
      icon: <FaFacebookF />,
      iconClass: "text-[#1773EA]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
