import React from "react";
import img1 from '../assets/img1.png'

const Hero = () => {
  return (
    <section className="bg-[#f5f9ff] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-xl mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Управление запасами розничного магазина
        </h1>
        <p className="text-gray-600 mb-6">
          Использование сервиса 1С-Товары помогает значительно упростить работу по управлению товарными остатками.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-[1000px] hover:bg-green-600 transition">
          Заказать демонстрацию
        </button>
      </div>
      <img
        src={img1}
        alt="Превью"
        className="w-[508px] h-auto"
      />
    </section>
  );
};

export default Hero;
