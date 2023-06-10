import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
      <div className="flex max-h-screen bg-red-500">
        
          <div className=" w-96 h-56 bg-slate-200">
            Box 1
          </div>
          <div className=" w-96 h-56 bg-blue-500">
              Box 2
          </div>
          <div className="bg-green-800 w-96 h-56">
             Box 3
          </div>
    </div>
  )
}
