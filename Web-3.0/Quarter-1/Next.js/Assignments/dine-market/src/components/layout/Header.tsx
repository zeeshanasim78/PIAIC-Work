import logo1 from '/public/logo.webp'
import Image from "next/image"
import Link from 'next/link'
import {ShoppingCart} from 'lucide-react'
import { Input } from   '../../../components/ui/input' 



const Header = () => {
  return (
    <div className='flex bg-slate-100  justify-around items-center py-6 p-x-8'>
      <Image src={logo1} height={150} width={150} alt="Logo Image"></Image>
      <ul className='flex gap-10'>
        <li className='text-lg'> 
            <Link href="/"> Female  </Link>
        </li>
        <li className='text-lg'> 
            <Link href="/"> Male  </Link>
        </li>
        <li className='text-lg'> 
            <Link href="/"> Kids </Link>
        </li>
        <li className='text-lg'> 
            <Link href="/"> All Products  </Link>
        </li>
      </ul>
      <div>
      <Input type="email" placeholder="Search" />
      </div>
      <div className='h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center'>
      <ShoppingCart className='w-6 h-t6 '></ShoppingCart>
      </div>
    </div>
  )
}

export default Header
