import logo1 from '/public/logo.webp'
import Image from "next/image"

const Header = () => {
  return (
    <div className='flex bg-red-300 justify-between items-center py-6 p-x-8'>
      <Image src={logo1} height={150} width={150} alt="Logo Image"></Image>
      <ul className='flex gap-10'>
        <li> Female </li>
        <li> Male </li>
        <li> Kids </li>
        <li> All Products </li>
      </ul>
      <div className='h-10 w-10 rounded-full bg-gray-300'></div>
    </div>
  )
}

export default Header
