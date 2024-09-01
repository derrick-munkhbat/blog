import { FooterLogo } from "@/components/icons/FooterLogo";
import { Policy } from "@/components/Footer/Policy";

export function Copyright() {
  return (
    <div className="flex justify-between items-center max-md:mx-auto">
      <FooterLogo />
      <Policy />
    </div>
  );
}
