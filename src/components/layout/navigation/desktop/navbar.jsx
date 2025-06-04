const NavbarDesktop = () => {
  return (
    <nav className=" w-full h-16  bg-[#121212] flex items-center justify-between px-[108px] text-white">
      <div className="flex items-center">
        <img src="./logo.png" alt="logo" />
      </div>

      <div className="flex items-center space-x-8">
        <a
          href="#"
          className="text-base hover:text-gray-300 transition-colors"
        >
          Hva er det?
        </a>
        <a
          href="#"
          className="text-base hover:text-gray-300 transition-colors"
        >
          Hvordan funker det?
        </a>
        <a
          href="#"
          className="text-base hover:text-gray-300 transition-colors"
        >
          Kontakt oss i Oi:d
        </a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
