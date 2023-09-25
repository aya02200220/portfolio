import Image from "next/image";
import PersonalInfo from "./PersonalInfo";
import { useTheme } from "next-themes";

const index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
      {/* start .col and routePath image left */}
      <div className="col-span-12 md:col-span-4 flex justify-center flex-col items-center">
        {/* personal images for routePath page  */}
        <Image
          className="w-full md:w-[300px] md:h-[350px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
          src={
            theme === "dark"
              ? "/images/about/about.png"
              : "/images/about/about2.png"
          }
          width={300}
          height={300}
          alt="routePath"
        />

        <a
          href="/images/AyaIshimura-CV.pdf"
          target="_blank"
          className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
        >
          <img src="/images/download.png" alt="icon" className="mr-2" />
          Download CV
        </a>
      </div>
      {/* End .col and routePath image left */}

      {/* Start about right content */}
      <div className="col-span-12 md:col-span-8 space-y-2.5">
        <div className=" md:mr-12 xl:mr-16">
          <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
            Who am i?
          </h3>

          <p className="text-gray-lite  dark:text-color-910 leading-7 text-[17px]">
            👋 Hello there! I&apos;m Aya, a full stack developer based in
            Vancouver, BC. <br />A passionate and agile Full Stack Web Developer
            with a love for crafting elegant solutions to complex problems.
            Coding isn&apos;t just a job for me; it&apos;s a medium through
            which I strive for excellence and innovation.
          </p>
          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910 text-[17px]">
            Learning never stops in tech, and I'm committed to continuously
            expanding my skillset. I'm a voracious reader, an experimental
            coder, and a proactive community member who’s always looking for
            opportunities to grow and help others grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
