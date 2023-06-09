import React from "react";

const Contact = () => {
  return (
    <div className="h-fit xl:h-fit xl:min-h-[100vh] flex items-center flex-col gap-12 border border-black">
      <div className="border-b mt-4 w-[90%] border-slate-300 h-20 flex justify-center items-center content-center gap-12">
        <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold font-sans">
          
          Contact Us!
        </h1>
      </div>
      <div className="w-[90%]  h-fit min-h-[50vh] flex flex-col xl:flex-row justify-around">
        <div className=" justify-evenly flex flex-col text-xl">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Working hours</h2>
            <div className="flex flex-col gap-4">
              <h2>Mon - Fri: 7:00 - 22:00</h2>
              <h2>Saturday: 8:00 - 22:00</h2>
              <h2>Sunday: 8:00 - 35:00</h2>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">Store location</h2>
            <div className="flex flex-col gap-4">
              <h2>Av. Fray A. Alcalde 10,</h2>
              <h2>44100 Guad., Jal., México</h2>
              <h2>info@misitio.com</h2>
              <h2>+52-1-33-12345678</h2>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="container mx-auto mt-8">
          <h2 className="text-center font-bold text-black">We are here to help!</h2>
          <h2 className="text-center font-bold text-black">
            Complete the form with any question you have in mind and we will
            answer you as soon as possible
          </h2>
              <form action="/enviar" method="post" className="max-w-md mx-auto">
                <div className="mb-4">
                  <label htmlFor="nombre" className="block font-bold mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="apellido" className="block font-bold mb-2">
                    Lastname:
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block font-bold mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="asunto" className="block font-bold mb-2">
                    Affair:
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="mensaje" className="block font-bold mb-2">
                    Message:
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-blue-600"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
