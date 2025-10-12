import { TeamCarousel } from "./TeamCarousel";

const Teams = () => {
  return (
    <section
      id="team-section"
      className="container-xl relative py-10 !pb-10 xl:py-20"
    >
      <div className="mb-12 flex flex-col items-center md:flex-row md:justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-4xl leading-[1.1] font-medium tracking-tight text-black 2xl:text-[48px]">
            Our <span className="text-lemon">Magicians</span>
          </h2>
        </div>
        <div className="md:text-right">
          <p className="text-gray w-full text-lg lg:ml-auto lg:w-60">
            Behind all of the successful projects
          </p>
        </div>
      </div>
      <TeamCarousel />
    </section>
  );
};

export default Teams;
