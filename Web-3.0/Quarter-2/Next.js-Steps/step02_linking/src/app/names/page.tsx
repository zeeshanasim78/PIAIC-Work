import React from 'react'
import Link from 'next/link'

export default function namespage() {
    return (
      <div>
          Welcome to the Names Page . We will test the working of Linking Section. <br/>
            We will use Link component for this purpose<br />
            <Link href="/">Home Page</Link> <br/>
            <Link href="/names">Names Page</Link> <br/>
            <Link href="/names/address">Address Page</Link> <br />
        </div>
  )
}