import React from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-pink-100 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 text-pink-800">
            Nuestros Servicios 🐷
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-200 rounded-full mb-4">
              
              </div>
              <h2 className="text-xl font-semibold mb-2 text-pink-700">Peluches Personalizados</h2>
              <p className="text-gray-700">
                Elige tu cerdito ideal: rosa, abeja, unicornio o más. ¡Tenemos peluches únicos y adorables!
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                
              </div>
              <h2 className="text-xl font-semibold mb-2 text-yellow-600">Empaques de Regalo</h2>
              <p className="text-gray-700">
                Sorprende a alguien especial con un empaque tierno, decorado y con mensaje personalizado. 🎁
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                
              </div>
              <h2 className="text-xl font-semibold mb-2 text-green-700">Envíos a Todo México</h2>
              <p className="text-gray-700">
                Recibe tu cerdito de peluche donde estés 🐽. ¡Rápido, seguro y en perfecto estado!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
