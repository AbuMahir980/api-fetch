import React from "react";
import { Link } from "react-router-dom";

const Card = ({ images, thumbnail, to }) => {
  return (
    <Link to={to}>
      <div className=" h-[20rem] w-[20rem] overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="h-full w-full">
          <img src={thumbnail} alt={images} className="" />
        </div>
        {/* <div>
        <p>{title}</p>
        <p>${price}</p>
      </div> */}
      </div>
    </Link>
  );
};

export default Card;
