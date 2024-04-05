"use client";

import Container from "@/components/Container";
import SearchHeader from "./components/SearchHeader";
import Review from "@/app/reviews/components/Review";
import CreateReview from "@/app/reviews/components/CreateReview";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CheckCircle from "@/assets/icons/CheckCircle";
import DesktopGrid from "./components/DesktopGrid";
import MobileGrid from "./components/MobileGrid";
import { Review as ReviewType } from "@/types/types";
import { generateRandomReviews } from "@/utils/functions";
import ReviewSkeleton from "@/app/reviews/components/ReviewSkeleton";

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

  return (
    <>
      {showForm && <CreateReview action={submitForm} close={removeForm} />}
      <section className="page-section">
        <SearchHeader action={displayForm} />
        <main>
          <Container className="h-full flex max-md:flex-col py-6 gap-[3.5%]">
            {reviews.length > 0 ? (
              <>
                {" "}
                <div className="flex-[3] flex flex-col gap-4 max-md:order-2">
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
