const NavbarDesktop = () => {
  return (
    <nav className="hidden md:flex w-full h-26  items-center justify-between ">
      <div className="flex items-center">
        <img src="./logo.png" alt="logo" className="h-[64px] w-auto" />
      </div>

      <div className="flex items-center space-x-8">
        <a href="#" className="text-base hover:text-gray-300 transition-colors">
          What is Superfan App?
        </a>
        <a href="#" className="text-base hover:text-gray-300 transition-colors">
          How does it work?
        </a>
        <a href="#" className="text-base hover:text-gray-300 transition-colors">
          Contact us
        </a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
