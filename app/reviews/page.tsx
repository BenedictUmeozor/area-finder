"use client";

import { useState, useEffect, Suspense } from "react";
import Container from "@/components/Container";
import SearchHeader from "./components/SearchHeader";
import Review from "@/app/reviews/components/Review";
import CreateReview from "@/app/reviews/components/CreateReview";
import { Review as ReviewType } from "@/types/types";
import { generateRandomReviews } from "@/utils/functions";
import ReviewSkeleton from "@/app/reviews/components/ReviewSkeleton";
import toast from "react-hot-toast";
import CheckCircle from "@/assets/icons/CheckCircle";
import DesktopGrid from "./components/DesktopGrid";
import MobileGrid from "./components/MobileGrid";
import Skeleton from "react-loading-skeleton";
import { v4 as uuidV4 } from "uuid";

const reviewData = {
  id: uuidV4(),
  body: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
  rating: 4.0,
  likes: 1000,
  dislikes: 24,
  comments: 50,
  date: `5 months ago`,
  name: "James T.",
  anonymous: false,
};

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const displayForm = () => setShowForm(true);
  const removeForm = () => setShowForm(false);

  const addToReviews = (review: ReviewType) => {
    const updated = [review, ...reviews];
    setReviews(updated);
  };

  useEffect(() => {
    if (reviews.length === 0) {
      const randReviews = generateRandomReviews();
      setReviews(randReviews);
    }
  }, [reviews]);

  const submitForm = (review: ReviewType) => {
    addToReviews(review);
    removeForm();
    toast("Review submitted", {
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
    document.body.style.overflow = showForm ? "hidden" : "auto";
  }, [showForm]);

  return (
    <>
      {showForm && <CreateReview action={submitForm} close={removeForm} />}
      <section className="page-section">
        <Suspense fallback={<Skeleton height={300} width={"100%"} />}>
          <SearchHeader action={displayForm} />
        </Suspense>
        <main>
          <Container className="h-full flex max-md:flex-col py-6 gap-[3.5%] max-md:gap-8">
            {reviews.length > 0 ? (
              <>
                <div className="flex-[3] flex flex-col gap-4 max-md:order-2">
                  <Review key={reviewData.id} review={reviewData} />
                  <div className="flex items-center justify-between border-b border-b-[#D9D9D9] pb-4">
                    <p>Add a comment</p>
                    <button className="bg-light_button dark:bg-dark_button text-dark_text dark:text-light_text uppercase text-[0.9rem] w-fit py-3 rounded px-5 hover:bg-light_button_second transition-all duration-200 ease-linear max-md:py-2">
                      POST
                    </button>
                  </div>
                  {reviews.map((review) => (
                    <Review key={review.id} review={review} />
                  ))}
                </div>
              </>
            ) : (
              <ReviewSkeleton />
            )}
            <div className="flex-[2] max-md:order-1">
              <MobileGrid />
              <DesktopGrid />
            </div>
          </Container>
        </main>
      </section>
    </>
  );
}
