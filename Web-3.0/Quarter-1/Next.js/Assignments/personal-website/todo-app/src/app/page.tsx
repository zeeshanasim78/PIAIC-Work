import Image from 'next/image'
import addPersonalInfoTodo from './add-Personal-Info-todo'

export default function Home() {
  return (
   <div>
      <b><u>Student Information </u></b>
      <addPersonalInfoTodo></addPersonalInfoTodo>
   </div>
  )
}
