import { useState, useEffect, memo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import { ChevronRight } from "react-feather";
import Container from "@/components/Container";
import Header from "./Header";
import Bookmark from "@/assets/icons/Bookmark";
import Share from "@/assets/icons/Share";
import MobileSearch from "./MobileSearch";
import CheckCircle from "@/assets/icons/CheckCircle";

const categories = [
  "schools",
  "hospitals",
  "resort park",
  "shopping malls",
  "airport",
  "train station",
  "nightlife",
  "public wifi",
  "packing lot",
  "security",
  "public transport",
  "bus station",
  "quiet",
];

type Props = {
  action: () => void;
};

const SearchHeader = memo(({ action }: Props) => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    "Bonny and Clyde Street, Ajao Estate, Lagos"
  );

  const bookmarkLocation = () => {
    toast("Location added to Bookmarks", {
      icon: <CheckCircle />,
      style: {
        border: "2px solid #0F920F",
        padding: "16px",
        color: "#0F920F",
        background: "#F2FDF2",
      },
    });
  };

  useEffect(() => {
    if (searchParams.get("s")) {
      const term = searchParams.get("s");
      setSearchTerm(term!);
    }
  }, [searchParams]);

  return (
    <section className="bg-lighter_bg dark:bg-dark_bg pb-4">
      <Suspense fallback={<Skeleton height={100} width={"100%"} />}>
        <Header />
      </Suspense>
      <Container>
        <MobileSearch searchParams={searchTerm} />
        <div className="flex items-center justify-between max-lg:block">
          <div className="flex-[2] max-md:text-center max-lg:mb-4">
            <h3 className="font-semibold text-2xl mb-1 max-md:text-xl">
              {searchTerm}
            </h3>
            <p className="max-md:text-[0.9rem]">
              <span className="font-semibold">{`"450"`}</span> Reviews (People
              are raving about the selected location)
            </p>
          </div>
          <div className="my-4 flex items-center gap-1 md:hidden">
            <div>
              {categories.slice(0, 5).map((c) => (
                <button
                  key={c}
                  className="flex-1 text-xs text-center bg-[#FBFAFC] border rounded-sm border-[#ccc] dark:border-[#FBFAFC] dark:bg-darkest_bg capitalize min-w-fit mr-1 px-2 mb-1"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center gap-2 max-md:max-w-full max-lg:max-w-md">
            <button
              className="flex-1 bg-light_button dark:bg-dark_button text-dark_text dark:text-light_text uppercase text-[0.85rem] h-11 max-md:h-9 rounded px-5 hover:bg-light_button_second transition-all duration-200 ease-linear"
              onClick={action}
            >
              leave a review
            </button>
            <div className="flex-1 flex items-center gap-2">
              <button
                className="flex-1 border rounded border-light_button flex items-center justify-center hover:border-2 h-11 max-md:h-9"
                onClick={bookmarkLocation}
              >
                <Bookmark className="w-5" />
              </button>
              <button className="flex-1 border rounded border-light_button flex items-center justify-center hover:border-2 h-11 max-md:h-9">
                <Share className="w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-1 max-md:hidden">
          <div>
            {categories.map((c) => (
              <button
                key={c}
                className="flex-1 text-[0.9rem] text-center bg-[#FBFAFC] border rounded-sm border-[#ccc] dark:border-[#FBFAFC] dark:bg-darkest_bg capitalize min-w-fit mr-1 px-2 mb-1"
              >
                {c}
              </button>
            ))}
          </div>
          <button className="inline-flex items-center justify-center bg-[#FBFAFC] dark:bg-darkest_bg">
            <ChevronRight className="w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
});

SearchHeader.displayName = "SearchHeader";
export default SearchHeader;
