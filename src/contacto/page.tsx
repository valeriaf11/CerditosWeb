import React from "react";
import Navbar from "../app/components/Navbar"; 

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Contáctanos</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Tu nombre"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;