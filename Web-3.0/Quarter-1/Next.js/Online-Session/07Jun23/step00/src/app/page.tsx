import Image from 'next/image'
import SirZiaImage from '../../images/ziakhan.jpg'
import { Button } from  "../../components/ui/button"
import { Mail } from "lucide-react"


export default function Home() {
  return (
    <div>
       <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Zia Khan
      </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomist | CEO Panacloud | Volunteer COO Presidential Initiative for AI and Computing
        <br/> The King
       </p>
       <br/>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
      </div>
    )
}
