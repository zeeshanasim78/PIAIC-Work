//'use cleint';
 // We can use this if we want to get the console.log data on the browser
/// which we can view from console section of the browser

import Image from 'next/image'
import { getAllUsers } from '../../lib/getAllUsers'

export default async function Home() {
  //const data = await getAllUsers()
  const data: User[] = await getAllUsers();  // 2
  console.log(data)
  return (
          <div>
            {
              data?.map(item =>
                  (
                    <div className=' bg-slate-300 m-5'>
                        <h3>  Name : {item.name} </h3>
                        <h3>  Email Address : {item.email} </h3>
                        <h3>  Phone No : {item.phone}  </h3>
                        <h3>  Address : {item.address.street}, {item.address.city}, {item.address.zipcode} </h3>
                  
                    </div>
                  )
                )
            }
          </div>
       )
}
