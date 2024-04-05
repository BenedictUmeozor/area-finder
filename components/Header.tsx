"use client";

import Image from "next/image";
import Container from "./Container";
import Logo from "./Logo";
import avatar from "@/assets/avatar.png";

export default function Header() {
  return (
    <header className="py-4">
      <Container className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <span className="font-semibold max-md:hidden">Welcome!</span>
          <Image
            src={avatar}
            alt="avatar"
            height={50}
            width={50}
            className="w-10 rounded-[50%]"
          />
        </div>
      </Container>
    </header>
  );
}
