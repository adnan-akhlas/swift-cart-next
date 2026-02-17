import { IconX, IconSearch as SearchIcon } from "@tabler/icons-react";
import Link from "next/link";

export default function SearchForm() {
  return (
    <div className="mx-auto max-w-7xl">
      <form action="/products" className="relative max-w-md w-full">
        <div className="relative flex items-center">
          {/* Search Icon */}
          <SearchIcon
            className="absolute left-3 text-gray-400"
            size={20}
            stroke={2}
          />

          {/* Input */}
          <input
            type="text"
            placeholder="Search..."
            name="query"
            className="w-full bg-white border-2 border-gray-200 py-2 pl-10 pr-10 rounded-lg outline-none focus:border-indigo-400 transition-all"
          />

          {/* Clear Button */}
          <button
            type="button"
            className="absolute right-3 text-gray-400 hover:text-indigo-400"
          >
            <IconX size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
