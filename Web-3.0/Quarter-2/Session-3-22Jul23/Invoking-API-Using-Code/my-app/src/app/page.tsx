import { getAllBooks } from "@/lib/getAllBooks";

export default async function Home() {
   const data: Book[] = await getAllBooks();
  return (
          <div>
            {
              data?.map(item =>
                  (
                    <div className=' bg-slate-300 m-5'>
                        <h3>  Book id : {item.id} </h3>
                        <h3>  Book Name : {item.name} </h3>
                        <h3>  Author Name : {item.author}  </h3>
                        <h3>  Price : {item.price}  </h3>
                        <h3>  Book Type : {item.type}  </h3>
                    </div>
                  )
                )
            }
          </div>
       )
}
