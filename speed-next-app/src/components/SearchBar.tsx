"use client";

export default function Search({ placeholder }: { placeholder: string }) {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-black placeholder-gray-400" // Added text-black for input text color
        placeholder={placeholder}
        onChange = {(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
