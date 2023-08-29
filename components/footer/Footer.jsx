const Footer = () => {
  return (
    <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-[#333]">
      <div className="container">
        <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
          &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
          <a>Aya Ishimura</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
