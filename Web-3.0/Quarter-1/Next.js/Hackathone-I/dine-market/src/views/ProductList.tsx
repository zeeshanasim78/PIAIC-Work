import React from "react";
import Image,{StaticImageData} from "next/image"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"

import ProductCard from "@/components/ProductCard";

 const ProductList=() => {
    return (
        <div>

            <div> {/* Promotions Section*/}
                <div className="text-sm leading-none text-center text-blue-400 mt-10 font-extrabold"> PROMOTIONS </div>
               
                <div>
                    <h2 className="mt-5  text-3xl text-center font-semibold">
                    Our Promotions Events
                    </h2> 
                </div>
                <div className="flex justify-evenly"> 
                   <div className=" flex-rows"> {/*Column 1*/}
                        <div> Row 1 </div>
                        <div> Row 2</div>
                    </div>

                    <div> {/*Column 2*/}

                    </div>

                    <div> {/*Column 3*/}

                    </div>
                </div>    
            </div>

            <div> {/* Products Card Section*/}
                <div className="text-sm leading-none text-center text-blue-400 mt-10 font-extrabold"> PRODUCTS </div>
                <div>
                <h2 className="mt-5  text-3xl text-center font-semibold">
                        Check What We Have
                    </h2> 
                </div>
                <div className="flex justify-evenly"> 
                    <ProductCard title="Brushed Raglan Sweatshirt" price={195} img={P1} />
                    <ProductCard title="Brushed Bomber" price={255} img={P2}/>
                    <ProductCard title="Flex Sweatshirt" price={175} img={P3}/>    
                </div>    
            </div>
        </div>
       
    )
 }

 export default ProductList