"use client";

import Skeleton from "react-loading-skeleton";

export default function ReviewSkeleton() {
  return (
    <div className="flex-[3] gap-4 max-md:order-2">
      <Skeleton width={"100%"} height={200} />
      <Skeleton width={"100%"} height={200} />
      <Skeleton width={"100%"} height={200} />
      <Skeleton width={"100%"} height={200} />
      <Skeleton width={"100%"} height={200} />
      <Skeleton width={"100%"} height={200} />
    </div>
  );
}
