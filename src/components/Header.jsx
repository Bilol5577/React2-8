import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center border-b border-gray-200">
      <div className="text-green-600 font-bold text-lg">1C-Товары</div>
      <nav className="flex space-x-6 text-sm">
        <a href="#" className="text-gray-700 hover:text-green-600">Как это работает</a>
        <a href="#" className="text-gray-700 hover:text-green-600">Инструкции</a>
        <a href="#" className="text-gray-700 hover:text-green-600">Продукты</a>
        <a href="#" className="text-gray-700 hover:text-green-600">База знаний </a>
        <a href="#" className="text-gray-700 hover:text-green-600">О нас</a>
      </nav>
      <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-[1000px] hover:bg-green-600 transition ">
      Вход
      </button>
    </header>
  );
};

export default Header;
