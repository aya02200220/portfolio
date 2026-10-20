import { FaNodeJs, FaJava, FaPython, FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { MdOutlineSyncAlt } from "react-icons/md";
import { SiExpress, SiLaravel, SiMongodb, SiGraphql } from "react-icons/si";

const backend = [
  {
    id: "1",
    icon: <FaNodeJs size={29} />,
    title: "Node.js",
  },
  {
    id: "2",
    icon: <SiExpress size={29} />,
    title: "Express.js",
  },
  {
    id: "3",
    icon: <FaPython size={29} />,
    title: "Python",
  },
  {
    id: "4",
    icon: <FaPhp size={29} />,
    title: "PHP",
  },
  {
    id: "10",
    icon: <SiLaravel size={29} />,
    title: "Laravel",
  },
  {
    id: "5",
    icon: <FaJava size={29} />,
    title: "Java",
  },
  {
    id: "6",
    icon: <GrMysql size={29} />,
    title: "MySQL",
  },
  {
    id: "7",
    icon: <SiMongodb size={29} />,
    title: "MongoDB",
  },
  {
    id: "8",
    icon: <SiGraphql size={29} />,
    title: "GraphQL",
  },
  {
    id: "9",
    icon: <MdOutlineSyncAlt size={29} />,
    title: "FTP",
  },
];

export default backend;
