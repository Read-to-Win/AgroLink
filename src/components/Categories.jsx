import { useNavigate } from "react-router-dom";
import tractorImg from "../assets/tractor.jpg";
import harvesterImg from "../assets/harvester.jpg";
import plantingImg from "../assets/plant.jpg";
import tillageImg from "../assets/till.jpg";
import forageImg from "../assets/hay.jpg";
import irrigationImg from "../assets/irrigation.jpg";

const categories = [
  {
    name: "Tractors",
    image: tractorImg,
    description: "Powerful machines for plowing and towing tasks.",
    slug: "tractors",
  },
  {
    name: "Harvesters",
    image: harvesterImg,
    description: "Efficient harvesting tools for grains and crops.",
    slug: "harvesters",
  },
  {
    name: "Planting & Seeding",
    image: plantingImg,
    description: "Equipment for precise crop planting and seeding.",
    slug: "planting-seeding",
  },
  {
    name: "Tillage",
    image: tillageImg,
    description: "Tools for soil preparation before planting.",
    slug: "tillage",
  },
  {
    name: "Hay & Forage",
    image: forageImg,
    description: "Used for harvesting and managing livestock feed.",
    slug: "forage",
  },
  {
    name: "Irrigation",
    image: irrigationImg,
    description: "Watering systems to nourish crops efficiently.",
    slug: "irrigation",
  },
];

const EquipmentCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-950">Available Equipment</h2>
          <p className="text-gray-600 mt-2">Explore our categories of modern farm tools</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-20">
          {categories.map(({ name, image, description, slug }, index) => (
            <div
              key={index}
              onClick={() => navigate(`/products?category=${slug}`)}
              className="cursor-pointer group"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-52 object-cover rounded-md group-hover:opacity-90 transition duration-300"
              />
              <div className="mt-4 px-1">
                <h3 className="text-xl font-semibold text-green-900 group-hover:text-green-600 transition-colors duration-300">
                  {name}
                </h3>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentCategories;
