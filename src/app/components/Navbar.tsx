import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MiSitio</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-200 cursor-pointer">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="hover:text-gray-200 cursor-pointer">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-gray-200 cursor-pointer">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;