"use client";

import Image from "next/image";
import avatar from "@/assets/avatar.png";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import SearchBlue from "@/assets/icons/SearchBlue";
import { KeyboardEvent, memo, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Header = memo(() => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [address, setAddress] = useState(
    "Bonny and Clyde Street, Ajao Estate, Lagos"
  );
  const router = useRouter();

  const runSearch = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter" && address) {
      router.push("/review?s=" + address);
    }
  };

  useEffect(() => {
    if (searchParams.get("s")) {
      const term = searchParams.get("s");
      setSearchTerm(term!);
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
              defaultValue={searchTerm}
              className="h-full w-full focus:outline-none bg-[#FBFAFC] dark:bg-darkest_bg  border rounded border-last_light_bg dark:border-darker_bg pl-[7%] pr-2"
              onKeyDown={runSearch}
            />
            <SearchBlue className="w-4 absolute top-1/2 left-[2%] -translate-y-1/2" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end gap-2">
          <span className="font-semibold max-md:hidden">Welcome!</span>
          <Image
            src={avatar}
            alt="avatar"
            height={50}
            width={50}
            className="w-10 rounded-[50%] cursor-pointer"
          />
        </div>
      </Container>
    </header>
  );
});

Header.displayName = "Header";
export default Header;
