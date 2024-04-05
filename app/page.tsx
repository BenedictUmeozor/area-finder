import SearchIcon from "@/assets/icons/Search";
import BoxReview from "@/components/BoxReview";
import Container from "@/components/Container";
import Header from "@/components/Header";

export default function Home() {
  return (
    <section className="page-section">
      <Header />
      <main>
        <Container className="h-full max-lg:grid max-lg:place-items-center flex items-center justify-center gap-[7.5%]">
          <div className="flex-1">
            <h1 className="font-bold max-md:text-4xl text-6xl mb-8">
              Find a place you <br className="max-lg:hidden" /> will love to live!
            </h1>
            <p className="text-lg mb-6 max-md:text-base">
              See through the lenses of people who have lived or visited the
              neighbourhood you might have in mind.
            </p>
            <div className="relative h-12 mb-4">
              <input
                type="text"
                placeholder="Enter Address"
                className="h-full w-full focus:outline-none bg-lightest_bg dark:bg-darkest_bg  border rounded border-last_light_bg dark:border-darker_bg pl-[7%] pr-2 max-md:text-[0.9rem]"
              />
              <SearchIcon className="w-4 absolute top-1/2 left-[2%] -translate-y-1/2" />
            </div>
            <button className="button">Search</button>
          </div>
          <div className="max-lg:hidden flex-1 grid grid-cols-2 gap-4 self-start">
            <BoxReview />
            <BoxReview />
            <BoxReview />
            <BoxReview />
          </div>
        </Container>
      </main>
    </section>
  );
}
