import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false);

  function handleAddItem() {
    setAddToCart(() => !addToCart);
  }

  const itemClass = addToCart ? "in-cart" : "";
  const buttonClass = addToCart ? "remove" : "add";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddItem}>
        {addToCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;