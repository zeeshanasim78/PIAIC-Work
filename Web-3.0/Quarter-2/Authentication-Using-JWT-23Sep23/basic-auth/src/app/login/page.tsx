export default function Home() {
  return (
    <div >
          <div>
            Login Page
         </div>

        <div className=" border-gray-100">
          User Name : <input type="text" placeholder="Enter Username" name="uname" required/> <br/><br/>
          Password :  <input type="password" placeholder="Enter Password" name="psw" required/>
<br/><br/>
          <button type="submit" className=" bg-slate-500 border-spacing-10">Login</button>
          
        </div>

       
    </div>
  )
}
