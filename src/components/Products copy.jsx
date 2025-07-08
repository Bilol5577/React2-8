import React from "react";

const Products = () => {
  return (
    <section className="py-12 px-6 md:px-16" style={{background: 'linear-gradient(252.7deg, #EBF5EB 17.34%, #EFFBF0 90.57%)',}}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left">Популярные продукты</h2>
      <div className="flex justify-around">
        <div className="w-[424px] h-[348px] pt-[40px] pl-[10px] rounded-[40px] shadow text-center bg-[white]">
            <div className="flex gap-[20px] items-center">
                <p className="text-[20px] w-[219px]">1С-Товары 300</p>
                <button className="text-green-600 w-[105px] h-[28px] text-[14px] rounded-[40px] border-2">400 руб/мес</button>
            </div>
            <ul className="pl-[40px] text-[14px] mt-[20px]"  style={{ lineHeight: '159%' }}>
                <li className="w-[344px] text-left text-gray-500">Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</li>
                <li className="w-[344px] text-left text-gray-500">Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</li>
                <li className="w-[344px] text-left text-gray-500">Анализ работы розничного магазина или сети магазинов</li>
                <li className="w-[344px] text-left text-gray-500">Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</li>
            </ul>
            <button className="text-[14px] text-green-600 mt-[30px] ml-[240px]">Подробнее</button>
        </div>
        <div className="w-[424px] h-[348px] bg-[white] pt-[40px] pl-[10px] rounded-[40px] shadow text-center">
            <div className="flex gap-[20px] items-center">
                <p className="text-[20px] w-[219px]">1С-Товары 300</p>
                <button className="text-green-600 w-[105px] h-[28px] text-[14px] rounded-[40px] border-2">400 руб/мес</button>
            </div>
            <ul className="pl-[40px] text-[14px] mt-[20px]"  style={{ lineHeight: '159%' }}>
                <li className="w-[344px] text-left text-gray-500">Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</li>
                <li className="w-[344px] text-left text-gray-500">Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</li>
                <li className="w-[344px] text-left text-gray-500">Анализ работы розничного магазина или сети магазинов</li>
                <li className="w-[344px] text-left text-gray-500">Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</li>
            </ul>
            <button className="text-[14px] text-green-600 mt-[30px] ml-[240px]">Подробнее</button>
        </div>
        <div className="w-[424px] h-[348px] bg-[white] pt-[40px] pl-[10px] rounded-[40px] shadow text-center">
            <div className="flex gap-[20px] items-center">
                <p className="text-[20px] w-[219px]">1С-Товары 300</p>
                <button className="text-green-600 w-[105px] h-[28px] text-[14px] rounded-[40px] border-2">400 руб/мес</button>
            </div>
            <ul className="pl-[40px] text-[14px] mt-[20px]"  style={{ lineHeight: '159%' }}>
                <li className="w-[344px] text-left text-gray-500">Прогноз спроса с использованием сервера прогнозирования (ограничение – 300 товаров)</li>
                <li className="w-[344px] text-left text-gray-500">Контроль товарных остатков и автоматический заказ товаров (ограничение – 300 товаров)</li>
                <li className="w-[344px] text-left text-gray-500">Анализ работы розничного магазина или сети магазинов</li>
                <li className="w-[344px] text-left text-gray-500">Рекомендации по управлению ассортиментом (1С-Ритейл Чекер)</li>
            </ul>
            <button className="text-[14px] text-green-600 mt-[30px] ml-[240px]">Подробнее</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
