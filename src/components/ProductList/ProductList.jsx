import React from "react";
import useFetch from "../../hooks/useFetch";
import "./ProductList.css";

const ProductList = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <p className='center-screen'>Loading...</p>;
  if (error) return <p className='center-screen error'>Error: {error}</p>;

  return (
    <div>
      <h1 className='title'>Product List</h1>
      <div className='product-container'>
        {data &&
          data.slice(0, 10).map((product) => (
            <div key={product.id} className='product-card'>
              <img
                src={product.images[0]}
                alt={product.title}
                className='product-image'
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
