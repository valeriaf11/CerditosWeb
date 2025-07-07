import React from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white p-8 rounded-3xl shadow-xl border border-pink-200">
          <h1 className="text-3xl font-bold mb-4 text-center text-pink-700">
            🐷 Contáctanos
          </h1>
          <p className="text-center text-gray-600 mb-6">
            ¿Tienes dudas sobre nuestros peluches? ¡Escríbenos, oink oink!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1 text-pink-800">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-pink-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium mb-1 text-pink-800">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full border border-pink-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Ej. Pedido, duda, recomendación"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1 text-pink-800">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border border-pink-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Escribe tu mensaje aquí... 🐽"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
