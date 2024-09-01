import { Logo } from "@/components/icons/Logo";
import { MainMenu } from "@/components/Header/MainMenu";
import { Search } from "@/components/Header/Search";

export function Header() {
  return (
    <div className="flex flex-wrap items-center justify-between rounded-2xl gap-2 pt-3 pb-3">
      <Logo />
      <MainMenu />
      <Search />
    </div>
  );
}
