import React from "react";
import Image,{StaticImageData} from "next/image"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"

import ProductCard from "@/components/ProductCard";

 const ProductList=() => {
    return (
        <div className="flex justify-evenly">
            <ProductCard title="Brushed Raglan Sweatshirt" price={195} img={P1} />
            <ProductCard title="Brushed Bomber" price={255} img={P2}/>
            <ProductCard title="Flex Sweatshirt" price={175} img={P3}/>         
        </div>
    )
 }

 export default ProductList