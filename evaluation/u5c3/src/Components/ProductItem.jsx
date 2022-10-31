import React from "react";

const ProductItem = ({id,title,price,image,category}) => {
  return (
    <div
      data-testid="product-item"
      key={id}
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        flexDirection: "column",
      }}
    >

      <img data-testid="product-image" src={image} height="100px" alt={title}/>
      <b data-testid="product-title">{title}</b>
      <span data-testid="product-price">{price}</span>
      <div style={{ display: "flex" }}>
        <b data-testid="product-category">{category}</b>
      </div>
    </div>
  );
};
export default ProductItem;
