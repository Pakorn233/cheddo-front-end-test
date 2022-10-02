import { ITodo } from "../../types/todo"
import { List, ListContainer } from "../style"

interface ITodoList {
  todoList: ITodo[],
  onSelect: (id: number) => void,
  selectingId: number
}
export const TodoList = (
  { todoList, onSelect, selectingId }: ITodoList
) => {
  return (
    <ListContainer>
      <h2>Todo List</h2>
      <List>
        <ul>
          {
            todoList.map(todo => {
              return <li key={todo.id} className={`selectable ${todo.id === selectingId && 'selected'}`}onClick={()=>onSelect(todo.id)}>{todo.title}</li>
            })
          }
        </ul>
      </List>
    </ListContainer>
  )
}