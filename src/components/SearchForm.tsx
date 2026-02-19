import { IconX, IconSearch as SearchIcon } from "@tabler/icons-react";
import Form from "next/form";
import Link from "next/link";

export default async function SearchForm() {
  return (
    <div className="mx-auto max-w-7xl">
      <Form action="/products" className="relative max-w-md w-full">
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
            name="q"
            className="w-full bg-white border-2 border-gray-200 py-2 pl-10 pr-10 rounded-lg outline-none focus:border-indigo-400 transition-all"
          />

          {/* Clear Button */}
          <button
            type="reset"
            className="absolute right-3 text-gray-400 hover:text-indigo-400"
          >
            <Link href="/products">
              <IconX size={18} />
            </Link>
          </button>
        </div>
      </Form>
    </div>
  );
}
