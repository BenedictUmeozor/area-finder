"use client";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4">
      <Container className="flex items-center justify-between">
        <Logo />
        <Link href="/login" className="text-[#5378F6] tracking-wider font-semibold">
          LOGIN
        </Link>
      </Container>
    </header>
  );
}
