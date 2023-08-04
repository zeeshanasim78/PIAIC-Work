import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      Welcome to the Home Page . We will test the working of Linking Section. <br/>
      We will use Link component for this purpose<br />
      <Link href="/">Home Page</Link> <br/>
      <Link href="./names">Names Page</Link> <br/>
      <Link href="./names/address">Address Page</Link> <br />
      
      <br/><Link href="./useRouter">Move to useRouter Page</Link> <br/>
    </div>
  )
}
