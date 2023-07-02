import React from "react";
import Image from "next/image"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"

 const ProductCard=() => {
    return (
        <div className="m-5">
            <Image src={P1} alt="Brushed Raglan Sweatshirt"></Image>
            <h3 className="font-bold text-lg mt-3"> Brushed Raglan Sweatshirt</h3>
            <p className="font-bold text-lg "> $ 195.0</p>
          
        </div>
    )
 }

 export default ProductCard