import { SearchIcon } from "../svg/SearchIcon";

export const SearchBar = () => {
  return (
    <div className="flex w-full max-w-[600px] gap-4">
      <div className="w-full relative">
        <label className="absolute overflow-hidden w-0 h-0" htmlFor="search">
          What are you looking for today?
        </label>
        <input
          id="search"
          type="text"
          placeholder="What are you looking for today?"
          className="h-12 w-full rounded-full px-8 py-2 pr-14 border border-regal-blue"
        />
        <span className="text-regal-blue-light absolute right-6 top-2">
          <SearchIcon width={32} height={32} />
        </span>
      </div>
      <button className="rounded-full bg-regal-blue text-regal-beige px-8">Search</button>
    </div>
  );
};
