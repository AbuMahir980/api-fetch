import React, { useEffect, useState } from "react";
import Card from "../shared/card/Card";
import DelCard from "../shared/delCard/DelCard";

const Get = () => {
    const [products, setProducts] = useState([]);
    const [delProduct, setDelProduct] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        return async () => {
        const getAllProducts = await fetch("https://dummyjson.com/products");
        // console.log("getAllProducts:", getAllProducts);
        const getProducts = await getAllProducts.json();
        // console.log("getProducts:", getProducts.products);
        setProducts(getProducts.products);
        };
    }, []);

    async function handleModalToggle(userId) {
        const getDelProducts = await fetch(
            `https://dummyjson.com/products/${userId}`,
            {
                method: "DELETE",
            },
        );
        const getDelItem = await getDelProducts.json();
        setDelProduct(getDelItem);
        setIsModalOpen(!isModalOpen);
    }
        


    // const delProducts = async () => {
    //     const getDelProducts = await fetch("https://dummyjson.com/products/1", {
    //         method: "DELETE",
    //     });
    //     // console.log("getDelProducts:", getDelProducts);
    //     const getDelItem = await getDelProducts.json();
    //     //   console.log("getDelItem:", getDelItem);
    //     setDelProduct(getDelItem);
    //     // alert(`${getDelItem.title} has been deleted!`);
    // }

    return (
        <div className="m-20 grid grid-cols-3 gap-10 ">
            {products.map((product, i) => (
            <Card
                key={i}
                {...product}
                to={`/card/${product.id}`}
                onClick={() => handleModalToggle(product.id)}
            />
            ))}

            {isModalOpen && (
            <DelCard {...delProduct} setIsModalOpen={setIsModalOpen} />
            )}
        </div>
    );
};

export default Get;
