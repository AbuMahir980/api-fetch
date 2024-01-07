import React, { useEffect, useState } from "react";
import Card from "../shared/card/Card";

const Get = () => {
    const [products, setProducts] = useState([]);
    const [delProduct, setDelProduct] = useState({});

    useEffect(() => {
        return async () => {
        const getAllProducts = await fetch("https://dummyjson.com/products");
        // console.log("getAllProducts:", getAllProducts);
        const getProducts = await getAllProducts.json();
        // console.log("getProducts:", getProducts.products);
        setProducts(getProducts.products);
        };
    }, []);

    const delProducts = async () => {
        const getDelProducts = await fetch("https://dummyjson.com/products/1", {
            method: "DELETE",
        });
        // console.log("getDelProducts:", getDelProducts);
        const getDelItem = await getDelProducts.json();
        //   console.log("getDelItem:", getDelItem);
        setDelProduct(getDelItem);
        alert(`${getDelItem.title} has been deleted!`);
    }

    return (
        <div className="m-20 grid grid-cols-3 gap-10">
        {products.map((product, i) => (
            <Card key={i} {...product} to={`/card/${product.id}`} />
        ))}
        </div>
    );
};

export default Get;
