import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={
        "clash-bold flex items-center gap-1 text-[0.8rem] " + className
      }
    >
      <span className="tracking-widest">SPOTTA</span>{" "}
      <span className=" bg-light_button flex items-center justify-center h-5 w-5 rounded text-dark_text text-[0.6rem]">
        NG
      </span>
    </Link>
  );
}
