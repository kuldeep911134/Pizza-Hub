import React from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../Redux/Slices/CartSlice";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, name, qty, price, img }));
          toast(`${name} Removed!`, {
            icon: "👏",
          });
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <CiSquarePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className=" border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <CiSquareMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className=" border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
