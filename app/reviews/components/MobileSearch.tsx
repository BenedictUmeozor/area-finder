import SearchBlue from "@/assets/icons/SearchBlue";
import { Location } from "@/types/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";

type Props = {
  searchParams: string;
};

export default function MobileSearch({ searchParams }: Props) {
  const [suggestions, setSuggestions] = useState<Location[] | null>(null);
  const [address, setAddress] = useState(
    searchParams || "Bonny and Clyde Street, Ajao Estate, Lagos"
  );

  const router = useRouter();

  const runSearch = () => {
    if (address) {
      router.push("/reviews?s=" + address);
    } else {
      router.push("/reviews");
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
    if (searchParams) {
      setAddress(searchParams);
    }
  }, [searchParams]);

  return (
    <div className="relative h-14 md:hidden mb-2">
      <input
        type="search"
        placeholder="Enter Address"
        value={address}
        className="h-full w-full focus:outline-none bg-[#FBFAFC] dark:bg-darkest_bg  border rounded border-last_light_bg dark:border-darker_bg pl-[7%] max-md:pl-[10%] pr-2 text-[0.8rem]"
        onChange={fetchSuggestions}
      />
      <SearchBlue
        className={
          "w-5 absolute top-1/2 left-[2%] max-md:left-[4%] -translate-y-1/2 " +
          (address.length > 0 ? "blink" : "")
        }
        onClick={runSearch}
      />
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
  );
}
