import { Info } from "@/components/Footer/Info";
import { Copyright } from "@/components/Footer/Copyright";

export function Footer() {
  return (
    <div className="flex flex-col w-10/12 mx-auto justify-between gap-5 pt-10 pb-10 md:justify-center">
      <Info />
      <Copyright />
    </div>
  );
}
