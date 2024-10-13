"use client";

import { useSearchParams } from "next/navigation"; // Import from Next.js

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams(); // Use the Next.js search params hook

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams.toString()); // Convert searchParams to string
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    // Update the URL with new search parameters
    window.history.pushState({}, '', `?${params.toString()}`);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-black placeholder-gray-400"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
