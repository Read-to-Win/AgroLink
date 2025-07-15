import empowerImg from "../assets/farmer.jpg";
import rentalImg from "../assets/RE.jpg";
import equipmentImg from "../assets/equipment.jpg";

const testimonials = {
  empowering: [
    {
      name: "Kwabena A.",
      quote:
        "For the first time, I secured funding for inputs without going through middlemen. AgroPulse gave me the dignity to farm confidently.",
    },
    
  ],
  rentals: [
    {
      name: "Zainab A.",
      quote:
        "The rental process was easy, fair, and fast. Everything was clear, and I didn’t have to leave my farm.",
    },
  ],
  equipment: [
    {
      name: "Joseph N.",
      quote:
        "The tools I rented were in top condition and delivered on time. It made my harvest season far more productive.",
    },
  ],
};

const CommunityTestimonials = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 font-sans border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-green-950">What Our Community Says</h2>
        <p className="text-gray-600 mt-2">
          Stories of impact from farmers and partners using AgriTech
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 px-20">
        {/* Empowering Farmers */}
        <div className="bg-gray-200 h-fit p-5 rounded-lg shadow-sm">
          <img
            src={empowerImg}
            alt="Empowering Farmers"
            className="w-full h-40 mb-5 rounded-lg object-cover shadow-md"
          />
          <h3 className="text-2xl font-semibold text-green-900 mb-4 text-center">
            Empowering Farmers
          </h3>
          <div className="space-y-6">
            {testimonials.empowering.map((t, index) => (
              <div key={index}>
                <p className="text-gray-700 italic">“{t.quote}”</p>
                <p className="mt-2 text-sm font-semibold text-green-800">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seamless Rentals */}
        <div className="bg-gray-200 p-5 rounded-lg shadow-sm ">
          <img
            src={rentalImg}
            alt="Seamless Rentals"
            className="w-full h-40 mb-5 rounded-lg object-cover shadow-md"
          />
          <h3 className="text-2xl font-semibold text-green-900 mb-4 text-center">
            Seamless Rentals
          </h3>
          <div className="space-y-6">
            {testimonials.rentals.map((t, index) => (
              <div key={index}>
                <p className="text-gray-700 italic">“{t.quote}”</p>
                <p className="mt-2 text-sm font-semibold text-green-800">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reliable Equipment */}
        <div className="bg-gray-200 p-5 rounded-lg shadow-sm h-fit">
          <img
            src={equipmentImg}
            alt="Reliable Equipment"
            className="w-full h-40 mb-5 rounded-lg object-cover shadow-md"
          />
          <h3 className="text-2xl font-semibold text-green-900 mb-4 text-center">
            Reliable Equipment
          </h3>
          <div className="space-y-6">
            {testimonials.equipment.map((t, index) => (
              <div key={index}>
                <p className="text-gray-700 italic">“{t.quote}”</p>
                <p className="mt-2 text-sm font-semibold text-green-800">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;
