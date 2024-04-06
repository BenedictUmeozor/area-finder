"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, memo, ChangeEvent, KeyboardEvent } from "react";
import { v4 as uuidV4 } from "uuid";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import SearchBlue from "@/assets/icons/SearchBlue";
import { Location } from "@/types/types";
import avatar from "@/assets/avatar.png";

const Header = memo(() => {
  const searchParams = useSearchParams();
  const [address, setAddress] = useState(
    "Bonny and Clyde Street, Ajao Estate, Lagos"
  );
  const [suggestions, setSuggestions] = useState<Location[] | null>();
  const router = useRouter();

  const runSearch = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter" && address) {
      router.push("/reviews?s=" + address);
    }
  };

  const fetchSuggestions = async (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    const res = await fetch(
      `https://api.locationiq.com/v1/autocomplete?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY}&q=${event.target.value}&limit=4&dedupe=1&countrycodes=ng`
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
    router.push("/reviews?s=" + address);
  };

  useEffect(() => {
    if (searchParams.get("s")) {
      const term = searchParams.get("s");
      setAddress(term!);
    }
  }, [searchParams]);

  return (
    <header className="py-4">
      <Container className="flex items-center justify-between">
        <div className="flex-[3] flex items-center gap-4">
          <Logo />
          <div className="relative h-12 flex-1 max-md:hidden">
            <input
              type="search"
              placeholder="Enter Address"
              value={address}
              className="h-full w-full focus:outline-none bg-[#FBFAFC] dark:bg-darkest_bg  border rounded border-last_light_bg dark:border-darker_bg pl-[7%] pr-2"
              onChange={fetchSuggestions}
              onKeyDown={runSearch}
            />
            <SearchBlue className="w-4 absolute top-1/2 left-[2%] -translate-y-1/2" />
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
        </div>
        <div className="flex-1 flex items-center justify-end gap-2">
          <span className="font-semibold max-md:hidden">Welcome!</span>
          <Link href="/login">
            <Image
              src={avatar}
              alt="avatar"
              height={50}
              width={50}
              className="w-10 rounded-[50%] cursor-pointer"
            />
          </Link>
        </div>
      </Container>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
