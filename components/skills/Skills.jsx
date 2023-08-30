import { useTheme } from "next-themes";
import Image from "next/image";
import frontend from "../../data/frontend";
import backend from "../../data/backend";

const Service = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-4 items-stretch">
      <div
        className="flex-1 pt-5 rounded-md "
        style={{
          background: `${theme === "dark" ? "transparent" : "#FEFAFE"}`,
          border: `${theme === "dark" ? "solid 1px #6F676C" : "transparent"}`,
        }}
      >
        <p className="text-center text-2xl font-semibold">Frontend</p>
        <div className="dark:bg-transparent flex flex-wrap justify-center py-4">
          {frontend.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 ml-3  w-[160px] h-[50px]"
            >
              <div className="flex justify-center items-center">
                <Image
                  className="w-8 h-8 object-contain block"
                  src={item.icon}
                  width={10}
                  height={10}
                  alt="icon"
                />
                <div className="space-y-2 ">
                  <h3 className="dark:text-white text-xl ml-2">
                    {item?.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex-1 pt-5 rounded-md "
        style={{
          background: `${theme === "dark" ? "transparent" : "#FEFAFE"}`,
          border: `${theme === "dark" ? "solid 1px #6F676C" : "transparent"}`,
        }}
      >
        <p className="text-center text-2xl font-semibold">Backend</p>
        <div className="dark:bg-transparent flex flex-wrap justify-center py-4">
          {backend.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 ml-3  w-[160px] h-[50px]"
            >
              {" "}
              {/* この行に "flex" と "items-center" を追加しました */}
              <Image
                className="w-8 h-8 object-contain block"
                src={item.icon}
                width={10}
                height={10}
                alt="icon"
              />
              <div className="space-y-2 ">
                <h3 className="dark:text-white text-xl  ml-2">{item?.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
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
