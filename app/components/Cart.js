"use client";

import { useState } from "react";

export default function Cart() {
    const [added, setCart] = useState(false);

  return (
    <button onClick={(e)=>{
        e.preventDefault()
        e.stopPropagation()
        setCart(!added);
    }}
    style={{
        width: "150px",
        height: "32px",
        borderRadius: "10px",
        backgroundColor: " #420D09",
        color: "White",
        fontSize: "15px",
      }}
>
      {added ? " 🛒Added to Cart" : " 🤸Remove from Cart"}
    </button>

  );
}


