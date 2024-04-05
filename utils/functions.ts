import { v4 as uuidV4 } from "uuid";

import { Review } from "@/types/types";

export const generateRandomReviews = () => {
  const reviews: Review[] = [];

  for (let i = 0; i < 15; i++) {
    const review = {
      id: uuidV4(),
      body: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
      rating: Math.floor(Math.random() * 5) + 1,
      likes: Math.floor(Math.random() * 1000),
      dislikes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 200),
      date: `${Math.floor(Math.random() * 12) + 1} months ago`,
      name: "James T.",
      anonymous: Math.random() < 0.5,
    };
    reviews.push(review);
  }

  return reviews;
};
