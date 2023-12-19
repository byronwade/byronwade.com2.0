import { SearchIcon } from "lucide-react";
import { Search } from "react-feather";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <form className="py-4 max-w-[550px] relative">
        <input
          type="text"
          placeholder="Search for products..."
          autoComplete="off"
          className="w-full rounded-md border px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-black dark:placeholder:text-neutral-400"
          name="search"
          defaultValue=""
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
          <SearchIcon className="h-4 text-black" />
        </div>
      </form>
    </div>
  );
}
