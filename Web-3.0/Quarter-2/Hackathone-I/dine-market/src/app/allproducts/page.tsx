import { getAllProducts } from "../../../lib/getAllProducts";
import AllProductCard from "@/components/allProductCard";
import P1 from "/public/p1.png"

export const generateMetadata = () => {
    return {
      title : "Dine Market | All Products ",
    };
  }

export default function allProducts() {
  const data = getAllProducts();
  return (
    <div>
      <div>
      {data?.map((item) =>
          ( 
          <div>
            <AllProductCard title={item.name} price={item.price} img={item.image}/>   
        
          </div>
          )
        )
        }
       </div> 
    </div>
  )
}
