import React from "react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: "fa-sharp fa-solid fa-satellite-dish",
      title: "Calculated Weather",
      Text: "Built Wicket longer admire do barton vanity itself do in it.",
    },

    {
      id: 2,
      icon: "fa-solid fa-plane",
      title: "Best Flights",
      Text: "Engrossed listening. Park gate sell they west hard for the.",
    },

    {
      id: 3,
      icon: "fa-solid fa-microphone",
      title: "Local Events",
      Text: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },

    {
      id: 4,
      icon: "fa-solid fa-gear",
      title: "Customization",
      Text: "We deliver outsourced aviation services for military customers",
    },
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto text-center">
      <h4 className="text-gray-500 font-semibold uppercase tracking-wider mb-2 text-sm">
        Category
      </h4>
      <h2 className="text-3xl md:text-4xl font-bold text-[#14183e] mb-12 font-serif">
        We Offer Best Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((item) => (
          <div
            key={item.id}
            className="bg-white p-8 rounded-[36px] shadow-sm   group text-left"
          >
            <div className="w-16 h-16 flex items-center justify-center text-[#df6951] text-3xl mb-6">
              <i className={item.icon}></i>
            </div>
            <h3 className="text-xl font-semibold text-[#1e1e1e] mb-4">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.Text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
