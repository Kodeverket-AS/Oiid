const NavbarDesktop = () => {
  return (
    <nav className="hidden md:flex w-full h-26  items-center justify-between ">
      <div className="flex items-center">
        <img src="./logo.png" alt="logo" className="h-[64px] w-auto" />
      </div>

      <div className="flex items-center space-x-8">

        <a
          href="#"
          className="hover:text-purple-900 hover:dark:text-purple-400 transition duration-200 "
        >
          What is Superfan App?
          <span
            className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-purple-900 dark:bg-purple-600 transition-all duration-200 
            "
          ></span>
        </a>
        <a
          href="#"
          className=" hover:text-purple-900 hover:dark:text-purple-400  transition duration-200 "
        >
          How does it work?
          <span
            className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-purple-900 dark:bg-purple-600 transition-all duration-200 
            "
          ></span>
        </a>
        <a
          href="#"
          className="hover:text-purple-900 hover:dark:text-purple-400 transition duration-200 "
        >
           Contact us
          <span
            className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-purple-900 dark:bg-purple-600 transition-all duration-200 
             "
          ></span>

        </a>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
