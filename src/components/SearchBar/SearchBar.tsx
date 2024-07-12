import Link from "next/link";
import { SearchIcon } from "../svg/SearchIcon";
import { IoMdOptions } from "react-icons/io";

export const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-[720px] gap-4">
      <div className="w-full relative">
        <label className="absolute overflow-hidden w-0 h-0" htmlFor="search">
          What are you looking for today?
        </label>
        <input
          id="search"
          type="text"
          placeholder="What are you looking for today?"
          className="h-12 w-full rounded-with-transition-on-focus px-8 py-2 pr-14 border border-regal-blue"
        />
        <span className="text-regal-blue-light absolute right-6 top-2">
          <SearchIcon width={32} height={32} />
        </span>
      </div>
      <button className="h-12 rounded-lg hover:rounded-3xl transition-all duration-400 bg-regal-blue text-regal-beige px-8">
        Search
      </button>
      <Link className="text-nowrap flex items-center gap-3 text-regal-blue hover:text-regal-blue-light" href="/ads">
        <IoMdOptions />
        More options
      </Link>
    </div>
  );
};
