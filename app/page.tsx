import BoxReview from "@/components/BoxReview";
import Container from "@/components/Container";
import Header from "@/components/Header";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <section className="page-section">
      <Header />
      <main>
        <Container className="h-full max-lg:grid max-lg:place-items-center flex items-center justify-center gap-[7.5%]">
          <div className="flex-1">
            <h1 className="font-bold max-md:text-4xl text-6xl mb-8">
              Find a place you <br className="max-lg:hidden" /> will love to
              live!
            </h1>
            <p className="text-lg mb-6 max-md:text-base">
              See through the lenses of people who have lived or visited the
              neighbourhood you might have in mind.
            </p>
            <HomeSearch />
          </div>
          <div className="max-lg:hidden flex-1 grid grid-cols-2 gap-4 self-start bg-lighter_bg dark:bg-[#242428]">
            <BoxReview amenity="network" />
            <BoxReview amenity="water" />
            <BoxReview amenity="traffic" />
            <BoxReview amenity="power" />
          </div>
        </Container>
      </main>
    </section>
  );
}
