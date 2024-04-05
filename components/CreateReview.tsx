"use client";

import { Rating } from "@smastrom/react-rating";
import { FormEvent, memo, useEffect, useState } from "react";
import { ChevronDown } from "react-feather";
import { v4 as uuidV4 } from "uuid";

type Props = {
  action: () => void;
  close: () => void;
};

const amenities: string[] = [
  "parking lot",
  "free wifi",
  "parking lot",
  "free wifi",
  "parking lot",
  "nightlife",
  "pet store",
  "nightlife",
  "pet store",
  "nightlife",
  "hospitals",
  "childcare",
  "hospitals",
  "childcare",
  "hospitals",
  "adult home",
  "gym",
  "adult home",
  "gym",
  "adult home",
  "schools",
  "security",
  "schools",
  "security",
  "schools",
];

const CreateReview = memo(({ action, close }: Props) => {
  const [rating, setRating] = useState(0);
  const [showAmenities, setShowAmenities] = useState(false);
  const [review, setReview] = useState("");
  const [chosenAmenities, setChosenAmenities] = useState<string[]>([]);
  const [disableButton, setDisableButton] = useState(true);

  const modifyAmenities = (checked: boolean, value: string) => {
    if (checked) {
      chosenAmenities.push(value);
    } else {
      const newAmenities = chosenAmenities.filter((a) => a !== value);
      console.log("new : " + newAmenities);
      setChosenAmenities(newAmenities);
    }
  };

  useEffect(() => {
    if (review.length > 0 && rating > 0 && chosenAmenities.length > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [review, rating, chosenAmenities]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    action();
  };

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-screen bg-[#1D3045] dark:bg-[#1E1E1E] opacity-[0.98] flex items-center justify-center">
      <form
        onSubmit={submit}
        className="max-w-2xl w-full bg-[#FAFCFD] rounded border border-[#D4DCF1] dark:bg-[#171717] p-4 py-6"
      >
        <h2 className="text-center mb-2 font-[500]">Review Location</h2>
        <p className="text-xl font-semibold mb-4">
          Bonny and Clyde Street, Ajao Estate, Lagos
        </p>
        <div className="mb-4 relative">
          <div
            className="flex items-center justify-between bg-lightest_bg dark:bg-darkest_bg  border rounded border-last_light_bg dark:border-darker_bg px-2 h-12 cursor-pointer"
            onClick={() => setShowAmenities((prev) => !prev)}
          >
            <span>Select Amenities</span>
            <ChevronDown className="w-4" />
          </div>
          {showAmenities && (
            <div className="bg-lightest_bg dark:bg-darkest_bg  border rounded border-last_light_bg dark:border-darker_bg px-2 absolute top-12 left-0 w-full z-20 grid grid-cols-5 p-4">
              {amenities.map((amenity) => (
                <div key={uuidV4()} className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    name={"amenity"}
                    id={amenity}
                    value={amenity}
                    onChange={(e) => modifyAmenities(e.target.checked, amenity)}
                    defaultChecked={chosenAmenities.includes(amenity)}
                  />
                  <label htmlFor={amenity}>{amenity}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-4">
          <p>Rate Location</p>
          <input type="hidden" name="rating" value={rating} />
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            onChange={setRating}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="mb-2 block">
            Write Review
          </label>
          <textarea
            name="review"
            id="review"
            rows={6}
            placeholder="Enter review"
            className="w-full bg-transparent  border rounded border-last_light_bg dark:border-darker_bg p-2 resize-none focus:outline-none"
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <input type="checkbox" name="anonymous" id="anonymous" />
          <label htmlFor="anonymous">Post as anonymous</label>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={disableButton}
            className="flex-1 border-2  bg-light_button dark:bg-dark_button text-dark_text dark:text-light_text uppercase text-[0.9rem] py-3 rounded px-5 hover:border-[1.5px] transition-all duration-200 ease-linear  disabled:opacity-25 disabled:cursor-not-allowed hover:bg-light_button_second"
          >
            SUBMIT
          </button>
          <button
            type="button"
            className="flex-1 border-[0.5px] border-light_button dark:border-dark_button text-light_button dark:text-dark_button uppercase text-[0.9rem] py-3 rounded px-5 hover:border-2 transition-all duration-200 ease-linear"
            onClick={close}
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
});

CreateReview.displayName = "CreateReview";
export default CreateReview;
