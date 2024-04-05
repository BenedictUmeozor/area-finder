import avatar from "@/assets/avatar2.png";
import ChatIconClear from "@/assets/icons/ChatIconClear";
import Star from "@/assets/icons/Star";
import ThumbsDownClear from "@/assets/icons/ThumbsDownClear";
import ThumbsUpClear from "@/assets/icons/ThumbsUpClear";
import Image from "next/image";
import { memo } from "react";

const Review = memo(() => {
  return (
    <div className="w-full py-4 border-b border-b-[#D9D9D9]">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={avatar}
              alt="avatar"
              height={50}
              width={50}
              className="w-10 rounded-[50%]"
            />
            <p className="text-lg font-semibold">James T.</p>
          </div>
          <p className="text-base text-[#1E1E1E99] dark:text-[#FBFAFC99]">
            5 months ago
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Star />
          <p>4.0</p>
        </div>
      </header>
      <p className="py-2">
        There is no stable electricity. The roads are fairly good and there is a
        sense of community. The drainage system is poor and most residents
        litter their surroundings. There are several grocery stores and
        Supermarkets.
      </p>
      <footer>
        <div className="flex-[2] flex items-center gap-4">
          <p className="text-[#8F95B2] text-xs flex items-center gap-1">
            <ThumbsUpClear className="w-4 cursor-pointer" />
            1000
          </p>
          <p className="text-[#8F95B2] text-xs flex items-center gap-1">
            <ThumbsDownClear className="w-5 cursor-pointer" />
            24
          </p>
          <p className="text-[#8F95B2] text-xs flex items-center gap-1">
            <ChatIconClear className="w-5 cursor-pointer" />
            24
          </p>
        </div>
      </footer>
    </div>
  );
});
Review.displayName = "Review";
export default Review;
