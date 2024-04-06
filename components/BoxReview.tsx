import avatar from "@/assets/avatar2.png";
import ChatIcon from "@/assets/icons/ChatIcon";
import Ratings from "@/assets/icons/Ratings";
import ThumbsDown from "@/assets/icons/ThumbsDown";
import ThumbsUp from "@/assets/icons/ThumbsUp";
import Image from "next/image";

type Props = {
  className?: string;
  amenity: string;
};

export default function BoxReview({ className = "", amenity }: Props) {
  return (
    <div
      className={
        "bg-[#FAFCFD] dark:bg-[#18181B] rounded shadow p-4 " + className
      }
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src={avatar}
            alt="avatar"
            height={50}
            width={50}
            className="w-10 rounded-[50%]"
          />
          <div>
            <h4 className="font-[500] text-lg">James T.</h4>
            <p className="text-xs">5 months ago</p>
          </div>
        </div>
        <div>
          <p className="font-base font-[500]">Ikate, Lekki</p>
          <Ratings />
        </div>
      </header>

      <p className="my-2">
        There is no stable electricity. The roads are fairly good and there is a
        sense of community. The drainage system is poor and most residents
        litter their surroundings. There are lots stores and Supermarkets.
      </p>

      <div className="flex items-center justify-between">
        <div className="flex-[2] flex items-center gap-1">
          <p className="text-[#8F95B2] text-xs flex-1 flex items-center gap-1">
            <ThumbsUp className="w-5 cursor-pointer" />
            24
          </p>
          <p className="text-[#8F95B2] text-xs flex-1 flex items-center gap-1">
            <ThumbsDown className="w-5 cursor-pointer" />
            02
          </p>
          <p className="text-[#8F95B2] text-xs flex-1 flex items-center gap-1">
            <ChatIcon className="w-5 cursor-pointer" />
            125
          </p>
        </div>
        <div className="flex-1">
          {amenity === "network" ? (
            <span className="py-1 px-2 rounded-2xl bg-[#FCDCEF] border border-[#821958] text-[#821958] text-xs">
              network
            </span>
          ) : amenity === "water" ? (
            <span className="py-1 px-2 rounded-2xl bg-[#D1E4FA] border border-[#2863B8] text-[#2863B8] text-xs">
              water
            </span>
          ) : amenity === "traffic" ? (
            <span className="py-1 px-2 rounded-2xl bg-[#F5E9CB] border border-[#A07C22] text-[#A07C22] text-xs">
              traffic
            </span>
          ) : (
            <span className="py-1 px-2 rounded-2xl bg-[#F66A57] border border-[#F66A57] text-black text-xs">
              power
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
