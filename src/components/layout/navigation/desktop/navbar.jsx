const NavbarDesktop = () => {
  return (
    <nav className="hidden md:flex w-full h-26 my-6 items-center justify-between ">
      <div className="flex items-center">
        <img src="./logo.png" alt="logo" className="h-[64px] w-auto" />
      </div>

      <div className="flex items-center space-x-8">
        <a
          draggable="false"
          href="#superfan"
          className="relative group hover:scale-110 hover:text-purple-900 hover:dark:text-purple-400 transition duration-200 "
        >
          What is Superfan App?
        </a>
        <a
          draggable="false"
          href="#how"
          className="relative group group hover:scale-110 hover:text-purple-900 hover:dark:text-purple-400  transition duration-200 "
        >
          How does it work?
        </a>
        <a
          draggable="false"
          href="#contact"
          className="relative group group hover:scale-110 hover:text-purple-900 hover:dark:text-purple-400 transition duration-200 "
        >
          Contact us
        </a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
