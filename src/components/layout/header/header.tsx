import NavbarDesktop from "@/components/layout/navigation/desktop/navbar";
import NavbarMobile from "@/components/layout/navigation/mobile/navbar";
import { ModeToogle } from "@/components/modeToggle";

export function Header() {
  return (
    <header className="container flex items-center justify-between ">
      <NavbarDesktop />
      <NavbarMobile />
      <div className="p-5">
        <ModeToogle />
      </div>
    </header>
  );
}
