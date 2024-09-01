import { Fb } from "@/components/icons/Fb";
import { Twitter } from "@/components/icons/Twitter";
import { Ig } from "@/components/icons/Ig";
import { In } from "@/components/icons/In";

export function SocialLogos() {
  return (
    <div className="flex justify-start items-center gap-5 p-3 md:justify-center">
      <button>
        <Fb />
      </button>
      <button>
        <Twitter />
      </button>
      <button>
        <Ig />
      </button>
      <button>
        <In />
      </button>
    </div>
  );
}
