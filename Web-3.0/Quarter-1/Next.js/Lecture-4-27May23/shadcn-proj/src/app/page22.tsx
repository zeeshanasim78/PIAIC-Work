import Image from "next/image";
import { ShoppingCart } from "lucide-react";

import { Button } from "../../components/ui/button" ;

export default function Home() {
  return (
    <>
               <h1 className="flex scroll-m-20 text-red-400 text-6xl font-extrabold tracking-tight lg:text-5xl">
                  Taxing Laughter: The Joke Tax Chronicles
                </h1>

                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  The king, seeing how much happier his subjects were, realized the error of
                  his ways and repealed the joke tax.
                </p>

                <Button>
                  Lets Go For Shopping..
                  <ShoppingCart className="mr-2 h-4 w-4"></ShoppingCart>
                  </Button>
    </>

     )
}
