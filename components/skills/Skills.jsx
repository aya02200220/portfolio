import { useTheme } from "next-themes";
import frontend from "../../data/frontend";
import backend from "../../data/backend";
import mobile from "../../data/mobile";

const groups = [
  { title: "Frontend", items: frontend },
  { title: "Backend", items: backend },
  { title: "Mobile", items: mobile },
];

const Service = () => {
  const { resolvedTheme: theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
      {groups.map((group) => (
        <div
          key={group.title}
          data-aos="flip-left"
          data-aos-duration="1000"
          className="pt-5 rounded-md"
          style={{
            background: `${theme === "dark" ? "#808080" : "#F1EBEC"}`,
            border: `${theme === "dark" ? "solid 1px #6F676C" : "transparent"}`,
          }}
        >
          <p className="text-center text-2xl font-medium">{group.title}</p>
          <p className="after-line mt-0 lg:mt-0"></p>
          <div className="dark:bg-transparent flex flex-wrap justify-center py-4">
            {group.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-2 ml-3 w-[170px] h-[50px]"
              >
                {item?.icon}
                <h3 className="dark:text-white text-lg md:text-xl leading-tight ml-1 md:ml-2">
                  {item?.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;

// import { useTheme } from "next-themes";
// import Image from "next/image";
// import serviceData from "../../data/serviceData";

// const Service = () => {
//   const { theme, setTheme } = useTheme();

//   return (
//     <>
//       {serviceData.map((item) => (
//         <div
//           className="about-box dark:bg-transparent"
//           key={item.id}
//           style={{
//             background: `${theme === "dark" ? "transparent" : item?.bg}`,
//           }}
//         >
//           <Image
//             className="w-10 h-10 object-contain  block"
//             src={item.icon}
//             width={40}
//             height={40}
//             alt="icon"
//           />

//           <div className="space-y-2 break-all">
//             <h3 className="dark:text-white text-xl font-semibold">
//               {item?.title}
//             </h3>
//             <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
//               {item?.des}
//             </p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Service;
