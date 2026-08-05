import React from "react";

const navbarlinks = [
  {
    name: "Destinations",
    link: "#destinations",
  },

  {
    name: "Hotels",
    link: "#hotels",
  },

  {
    name: "Flights",
    link: "#flights",
  },

  {
    name: "Bookings",
    link: "#bookings",
  },

  {
    name: "Login",
    link: "#login",
  },

  {
    name: "Sign up",
    link: "#sign-up",
  },
];

export default function Navbar() {
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto px-6 py-5">
      <div className="text-3xl font-bold">Travello</div>

      <nav>
        <ul className="flex items-center gap-18">
          {navbarlinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-gray-600 hover:text-black font-medium transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
