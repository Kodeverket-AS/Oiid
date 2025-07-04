
import { ModeToogle } from "@/components/modeToggle";


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
          className="neon-text hover:scale-110 hover:text-purple-900
    transition-transform
    duration-300 ease-in-out"
          style={{ willChange: "transform" }}
        >
          What is Superfan App?
        </a>
        <a
          draggable="false"
          href="#how"
          className="neon-text hover:scale-110 hover:text-purple-900
    transition-transform
    duration-300 ease-in-out"
          style={{ willChange: "transform" }}
        >
          How does it work?
        </a>
        <a
          draggable="false"
          href="#contact"
          className="neon-text hover:scale-110 hover:text-purple-900
          transition-transform 
    duration-300 ease-in-out"
          style={{ willChange: "transform" }}
        >
          Contact us
        </a>
        <ModeToogle/>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
