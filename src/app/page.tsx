import { How } from "@/components/how";
import "@/assets/styles/globals.css";
import { Hero } from "@/components/layout/hero/hero";
import { Superfan } from "@/components/layout/superfan/superfan";
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <main>

      <Hero />
      <Superfan />
      <How />
      <ContactForm />

    </main>
  );
}
