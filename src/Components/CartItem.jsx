import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useGlobalContext } from "./Context";

const CartItem = () => {
  const { cart, remove } = useGlobalContext();

  return (
    <section>
      {cart.map((item, index) => {
        const { id, title, price, img } = item;

        return (
          <article
            className="flex justify-between w-full sm:w-[600px] p-5 gap-x-20"
            key={id}
          >
            <div className="flex gap-8 items-start">
              <img src={img} alt={title} className="w-10" />
              <div>
                <h1 className="text-base sm:text-lg font-medium">{title}</h1>
                <p className="text-gray-600">${price}</p>
                <button className="text-red-500" onClick={() => remove(id)}>
                  remove
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-5">
              <button className="hover:bg-blue-500 p-2 sm:p-3 rounded-full text-sm sm:text-base active:bg-blue-800 hover:text-white transition-colors duration-300">
                <FaMinus />
              </button>
              <h1 className="font-bold text-blue-500">1</h1>
              <button className="hover:bg-blue-500 p-2 sm:p-3 rounded-full text-sm sm:text-base active:bg-blue-800 hover:text-white transition-colors duration-300">
                <FaPlus />
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default CartItem;
