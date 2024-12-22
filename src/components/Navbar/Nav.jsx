import React from "react";
import Logo from "../../assets/Logo.png";

// Daftar tautan navigasi
const NavLinks = [
    {
        id: 1,
        title: "About",
        link: "#about",
    },
    {
        id: 2,
        title: "Service",
        link: "#services",
    },
    {
        id: 3,
        title: "Team",
        link: "#team",
    },
    {
        id: 4,
        title: "Contact",
        link: "#contact",
    },
];

const Nav = () => {
    return (
        <div className="container py-4 flex justify-between items-center">
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
                        className="mx-8 text-sm font-semibold text-gray-700 hover:text-gray-900"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Nav;
