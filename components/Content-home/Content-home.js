import { MainImg } from "@/components/Content-home/MainImg";
import { Grid } from "@/components/Content-home/Grid";
import { LeftArrow } from "@/components/icons/LeftArrow";
import { RightArrow } from "@/components/icons/RightArrow";

export function Content() {
  return (
    <>
      <MainImg />
      <div className="flex justify-end">
        <button className="flex justify-center items-center border-2 w-5 p-1 rounded-md max-sm:hidden">
          <LeftArrow />
        </button>
        <button className="flex justify-center items-center border-2 w-5 p-1 rounded-md max-sm:hidden">
          <RightArrow />
        </button>
      </div>

      <div>
        <Grid />
      </div>
    </>
  );
}
