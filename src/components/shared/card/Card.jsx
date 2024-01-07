import React from "react";
import { Link } from "react-router-dom";

const Card = ({ images, thumbnail, to, title, price, onClick }) => {
  return (
    <>
      <div className=" flex h-[22rem] w-[20rem] flex-col justify-between gap-5 overflow-hidden rounded-xl bg-blue-950 p-5 drop-shadow-2xl">
        <div className="h-[5rem] w-full">
          <img
            src={thumbnail}
            alt={images}
            className="h-[12rem] w-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="mt-[6rem] flex justify-between gap-5 text-sm font-semibold text-sky-50">
          <p>{title}</p>
          <p>${price}</p>
        </div>

        <div className="flex justify-between">
          <button
            onClick={onClick}
            className="rounded-[0.5rem] bg-sky-300 px-[1rem] py-[0.5rem] text-center font-bold text-blue-950 "
          >
            Delete
          </button>
          <Link to={to}>
            <button className="rounded-[0.5rem] bg-indigo-900 px-[1rem] py-[0.5rem] text-center font-bold text-white ">
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
