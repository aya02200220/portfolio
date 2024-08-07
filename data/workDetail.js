import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import {
  FaFigma,
  FaSass,
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

module.exports = {
  ja: [
    {
      id: "1",
      tag: "Web application",
      title: "Blog Site",
      img: "/images/work_images/1.png",
      imgSmall: "/images/work_images/small/1.png",
      bg: "#D5C5C8",
      client: "",
      languages: "MongoDB, Express, React, Node.js, MUI, Cloudinary",
      link: "https://noir-rose.vercel.app/",
      gitlink: "https://github.com/aya02200220/blog-app",
      linkText: "NoirRose Diaries",
      description:
        "NoirRose is a modern blogging platform built with MERN Stack (MongoDB, Express, React, and Node.js). The application allows both guests and registered users to read blog posts. For additional features like posting blogs or adding to favorites, signing up is required.",
      icon: [
        <SiMongodb />,
        <SiExpress />,
        <FaReact />,
        <FaNodeJs />,
        <SiMui />,
        <FaCss3Alt />,
      ],
      description2: [
        {
          img: "/images/work_images/1/1.png",
          title: "Explore Posts on Home",
          content:
            "The 'Home' menu allows you to browse through posts from all registered users, presenting a diverse range of articles. Discover new content and gain insights from different perspectives, all in one place.",
        },
        {
          img: "/images/work_images/1/2-2.png",
          title: "Create a Reading List",
          content:
            "Stumble upon an interesting article? Don’t worry about losing it. With our 'Reading List' feature, you can effortlessly save posts you want to read later. Organize your reads and keep them just a click away.",
        },
        {
          img: "/images/work_images/1/6-2.png",
          title: "Interact with Comments",
          content:
            "Logged-in users can leave comments on any articles they like. Not only can users post comments, but they can also edit or delete their own comments after posting, providing a flexible way to express and refine their thoughts and opinions.",
        },
        {
          img: "/images/work_images/1/3.png",
          title: "Follow Your Favorite Authors",
          content:
            "Discover an author whose work you enjoy? You can easily view all posts from your favorite authors. Stay updated on their latest content and never miss an article from the writers you love.",
        },
        {
          img: "/images/work_images/1/4-2.png",
          title: "Manage Your Account",
          content:
            "View your post history and update your email, password, bio, and avatar at any time from 'My Account'.",
        },
        {
          img: "/images/work_images/1/5-2.png",
          title: "Forgot Your Password?",
          content:
            "Easily reset it by clicking on 'Forgot Password?'.\nA link to reset your password will be sent to your registered email.\nThis link is valid for one hour.",
        },
      ],
    },
    {
      id: "8",
      tag: "E-commerce",
      title: "New-MangaMart",
      img: "/images/work_images/8.png",
      imgSmall: "/images/work_images/small/8.png",
      bg: "#F1EBEC",
      client: "",
      languages: "Next.js,TypeScript,Tailwind,MUI",
      link: "https://manga-mart.vercel.app/",
      gitlink: "https://github.com/aya02200220/Manga-mart-e-commerce",
      linkText: "New-Manga-mart",
      description:
        "I revamped 'Manga Mart,' initially a simple JavaScript, HTML, and CSS project into a Next.js-based e-commerce site, enhancing it with modern features like Google login, a favorites system, and a cart function. This upgrade significantly modernizes the UI/UX, showcasing my growth in web development.",
      icon: [
        <FaReact />,
        <TbBrandNextjs />,
        <SiTypescript />,
        <SiTailwindcss />,
        <SiMui />,
        <FaCss3Alt />,
      ],
      description2: [
        {
          img: "/images/work_images/8/1.png",
          title: "Discover Manga on Home Page",
          content:
            "Manga Mart's homepage displays a diverse manga collection under the default 'ALL' category. Users can filter manga by genre using genre buttons, customizing their browsing experience effortlessly.",
        },
        {
          img: "/images/work_images/8/1-2.png",
          title: "Search Manga by Title or Description",
          content:
            "Manga Mart's search feature in the header simplifies manga discovery by enabling users to find titles or explore content based on keywords in the title or description.",
        },
        {
          img: "/images/work_images/8/2.png",
          title: "Explore Manga Details",
          content:
            "Clicking on a manga title reveals its synopsis, storyline, and characters. Users can easily add the manga to favorites or the shopping cart directly from this screen, streamlining their browsing and purchasing experience.",
        },
        {
          img: "/images/work_images/8/3.png",
          title: "Manage Cart Items",
          content:
            "The Cart page allows users to modify quantities, remove items individually or in bulk, and proceed to the checkout screen seamlessly. With intuitive controls, users can adjust their cart contents effortlessly, ensuring a smooth and efficient shopping experience.",
        },
        {
          img: "/images/work_images/8/4.png",
          title: "Manage Favorites",
          content:
            "In Favorites, users can add/remove items to/from their cart and delete favorites in bulk. This simplifies curating favorite manga, improving browsing.",
        },
        {
          img: "/images/work_images/8/5.png",
          title: "Checkout",
          content:
            "The checkout screen on Manga Mart displays the cart contents and prompts users to input details such as address and payment method. However, actual payment functionality is not included.",
        },
      ],
    },
    {
      id: "2",
      tag: "Website",
      title: "Pokédex",
      img: "/images/work_images/2.png",
      imgSmall: "/images/work_images/small/2.png",
      bg: "#D5C5C8",
      client: "",
      languages: "React, Material UI, CSS",
      link: "https://pokedex-mu-sage.vercel.app/",
      gitlink: "https://github.com/aya02200220/Pokedex",
      linkText: "Pokédex",
      description:
        "This project is a web-based Pokédex, built to help Pokémon enthusiasts find detailed information about their favorite Pokémon. The app features a clean and user-friendly interface, allowing users to quickly search and view Pokémon by various attributes.",
      icon: [<FaReact />, <FaCss3Alt />, <SiMui />],
      description2: [
        {
          img: "/images/work_images/2/1.png",
          title: "Browse Extensive Pokémon Data",
          content:
            "Explore a vast array of information available on PokeApi, encompassing every piece of data you might seek about Pokémon. From origins to abilities, everything is at your fingertips, allowing you a comprehensive look at the Pokémon universe.",
        },
        {
          img: "/images/work_images/2/2.png",
          title: "Quick Pokémon Search",
          content:
            "Navigate swiftly through our extensive Pokémon database using our efficient search bar. Just type in the name of the Pokémon you are looking for, and the search results will guide you to the exact information you need, eliminating the need to sift through countless options.",
        },
        {
          img: "/images/work_images/2/3.png",
          title: "Access Detailed Pokémon Profiles",
          content:
            "Choose any Pokémon and delve deep into detailed data profiles. From individual statistics to unique abilities, get to know your favorite Pokémon inside out. Experience the joy of discovery and learn the ins and outs of each Pokémon's characteristics.",
        },
        {
          img: "/images/work_images/2/4.png",
          title: "Versatile Pokémon Imaging",
          content:
            "Visualize Pokémon in various forms and perspectives with our versatile imaging options. Whether you prefer the normal or shiny, 2D or 3D versions, switch between them with ease and enjoy viewing Pokémon in diverse visual representations.",
        },
        {
          img: "/images/work_images/2/5.png",
          title: "Integrated Dark Mode",
          content:
            "Enhance your viewing experience with our integrated dark mode. Whether it's late at night or you simply prefer a darker theme, switch to dark mode to ease the strain on your eyes and enjoy a more comfortable browsing experience.",
        },
      ],
    },
    {
      id: "3",
      tag: "Website",
      title: "API-Catalog",
      img: "/images/work_images/3.png",
      imgSmall: "/images/work_images/small/3.png",
      bg: "#F1EBEC",
      client: "",
      languages: "React, Sass, Bootstrap",
      link: "https://api-catalog.vercel.app/",
      gitlink: "https://github.com/aya02200220/API-Catalog",
      linkText: "API-Catalog",
      description:
        "This web application is built to provide a searchable catalog of free APIs. Built with React, Bootstrap, and other modern technologies, the application allows users to explore APIs by category as well as by a search window.\n\nKey Features:\n- API Categorization : Browse APIs by various categories.\n- Search Functionality : Use the search window to find APIs based on keywords.\n- Detailed Descriptions: View the title and a brief description of each API.\n- Direct Links: Click on an API title to be taken directly to its webpage.\n- Interactive UI: Smooth animations via Framer Motion for a better user experience.",
      icon: [<FaReact />, <FaSass />, <FaBootstrap />],
    },
    {
      id: "4",
      tag: "Web application",
      title: "Todo List",
      img: "/images/work_images/4.png",
      imgSmall: "/images/work_images/small/4.png",
      bg: "#D5C5C8",
      client: "",
      languages: "React, Redux-toolkit, Material UI",
      link: "https://todo-app-pi-fawn-97.vercel.app/",
      gitlink: "https://github.com/aya02200220/Todo-app",
      linkText: "Todo List",
      description:
        "This project is a web-based Todo App designed to help you manage your tasks effortlessly. With a seamless and user-friendly interface, the app incorporates the latest technologies including React, Redux Toolkit, Local Storage, and Framer Motion to offer a high-quality user experience.\n\nKey Features:\n- CRUD Functionality: Create, Read, Update, and Delete todos with ease.\n- State Management: Utilizes Redux Toolkit for efficient state management.\n- Persistent Storage: Saves your todos in local storage so you don't lose them even if you refresh or close the page.\n- Animations: Leveraging Framer Motion to deliver smooth animations for a better user experience.\n- Filtering: Filter your todos based on their status: 'All,' 'Complete,' or 'Incomplete.'\n- Smooth Animations: The application has fluid animations for better user experience, powered by Framer Motion.",
      icon: [<FaReact />, <SiRedux />, <SiMui />, <FaCss3Alt />],
    },
    {
      id: "5",
      tag: "E-commerce",
      title: "MangaMart",
      img: "/images/work_images/5.png",
      imgSmall: "/images/work_images/small/5.png",
      bg: "#F1EBEC",
      client: "",
      languages: "JavaScript,HTML,SCSS",
      link: "https://e-commerce-website-theta-beige.vercel.app/",
      gitlink: "https://github.com/aya02200220/e-commerce-website",
      linkText: "MangaMart",
      description:
        "This project is an E-commerce web application where you can purchase various manga titles. The application fetches data from an API and displays it in a user-friendly interface. You can browse through a collection of manga, add your favorite titles to a shopping cart, and proceed to checkout. The application also includes a favorite feature, where you can mark specific manga titles as your favorite.",
      icon: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiJavascript />],
    },
    {
      id: "6",
      tag: "Web application",
      title: "Project Platform",
      img: "/images/work_images/6.png",
      imgSmall: "/images/work_images/small/6.png",
      bg: "#D5C5C8",
      client: "",
      languages: "Next.js, TypeScript, Grafbase, Tailwind, ",
      link: "https://jackie-ebon.vercel.app/",
      gitlink: "https://github.com/Kanako-muff/Dribbble-clone",
      linkText: "Jackie",
      description:
        "Jackie is a platform designed to make sharing and discovering design projects a breeze. Whether you're a student looking to showcase your projects from the school year, a professional seeking inspiration, or a recruiter on the hunt for fresh talent, Jackie has something for everyone.\n\nKey Features:\n- User Authentication: Secure login through Google.\n- Project Management: Easily upload, edit, and delete projects. Each project can have a picture, description, and links.\n- Project Discovery: Sort projects by type or explore what others have shared.\n- Profile Pages: Visit user profiles to see all projects they've uploaded.\n- Seamless Design: Thanks to Tailwind CSS, experience a modern and responsive design.",
      icon: [
        <TbBrandNextjs />,
        <SiGraphql />,
        <SiTailwindcss />,
        <SiTypescript />,
      ],
    },
    {
      id: "7",
      tag: "Website",
      title: "Portfolio",
      img: "/images/work_images/7.png",
      imgSmall: "/images/work_images/small/7.png",
      bg: "#F1EBEC",
      client: "",
      languages: "Next.js,Tailwind CSS,",
      link: "https://portfolio-aya02200220s-projects.vercel.app/",
      gitlink: "https://github.com/aya02200220/portfolio",
      linkText: "Portfolio",
      description:
        "My Portfolio is an immersive digital showcase encapsulating the journey, skills, and creativity of mine. Designed with precision and an eye for aesthetics, this portfolio stands as a testament to Aya's dedication to her craft, her continuous learning curve, and her prowess in web development and design.",
      icon: [<TbBrandNextjs />, <SiTailwindcss />, <FaCss3Alt />, <SiMui />],
    },
  ],
  en: [
    {
      id: "1",
      tag: "Web application",
      title: "ブログ投稿サイト",
      img: "/images/work_images/1.png",
      imgSmall: "/images/work_images/small/1.png",
      bg: "#D5C5C8",
      client: "",
      languages: "MongoDB, Express, React, Node.js, MUI, Cloudinary",
      link: "https://noir-rose.vercel.app/",
      gitlink: "https://github.com/aya02200220/blog-app",
      linkText: "NoirRose Diaries",
      description:
        "NoirRoseは、MERNスタック（MongoDB、Express、React、Node.js）を使用して構築されたモダンなブログ投稿プラットフォームです。ゲストと登録ユーザーの両方がブログ投稿を読むことができます。ブログの投稿やお気に入りの追加などの追加機能には、サインアップが必要です。",
      icon: [
        <SiMongodb />,
        <SiExpress />,
        <FaReact />,
        <FaNodeJs />,
        <SiMui />,
        <FaCss3Alt />,
      ],
      description2: [
        {
          img: "/images/work_images/1/1.png",
          title: "ホームで投稿を探索",
          content:
            "'ホーム'メニューでは、すべての登録ユーザーからの投稿を閲覧できます。多様な記事を一か所で見つけ、新しいコンテンツを発見し、異なる視点からの洞察を得ることができます。",
        },
        {
          img: "/images/work_images/1/2-2.png",
          title: "読みたいリストを作成",
          content:
            "興味深い記事を見つけた場合、失う心配はありません。'読みたいリスト'機能を使って、後で読みたい投稿を簡単に保存できます。読み物を整理し、クリック一つでアクセス可能に。",
        },
        {
          img: "/images/work_images/1/6-2.png",
          title: "コメントで交流",
          content:
            "ログインユーザーは、好きな記事にコメントを残すことができます。コメントを投稿するだけでなく、投稿後に自分のコメントを編集または削除することもでき、柔軟に意見を表現し、洗練させることができます。",
        },
        {
          img: "/images/work_images/1/3.png",
          title: "お気に入りの著者をフォロー",
          content:
            "気に入った著者を見つけたら、その著者のすべての投稿を簡単に表示できます。お気に入りの作家の最新コンテンツを見逃さずにチェックできます。",
        },
        {
          img: "/images/work_images/1/4-2.png",
          title: "アカウントを管理",
          content:
            "'マイアカウント'から投稿履歴を表示し、メールアドレス、パスワード、自己紹介、アバターをいつでも更新できます。",
        },
        {
          img: "/images/work_images/1/5-2.png",
          title: "パスワードを忘れましたか？",
          content:
            "'パスワードを忘れましたか？'をクリックして簡単にリセットできます。登録されたメールにパスワードリセットリンクが送信されます。このリンクは1時間有効です。",
        },
      ],
    },
    {
      id: "8",
      tag: "E-commerce",
      title: "New-Mangaマート",
      img: "/images/work_images/8.png",
      imgSmall: "/images/work_images/small/8.png",
      bg: "#F1EBEC",
      client: "",
      languages: "Next.js,TypeScript,Tailwind,MUI",
      link: "https://manga-mart.vercel.app/",
      gitlink: "https://github.com/aya02200220/Manga-mart-e-commerce",
      linkText: "New-Manga-mart",
      description:
        "'Mangaマート'を、元のシンプルなJavaScript、HTML、CSSプロジェクトから、Next.jsを使用したeコマースサイトに刷新し、Googleログイン、お気に入りシステム、カート機能などのモダンな機能を追加しました。このアップグレードにより、UI/UXが大幅に改善され、私のウェブ開発の成長が示されています。",
      icon: [
        <FaReact />,
        <TbBrandNextjs />,
        <SiTypescript />,
        <SiTailwindcss />,
        <SiMui />,
        <FaCss3Alt />,
      ],
      description2: [
        {
          img: "/images/work_images/8/1.png",
          title: "ホームページでマンガを発見",
          content:
            "Manga Martのホームページでは、デフォルトの'ALL'カテゴリーで多様なマンガコレクションを表示します。ジャンルボタンを使ってマンガをジャンル別にフィルタリングし、簡単にブラウジング体験をカスタマイズできます。",
        },
        {
          img: "/images/work_images/8/1-2.png",
          title: "タイトルや説明でマンガを検索",
          content:
            "Manga Martのヘッダーにある検索機能を使って、タイトルや説明のキーワードでマンガを簡単に見つけることができます。",
        },
        {
          img: "/images/work_images/8/2.png",
          title: "マンガの詳細を探索",
          content:
            "マンガのタイトルをクリックすると、あらすじ、ストーリー、キャラクターの詳細が表示されます。この画面から直接マンガをお気に入りに追加したり、ショッピングカートに入れたりすることができます。",
        },
        {
          img: "/images/work_images/8/3.png",
          title: "カートアイテムを管理",
          content:
            "カートページでは、数量の変更、個別または一括でのアイテム削除、チェックアウト画面への移動がシームレスに行えます。直感的なコントロールでカート内容を簡単に調整し、スムーズで効率的なショッピング体験を提供します。",
        },
        {
          img: "/images/work_images/8/4.png",
          title: "お気に入りを管理",
          content:
            "お気に入りでは、アイテムをカートに追加/削除し、一括でお気に入りを削除できます。これにより、お気に入りのマンガのキュレーションが簡素化され、ブラウジングが向上します。",
        },
        {
          img: "/images/work_images/8/5.png",
          title: "チェックアウト",
          content:
            "Manga Martのチェックアウト画面では、カート内容を表示し、住所や支払い方法などの詳細を入力するように促します。ただし、実際の支払い機能は含まれていません。",
        },
      ],
    },
    {
      id: "2",
      tag: "Website",
      title: "ポケモン図鑑",
      img: "/images/work_images/2.png",
      imgSmall: "/images/work_images/small/2.png",
      bg: "#D5C5C8",
      client: "",
      languages: "React, Material UI, CSS",
      link: "https://pokedex-mu-sage.vercel.app/",
      gitlink: "https://github.com/aya02200220/Pokedex",
      linkText: "ポケモン図鑑",
      description:
        "このプロジェクトは、ポケモン愛好家が自分の好きなポケモンに関する詳細情報を見つけるために設計されたウェブベースのポケモン図鑑です。アプリはクリーンでユーザーフレンドリーなインターフェースを備えており、ユーザーがさまざまな属性でポケモンを迅速に検索し、表示することを可能にします。",
      icon: [<FaReact />, <FaCss3Alt />, <SiMui />],
      description2: [
        {
          img: "/images/work_images/2/1.png",
          title: "広範なポケモンデータを閲覧",
          content:
            "PokeApiにある膨大な情報を探索し、ポケモンに関するあらゆるデータを見つけることができます。起源から能力まで、すべてが手に入り、ポケモンの世界を包括的に理解することができます。",
        },
        {
          img: "/images/work_images/2/2.png",
          title: "ポケモンを属性別にフィルター",
          content:
            "お気に入りのポケモンを簡単に見つけるために、属性（タイプ）別にフィルタリングすることができます。特定のタイプに関心がある場合でも、迅速に絞り込むことができます。",
        },
      ],
    },
    {
      id: "3",
      tag: "Website",
      title: "API検索アプリ",
      img: "/images/work_images/3.png",
      imgSmall: "/images/work_images/small/3.png",
      bg: "#F1EBEC",
      client: "",
      languages: "JavaScript, CSS, HTML",
      link: "https://aya02200220.github.io/Movie-App/",
      gitlink: "https://github.com/aya02200220/Movie-App",
      linkText: "API検索アプリ",
      description:
        "JavaScript、HTML、CSSで構築されたシンプルなAPI検索アプリです。APIデータベースAPIと連携し、ユーザーがタイトルでAPIを検索し、APIの概要、リリース日、評価を取得することができます。",
      icon: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
      description2: [
        {
          img: "/images/work_images/3/1.png",
          title: "APIを簡単に検索",
          content:
            "APIのタイトルを入力して、素早く検索結果を取得できます。お気に入りのAPIを見つけるのが簡単です。",
        },
        {
          img: "/images/work_images/3/2.png",
          title: "APIの詳細情報を表示",
          content:
            "選択したAPIの概要、リリース日、評価を含む詳細情報を表示します。APIの詳細を一目で確認できます。",
        },
      ],
    },

    {
      id: "4",
      tag: "Web application",
      title: "Todoリスト",
      img: "/images/work_images/4.png",
      imgSmall: "/images/work_images/small/4.png",
      bg: "#D5C5C8",
      client: "",
      languages: "React, Redux-toolkit, Material UI",
      link: "https://todo-app-pi-fawn-97.vercel.app/",
      gitlink: "https://github.com/aya02200220/Todo-app",
      linkText: "Todo List",
      description:
        "このプロジェクトは、タスクを簡単に管理するためのウェブベースのTodoアプリです。シームレスで使いやすいインターフェースを備え、React、Redux Toolkit、ローカルストレージ、Framer Motionなどの最新技術を取り入れて、高品質なユーザー体験を提供します。\n\n主な機能:\n- CRUD機能: Todoの作成、表示、更新、削除を簡単に行えます。\n- ステート管理: Redux Toolkitを使用して効率的な状態管理を実現。\n- 永続ストレージ: ローカルストレージにTodoを保存し、ページをリフレッシュしたり閉じたりしてもデータが失われません。\n- アニメーション: Framer Motionを活用して、滑らかなアニメーションを提供し、より良いユーザー体験を実現します。\n- フィルタリング: Todoのステータスに基づいてフィルタリングできます: '全て', '完了', '未完了'。\n- 滑らかなアニメーション: Framer Motionにより、アプリケーションには流れるようなアニメーションが施されています。",
      icon: [<FaReact />, <SiRedux />, <SiMui />, <FaCss3Alt />],
    },
    {
      id: "5",
      tag: "E-commerce",
      title: "Mangaマート",
      img: "/images/work_images/5.png",
      imgSmall: "/images/work_images/small/5.png",
      bg: "#F1EBEC",
      client: "",
      languages: "JavaScript, HTML, SCSS",
      link: "https://e-commerce-website-theta-beige.vercel.app/",
      gitlink: "https://github.com/aya02200220/e-commerce-website",
      linkText: "MangaMart",
      description:
        "このプロジェクトは、さまざまな漫画タイトルを購入できるEコマースのウェブアプリケーションです。アプリケーションはAPIからデータを取得し、ユーザーフレンドリーなインターフェースで表示します。漫画のコレクションをブラウズし、お気に入りのタイトルをショッピングカートに追加し、チェックアウトに進むことができます。お気に入り機能も含まれており、特定の漫画タイトルをお気に入りとしてマークできます。",
      icon: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />, <SiJavascript />],
    },
    {
      id: "6",
      tag: "Web application",
      title: "プロジェクト投稿サイト",
      img: "/images/work_images/6.png",
      imgSmall: "/images/work_images/small/6.png",
      bg: "#D5C5C8",
      client: "",
      languages: "Next.js, TypeScript, Grafbase, Tailwind",
      link: "https://jackie-ebon.vercel.app/",
      gitlink: "https://github.com/Kanako-muff/Dribbble-clone",
      linkText: "Jackie",
      description:
        "Jackieは、デザインプロジェクトを共有し、発見するためのプラットフォームです。学生が学校のプロジェクトを公開するために、プロフェッショナルがインスピレーションを得るために、リクルーターが新しい才能を探すために、Jackieは誰にでも役立つものを提供します。\n\n主な機能:\n- ユーザー認証: Googleによる安全なログイン。\n- プロジェクト管理: プロジェクトを簡単にアップロード、編集、削除できます。各プロジェクトには画像、説明、リンクを追加できます。\n- プロジェクト発見: プロジェクトのタイプ別に並べ替えたり、他のユーザーが共有したプロジェクトを探索できます。\n- プロフィールページ: ユーザープロフィールを訪問し、アップロードされたすべてのプロジェクトを見ることができます。\n- スムーズなデザイン: Tailwind CSSによる現代的でレスポンシブなデザインを体験できます。",
      icon: [
        <TbBrandNextjs />,
        <SiGraphql />,
        <SiTailwindcss />,
        <SiTypescript />,
      ],
    },
    {
      id: "7",
      tag: "Website",
      title: "ポートフォリオWebサイト",
      img: "/images/work_images/7.png",
      imgSmall: "/images/work_images/small/7.png",
      bg: "#F1EBEC",
      client: "",
      languages: "Next.js, Tailwind CSS",
      link: "https://portfolio-aya02200220s-projects.vercel.app/",
      gitlink: "https://github.com/aya02200220/portfolio",
      linkText: "ポートフォリオ",
      description:
        "私のポートフォリオは、私の今までの旅路、スキル、創造性を紹介するためのデジタルショーケースです。色使いやデザインなど、自分らしさを詰め込みました。継続的な私の成長の軌跡を更新していけたらいいなと思っています。",
      icon: [<TbBrandNextjs />, <SiTailwindcss />, <FaCss3Alt />, <SiMui />],
    },
  ],
};
