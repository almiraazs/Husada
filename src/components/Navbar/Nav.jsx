import Logo from "../../assets/logo-kpri.jpg";

// Daftar tautan navigasi
const NavLinks = [
  {
    id: 1,
    title: "Service",
    link: "#services", // Link ke bagian Services
  },
  {
    id: 2,
    title: "Location & Operasional Hours",
    link: "#location-hours", // Link ke bagian Services
  },
  {
    id: 3,
    title: "Contact",
    link: "#contact",
  },
];

const Nav = () => {
  return (
    <nav className="sticky top-0 z-10 border-b bg-white shadow">
      <div className="container flex items-center justify-between px-6 py-4">
        {/* Bagian Logo */}
        <div className="flex items-center gap-3 text-gray-900">
          <img src={Logo} alt="logo" className="w-20" />
          <span className="pointer-events-none text-xl font-bold">KPRI Husada</span>
        </div>
        {/* Bagian Tautan */}
        <div className="hidden md:flex">
          {NavLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="mx-8 text-sm font-semibold text-gray-700 underline-offset-4 hover:text-emerald-500"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;