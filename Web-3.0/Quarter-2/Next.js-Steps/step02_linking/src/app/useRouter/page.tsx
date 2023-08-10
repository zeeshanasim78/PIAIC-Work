'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
    return (
      <div>
        <button type="button" onClick={() => router.push('/')}>
                Lets Move to Home Page using Programatically useRouter
        </button>
        <br/><br/>
        <button type="button" onClick={() => router.push('/names')}>
                Lets Move to Names Page using Programatically useRouter
        </button>
    </div> 
  )
}