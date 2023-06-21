import Image from 'next/image'
import AddTodo1 from './todo-1'
import AddTodoList from './todo-list'

export default function Home() {
  return (
      <div> 
         <AddTodo1></AddTodo1>
         <AddTodoList></AddTodoList>
      </div>
  )
}
