import React from "react";

const Destinations = () => {
  const destinationsData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=600&auto=format&fit=crop",
      title: "Rome, Italty",
      price: "$5,42k",
      duration: "10 Days Trip",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop",
      title: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop",
      title: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
    },
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h4 className="text-gray-500 font-semibold uppercase tracking-wider mb-2 text-sm">
        Top Selling
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-[#14183e] mb-16 font-serif">
        Top Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {destinationsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[36px]  shadow-lg overflow-hidden text-left"
          >
            <div className="h-90 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover "
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4 text-lg font-semibold text-[#5e6282]">
                <h3>{item.title}</h3>
                <span>{item.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <i className="fa-solid fa-location-arrow text-black"></i>
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
