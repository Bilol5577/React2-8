import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E26] text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-row justify-between gap-10">
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
              🛒
            </div>
            <h1 className="font-semibold text-white">1C–Товары</h1>
          </div>
          <div>
            <p>Линия консультации</p>
            <p className="text-white font-semibold">+7(495)-111-00-10</p>
          </div>
          <div>
            <p>Наш e-mail</p>
            <p className="text-green-400 font-semibold">info@rozn.info</p>
          </div>
          <button className="mt-2 w-max bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 transition">
            Заказать звонок
          </button>
          <p className="mt-4">
            Для активации перейдите на{" "}
            <a
              href="https://portal.1c.ru"
              className="underline text-gray-100 hover:text-white"
            >
              portal.1c.ru
            </a>{" "}
            или обратитесь к Вашему партнеру 1С.
          </p>
          <p>Инструкция по установке сервиса</p>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Информация</h3>
          <p>Как это работает</p>
          <p>Инструкции</p>
          <p>Блог</p>
          <p>О нас</p>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-white font-semibold mb-2">Продукты</h3>
          <p className="text-green-400">1С–Ритейл Чекер Демо</p>
          <p>1С–Товары.Тестовый для магазина на 1 месяц</p>
          <p>1С–Ритейл Чекер</p>
          <p>1С–Товары 300</p>
          <p>1С–Товары 30000</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-xs text-center text-gray-400">
        <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4">          <span>
            Сайт создан –{" "}
            <a
              href="https://wtstudio.ru"
              className="hover:underline text-white"
            >
              wtstudio.ru
            </a>
          </span></div>
      </div>
    </footer>
  );
};

export default Footer;