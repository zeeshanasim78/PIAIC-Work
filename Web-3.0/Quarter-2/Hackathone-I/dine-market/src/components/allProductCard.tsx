import React from 'react'
import Image from "next/image"

function allProductCard(props:{title:string,price:number,img:string}) {
  return (
        <div className="m-10">
            <Image src={props.img} alt="Brushed Raglan Sweatshirt" width={250} height={300}></Image>
            <h3 className="font-bold text-lg mt-3"> {props.title}</h3>
            <p className="font-bold text-lg "> $ {props.price}</p>
          
        </div>
    )
}

export default allProductCard