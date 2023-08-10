import Image from 'next/image'
import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'

export const generateMetadata = () => {
  return {
    title : "Dine Market | Home ",
    generator: 'Next.js',
    applicationName: 'Next.js',
    keywords: ['Next.js', 'Dine Market', 'Clothing'],
    creator: 'Zeeshan Asim',
  };
}

export default function Home() {
  return (
      <div> 
          <div> <Hero/> </div> 
          <div> <ProductList/> </div>
      </div>
  )
}
