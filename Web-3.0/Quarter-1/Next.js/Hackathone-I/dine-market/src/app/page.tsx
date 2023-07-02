import Image from 'next/image'
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'


export default function Home() {
  return (
      <div> 
          <div>   <Hero/> </div> 
          <div> <ProductList/> </div>
      </div>
  )
}
