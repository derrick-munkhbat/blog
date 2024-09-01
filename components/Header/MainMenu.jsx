// import Link from "next/link";
import Link from "next/link";
import { MenuDots } from "./MenuDots";

export function MainMenu() {
  return (
    <>
      <div className="flex gap-8 max-md:hidden">
        <Link href="/">Home</Link>
        <Link href="/articles/blog">Blog</Link>
        <Link href="/articles/contact">Contact</Link>
      </div>
      <button className="md:hidden">
        <MenuDots>
          <MobileMenu />
        </MenuDots>
      </button>
    </>
  );
}

function MobileMenu() {
  const [visible, setVisible] = useState(false);

  // let open = false;

  function openMenu() {
    // open=true;
    setVisible(true);
  }

  function closeMenu() {
    // open=false;
    setVisible(false);
  }

  return (
    <>
      <button className="flex lg:hidden" onClick={openMenu}>
        <MenuDots />
      </button>
      {visible && <div className="fixed bg-slate-400/70 inset-0"></div>}

      <div
        className={`fixed top-0 bottom-0 w-3/4 transition-all bg-white ${
          visible ? "right-0" : "-right-full"
        }`}
      >
        <div className="p-8 text-2xl">Mobile Menu</div>
        <button onClick={closeMenu}>close</button>
      </div>
    </>
  );
}
