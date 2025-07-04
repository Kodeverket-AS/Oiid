import NavbarDesktop from "@/components/layout/navigation/desktop/navbar";
import NavbarMobile from "@/components/layout/navigation/mobile/navbar";


export function Header() {
  return (
    <header className="container flex items-center justify-between ">
      <NavbarDesktop />
      <NavbarMobile />
     
    </header>
  );
}
