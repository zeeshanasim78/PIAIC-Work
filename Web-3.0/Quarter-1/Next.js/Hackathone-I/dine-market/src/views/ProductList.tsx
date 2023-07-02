import React from "react";
import Image from "next/image"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"
import ProductCard from "@/components/ProductCard";

 const ProductList=() => {
    return (
        <div className="justify-evenly">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>         
        </div>
    )
 }

 export default ProductList