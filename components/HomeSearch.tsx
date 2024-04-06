"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent } from "react";
import { v4 as uuidV4 } from "uuid";
import SearchIcon from "@/assets/icons/Search";
import { Location } from "@/types/types";

export default function HomeSearch() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState<Location[] | null>(null);

  const searchAddress = () => {
    const route = address ? `/reviews?s=${address}` : "/reviews";
    router.push(route);
  };

  const runSearch = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      searchAddress();
    }
  };

  const fetchSuggestions = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAddress(value);

    const res = await fetch(
      `https://api.locationiq.com/v1/autocomplete?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY}&q=${value}&limit=4&dedupe=1&countrycodes=ng`
    );

    if (!res.ok) {
      setSuggestions(null);
      return;
    }

    const data = await res.json();
    setSuggestions(data);
  };

  const _setAddress = (address: string) => {
    setAddress(address);
    setSuggestions(null);
  };

  return (
    <>
      <div className="relative h-12 mb-4">
        <input
          type="text"
          placeholder="Enter Address"
          className="h-full w-full focus:outline-none bg-lighter_bg dark:bg-darkest_bg border rounded border-last_light_bg dark:border-darker_bg pl-[7%] max-md:pl-[10%] pr-2 max-md:text-[0.8rem] text-[0.85rem]"
          onChange={fetchSuggestions}
          onKeyDown={runSearch}
          value={address}
        />
        <SearchIcon className="w-4 absolute top-1/2 left-[2%] -translate-y-1/2 max-md:left-[4%]" />
        {suggestions && (
          <ul className="absolute top-[110%] shadow left-0 w-full max-h-[700%] z-10 bg-lighter_bg dark:bg-[#242428] rounded-md">
            {suggestions.map((suggestion) => (
              <li
                key={uuidV4()}
                className="p-2 text-xs hover:bg-lightest_bg dark:hover:bg-darker_bg cursor-pointer"
                onClick={() => _setAddress(suggestion.display_name)}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="button" onClick={searchAddress}>
        Search
      </button>
    </>
  );
}
