import { Link } from "react-router-dom";
import heroImg from "../../../public/assets/trendix-hero.webp";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Trendix"
        className="w-full h-[400px] md:h-[600px] lg:h-[700px]"
      />
      <div className="absolute inset-0  flex items-center justify-center">
        <di className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase justify-center">
            VACATION <br />
            Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            {" "}
            Explore our vacation-reaty outfits withfast worldwide shipping.
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            Shop now
          </Link>
        </di>
      </div>
    </section>
  );
};

export default Hero;
