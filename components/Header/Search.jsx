import { SearchIcon } from "../icons/SearchIcon";

export function Search() {
  return (
    <div className="flex rounded-md items-center border-2 bg-white w-54 max-md:hidden">
      <input
        className="rounded-md text-center p-2"
        type="text"
        placeholder="Search"
      />

      <button className="p-2">
        <SearchIcon />
      </button>
    </div>
  );
}
