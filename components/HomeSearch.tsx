"use client";

import SearchIcon from "@/assets/icons/Search";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

export default function HomeSearch() {
  const router = useRouter();
  const [address, setAddress] = useState("");

  const searchAddress = () => {
    if (address) {
      router.push("/reviews?s=" + address);
    } else {
      router.push("/reviews");
    }
  };

  const runSearch = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      searchAddress();
    }
  };

  return (
    <>
      <div className="relative h-12 mb-4">
        <input
          type="text"
          placeholder="Enter Address"
          className="h-full w-full focus:outline-none bg-lightest_bg dark:bg-darkest_bg  border rounded border-last_light_bg dark:border-darker_bg pl-[7%] pr-2 max-md:text-[0.8rem]"
          onChange={(e) => setAddress(e.target.value)}
          onKeyDown={runSearch}
        />
        <SearchIcon className="w-4 absolute top-1/2 left-[2%] -translate-y-1/2" />
      </div>
      <button className="button" onClick={searchAddress}>
        Search
      </button>
    </>
  );
}
