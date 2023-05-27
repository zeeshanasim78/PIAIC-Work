import Image from 'next/image'
import image1 from '../images/zeeshan.jpg'
import image2 from '../images/webdevsols.jpg'
import image3 from '../images/WebDevelopment.png'
import image4 from '../images/music-2.png'

export default function Home() {
  return (
    <div className="flex justify-center bg-gray-200 mx-20 my-20">
    <div className="mx-4 order-last self-center">
       <Image src={image1}  height={380} width={240} className="rounded-full" alt="image"/>
    </div>
    <div className="mx-4 self-center text-center">
        <h1 className="text-5xl font-bold text-orange-700">Welcome to WebDevSols</h1>
        <h2 className="text-2xl font-semibold text-green-650">
            Full Stack Development Solutions using Next.Js
        </h2>
        <button
        className="my-4 px-4 py-2 border-2 border-black rounded-lg
        text-white bg-blue-900 ">
        Learn More
        </button>
    </div>
    </div>


     )
}
