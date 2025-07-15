import genLogo from "../assets/Generation.png";
import mestLogo from "../assets/mest.jpg";
import mcLogo from "../assets/MsC.webp";
import btlLogo from "../assets/btl.jpeg";

const sponsors = [
  {
    name: "Generation Ghana",
    logo: genLogo,
    description:
      "Empowering young farmers through vocational training and entrepreneurship.",
  },
  {
    name: "MEST",
    logo: mestLogo,
    description:
      "Supporting agritech innovation through incubation and seed funding.",
  },
  {
    name: "Mastercard Foundation",
    logo: mcLogo,
    description:
      "Funding inclusive agricultural finance.",
  },
  {
    name: "BTL Group",
    logo: btlLogo,
    description:
      "Delivering digital infrastructure and mobile money solutions to rural communities.",
  },
];

const SponsorsSection = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-20 border-t border-green-100 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-green-950">
          Our Sponsors & Partners
        </h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
          AgriTech appreciates these organizations helping to grow agriculture in Ghana.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center">
        {sponsors.map((sp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
          >
            <img
              src={sp.logo}
              alt={sp.name}
              className="mx-auto mb-4 w-32 h-32 object-contain"
            />
            <h3 className="text-xl font-semibold text-green-900">
              {sp.name}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{sp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
