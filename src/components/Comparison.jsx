import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const Comparison = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-[#f0fdf4]">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left">С нами удобнее</h2>
      <div className="bg-white shadow rounded p-6 text-center flex justify-between ">
       <div className="w-[646px] h-[553px] border-1 rounded-[40px] pt-[40px]">
        <p className="text-[25px]">Без 1С-Товары</p>
        <div className="text-left pl-[84px] pr-[80px] pt-[40px]">
            <p>Лишний товар складируется и не продается</p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCheckCircle  className="text-green-500 " size={28}/>Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCheckCircle  className="text-green-500 " />Лишний товар складируется и не продается</p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCheckCircle  className="text-green-500 " size={28}/>Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCheckCircle  className="text-green-500 " />Лишний товар складируется и не продается</p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCheckCircle  className="text-green-500 " size={28}/>Постоянно приходится думать какой продукт будет актуален, а какой стоит выводить из ассортимента</p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCheckCircle  className="text-green-500 " />Лишний товар складируется и не продается</p>
        </div>
       </div>
       <div className="w-[646px] h-[553px]  border-1 rounded-[40px]  pt-[40px]" style={{background: 'linear-gradient(252.7deg, #EBF5EB 17.34%, #EFFBF0 90.57%)'}}>
        <p className="text-[25px]">Вместе с 1С-Товары</p>
        <div className="text-left pl-[84px] pr-[80px] pt-[40px]">
            <p>Организованная система остатков</p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCancel   className="text-red-500 " size={28}/>В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент </p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCancel   className="text-red-500 "/>Рассчитанный прогноз спроса</p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCancel   className="text-red-500 " size={28}/>В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент </p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCancel   className="text-red-500 "/>Организованная система остатков</p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCancel   className="text-red-500 " size={28}/>В магазине есть определенная ассортиментная матрица, поддерживающая актуальный ассортимент </p>
            <p className="mt-[20px] flex items-center gap-[5px]"><MdCancel   className="text-red-500 "/>Система контроля упущенных продаж</p>
        </div>
       </div>
      </div>
    </section>
  );
};

export default Comparison;
