import React from "react";

const features = [
  { title: "Управление запасами", desc: "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков." },
  { title: "Автозаказ товаров", desc: "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты." },
  { title: "Анализ магазина", desc: "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой." },
  { title: "Прогнозирование спроса", desc: "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты."},
  { title: "Управление поставками", desc: "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты."},
  { title: "Управление ассортиментом", desc: "Сервис 1С-Товары позволяет определить ассортиментную матрицу. Быстро и просто принять решение о том какие товары вывести из ассортимента, а наличие каких увеличить на полках магазина. Сервис позволяет узнать необходимую информацию: динамику продаж и остатков, периоды дефицита, размер оптимального остатка."},
  { title: "Управление продажами", desc: "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой."}

];

const Features = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Возможности</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
            <button className="w-[146px] h-[42px] rounded-[100px] border-2 border-[#43A548] text-[#43A548] mt-[32px]  hover:bg-green-600 transition hover:text-[white]">Подробнее</button>
          </div>
        ))}
      </div>
      <div className="w-80% pt-[39px] pb-[39px] rounded-[100px] mt-[40px] flex justify-around items-center" style={{background: 'linear-gradient(252.7deg, #EBF5EB 17.34%, #EFFBF0 90.57%)'}}>
        <p className="text-[20px] text-green-700">Подключи любой продукт на 1 месяц бесплатно и оцени наши приемущества</p>
        <button  className="bg-green-500 text-white px-6 py-3 rounded-[1000px] hover:bg-green-600 transition"> Подключить сейчас</button>
      </div>
    </section>
  );
};

export default Features;
