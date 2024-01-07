import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const SingleCard = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [carousels, setCarousel] = useState([])
  const { id } = useParams();

  useEffect(() => {
    return async () => {
      const getSingleProduct = await fetch(
        `https://dummyjson.com/products/${id}`,
      );
      // console.log("getSingleProduct:", getSingleProduct);
      const singleProduct = await getSingleProduct.json();
      // console.log("singleProduct:", singleProduct);
      setSingleProduct(singleProduct);
      setCarousel(singleProduct.images);
      console.log("singleProduct.images:", singleProduct.images);
    };
  }, [singleProduct]);
  return (
    <div className="w-[20rem] h-[30rem] overflow-hidden bg-white drop-shadow-lg">
      <div className="">
        <Carousel>
          {carousels.map((carousel, i) => (
            <img src={carousel} key={i} alt="jjj" />
          ))}
        </Carousel>
      </div>

      <div className="gap-10 bg-slate-200 pt-2 drop-shadow-lg">
        <div className="flex justify-between">
          <p>{singleProduct.title}</p>

          <p>$ {singleProduct.price}</p>
        </div>
        <p>{singleProduct.description}</p>
        <p>{singleProduct.discountPercentage}</p>
        <p>{singleProduct.rating}</p>
      </div>
    </div>
  );
};

export default SingleCard;
