import NavbarDesktop from "@/components/layout/navigation/desktop/navbar";
import NavbarMobile from "@/components/layout/navigation/mobile/navbar";

export function Header() {
  return (
    <header className="container flex justify-between">
      
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
}
