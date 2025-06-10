import ContactForm from "@/components/ContactForm";
import { How } from "@/components/how";
import { Hero } from "@/components/layout/hero/hero";
import { Superfan } from "@/components/layout/superfan/superfan";

export default function page() {
  return (
    <main>
      <Hero />
      <Superfan />
      <How />
      <ContactForm />
    </main>
  );
}
