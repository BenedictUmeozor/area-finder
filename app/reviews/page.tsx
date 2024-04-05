"use client";

import Container from "@/components/Container";
import SearchHeader from "./SearchHeader";
import Review from "@/components/Review";
import CreateReview from "@/components/CreateReview";
import { useState } from "react";
import toast from "react-hot-toast";
import CheckCircle from "@/assets/icons/CheckCircle";
import DesktopGrid from "./DesktopGrid";
import MobileGrid from "./MobileGrid";

export default function Page() {
  const [showForm, setShowForm] = useState(false);

  const displayForm = () => setShowForm(true);
  const removeForm = () => setShowForm(false);

  const submitForm = () => {
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
            <div className="flex-[3] flex flex-col gap-4 max-md:order-2">
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
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
