"use client"

import avatar from "@/assets/avatar2.png";
import empty from "@/assets/empty.jpeg";
import ChatIconClear from "@/assets/icons/ChatIconClear";
import Star from "@/assets/icons/Star";
import ThumbsDownClear from "@/assets/icons/ThumbsDownClear";
import ThumbsUpClear from "@/assets/icons/ThumbsUpClear";
import { Review as ReviewType } from "@/types/types";
import Image from "next/image";
import { memo } from "react";

type Props = {
  review: ReviewType;
};

const Review = memo(({ review }: Props) => {
  return (
    <div className="w-full py-4 border-b border-b-[#D9D9D9]">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={review.anonymous ? empty : avatar}
              alt="avatar"
              height={50}
              width={50}
              className="w-10 max-md:w-8 rounded-[50%]"
            />
            <p className="text-lg max-md:text-base font-semibold">
              {review.anonymous ? "Anonymous" : "James T."}
            </p>
          </div>
          <p className="text-[0.9rem] max-md:text-xs text-[#1E1E1E99] dark:text-[#FBFAFC99]">
            {review.date}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Star />
          <p>{review.rating}</p>
        </div>
      </header>
      <p className="py-2 max-md:text-[0.95rem]">
        {review.body}
      </p>
      <footer>
        <div className="flex-[2] flex items-center gap-4">
          <p className="text-[#8F95B2] text-[0.8rem] flex items-center gap-1">
            <ThumbsUpClear className="w-5 cursor-pointer" />
            {review.likes}
          </p>
          <p className="text-[#8F95B2] text-xs flex items-center gap-1">
            <ThumbsDownClear className="w-5 cursor-pointer" />
            {review.dislikes}
          </p>
          <p className="text-[#8F95B2] text-xs flex items-center gap-1">
            <ChatIconClear className="w-5 cursor-pointer" />
            {review.comments}
          </p>
        </div>
      </footer>
    </div>
  );
});
Review.displayName = "Review";
export default Review;
