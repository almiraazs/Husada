import React from "react";
import Logo from "../../assets/Logo.png";

// Daftar tautan navigasi
const NavLinks = [
  {
    id: 1,
    title: "About",
    link: "#about", // Link ke bagian About
  },
  {
    id: 2,
    title: "Service",
    link: "#services", // Link ke bagian Services
  },
  {
    id: 3,
    title: "Team",
    link: "#team", // Link ke bagian Team
  },
  {
    id: 4,
    title: "Contact",
    link: "#contact", // Link ke bagian Contact
  },
];

const Nav = () => {
  return (
    <div className="container py-4 flex justify-between items-center sticky top-0 z-10 bg-white shadow-md">
      {/* Bagian Logo */}
      <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" className="w-10" />
        <span className="text-2xl font-bold">KPRI Husada</span>
      </div>
      {/* Bagian Tautan */}
      <div className="hidden md:flex">
        {NavLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="mx-8 text-sm font-semibold text-gray-700 hover:text-green-400"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
