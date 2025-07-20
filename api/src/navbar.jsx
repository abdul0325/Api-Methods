import { NavLink } from "react-router";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `text-sm px-4 py-2 rounded-full mx-1 transition duration-300 ${
      isActive ? "bg-blue-500 text-white" : "hover:bg-gray-700"
    }`;

  return (
    <nav className="bg-gray-900 text-white py-3 px-6 flex flex-col md:flex-row items-center justify-between shadow-md sticky top-0 z-50">
      <NavLink
        to="/"
        className="font-bold text-2xl tracking-tight text-white hover:text-blue-400 transition duration-300"
      >
        User Site 🚀
      </NavLink>
      <div className="mt-2 md:mt-0 flex space-x-2">
        <NavLink to="/" className={navLinkClass}>
          API
        </NavLink>
        <NavLink to="/json" className={navLinkClass}>
          JSON
        </NavLink>
        <NavLink to="/add" className={navLinkClass}>
          Add New
        </NavLink>
      </div>
    </nav>
  );
}
