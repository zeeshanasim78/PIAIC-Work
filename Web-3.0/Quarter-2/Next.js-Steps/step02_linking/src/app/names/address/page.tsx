import React from 'react'
import Link from 'next/link'

export default function addresspage() {
    return (
      <div>
          Welcome to the Address Page . We will test the working of Linking Section. <br/>
            We will use Link component for this purpose<br />
            <Link href="/">Home Page</Link> <br/>
            <Link href="/app/names">Names Page</Link> <br/>
            <Link href="/app/names/address">Address Page</Link> <br />
        </div>
  )
}
