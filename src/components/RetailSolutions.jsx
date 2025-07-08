import React from "react";

const RetailSolutions = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-[#eef2ff] text-[white]">
      <div className="w-[90%] h-[442px] rounded-[40px] mx-auto flex items pt-[60px] gap-[80px] pl-[60px] pr-[60px]" style={{background: 'linear-gradient(100.98deg, #43A548 -4.14%, #52E259 108.69%)'}}>
        <div>
            <h1 className="text-[32px]">Хотите бесплатную консультацию? Оставляйте заявку</h1>
            <p className="text-[20px] mt-[20px]">Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее время </p>
        </div>
        <div>
            <div>
                <p>Ваше имя</p>
                <input type="text" placeholder="Ваше имя" className="w-[574px] h-[42px] border-2 rounded-[20px] pl-[20px] bg-[white] text-[gray]"/>
            </div><br />
            <div>
                <p>Ваш телефон</p>
                <input type="text" placeholder="Ваш телефон " className="w-[574px] h-[42px] border-2 rounded-[20px] pl-[20px] bg-[white] text-[gray]"/>
            </div><br />
            <div>
                <p>Ваш e-mail</p>
                <input type="text" placeholder="Ваш e-mail " className="w-[574px] h-[42px] border-2 rounded-[20px] pl-[20px] bg-[white] text-[gray]"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RetailSolutions;
