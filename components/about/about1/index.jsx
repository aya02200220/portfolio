import Image from "next/image";
import PersonalInfo from "./PersonalInfo";
import { useTheme } from "next-themes";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const { language } = useLanguage();

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

          {language === "ja" ? (
            <>
              <p className="text-gray-lite dark:text-color-910 leading-5 text-[16px] pb-2">
                👋 Hello! I&apos;m a software engineer based in Japan.
              </p>
              <p className="text-gray-lite dark:text-color-910 leading-5 text-[16px] pb-2">
                📚 I studied Web and Mobile App Development at a college in
                Vancouver, Canada, building modern applications with React.js
                and Node.js. Today I work as a systems engineer in Japan,
                developing Android (Jetpack Compose) and iOS (Swift) apps along
                with backend systems in Python, PHP, and SQL. Handling
                everything from requirements definition to development has laid
                the foundation for user-centric development.
              </p>
              <p className="text-gray-lite dark:text-color-910 leading-5 text-[16px] pb-2">
                🌎 In the world of technology, learning never ends! I actively
                engage with new technologies and tools that interest me,
                continuously striving for personal growth.
              </p>
              <p className="text-gray-lite dark:text-color-910 leading-5 text-[16px] pb-2">
                🕹️ For me, coding is not just a job but also a joy, where I get
                to unleash my creativity and enjoy the process of trial and
                error 🤗
              </p>
              <p className="text-gray-lite leading-4 mt-2.5 dark:text-color-910 text-[12px]">
                Hobbies: Manga (shonen manga fan)・Anime (usually prefer the
                original manga)・Gaming (better at watching)・Movies
                (SF/Suspense/Action/Harry Potter)・Disney (both watching and
                visiting)・Cafe
                hopping・Crab・Sunshine・Snowboarding・Technological
                advancements (thrilling and exciting)
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-lite  dark:text-color-910 leading-5.5 text-[15px] pb-1">
                👋{" "}
                こんにちは！私は日本を拠点に活動しているソフトウェアエンジニアです。
              </p>
              <p className="text-gray-lite  dark:text-color-910 leading-5.5 text-[15px] pb-1">
                📚{" "}
                カナダ・バンクーバーのカレッジでWeb・モバイルアプリ開発を専攻し、React.jsやNode.jsを使ったモダンなアプリケーション開発を学びました。現在は日本でSEとして、Jetpack Composeを使ったAndroidアプリやSwiftでのiOSアプリ、Python・PHP・SQLでのバックエンド開発に携わっています。要件定義から開発までを一貫して担当してきた経験は、ユーザー目線での開発に活かす基盤となっています。
              </p>
              <p className="text-gray-lite  dark:text-color-910 leading-5.5 text-[15px] pb-1">
                🌎{" "}
                テクノロジーの世界では学びが終わることはありません！興味のある技術やツールに積極的に取り組み、常に自己成長を目指す努力を継続しています。
              </p>
              <p className="text-gray-lite  dark:text-color-910 leading-5.5 text-[15px] pb-1">
                🕹️{" "}
                私にとってコーディングは単なる仕事ではなく、創造性を発揮しながら試行錯誤を重ねる楽しみでもあります🤗
              </p>
              <p className="text-gray-lite leading-4 mt-2.5 dark:text-color-910 text-[12px]">
                趣味：マンガ（少年漫画派）・アニメ（基本原作漫画の方が好き）・ゲーム（観る方が得意）・映画（SF/サスペンス/アクション/ハリポタ）・DIsney（観るのも行くのも）・カフェホッピング・カニ・太陽・スノーボード・テクノロジーの進化（ドキドキワクワク）
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
