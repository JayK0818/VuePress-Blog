import store, { INCREMENT, DELETE, TOGGLE } from './store'
import { createRoot } from 'react-dom/client'
import styles from './css/index.module.scss'
import { useState } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'

function TodoList () {
  const [ todo, setTodo ] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const handleTodoChanged = (event) => {
    const text = event.target.value.trim()
    setTodo(text)
  }
  const handleConfirm = () => {
    if(!todo) {
      window.$message.error('todo is required')
      return
    }
    dispatch({
      type: INCREMENT,
      payload: {
        text: todo,
        completed: false,
        id: Date.now()
      }
    })
    setTodo('')
  }
  const handleToggle = (todo) => {
    dispatch({
      type: TOGGLE,
      payload: todo.id
    })
  }
  const handleDeleteTodo = (todo) => {
    dispatch({
      type: DELETE,
      payload: todo.id
    })
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <input type='text' placeholder='what next to do?' className={styles.todo_input} value={todo} onChange={handleTodoChanged}/>
        <button className='primary-button' onClick={handleConfirm}>确定</button>
      </div>
      <ul>
        {
          todos.length > 0 && todos.map(todo => (
            <div key={todo.id} className={styles.todo_item}>
              <input type="checkbox" checked={todo.completed} onChange={handleToggle.bind(null, todo)}/>
              <span className={styles.text}>{todo.text}</span>
              <span className={styles.delete_icon} onClick={handleDeleteTodo.bind(null, todo)}><svg focusable="false" className="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span>
            </div>
          ))
        }
        <li></li>
      </ul>
    </div>
  )
}

const element = document.querySelector('._react_redux_todolist')
const root = createRoot(element)
root.render(
  <Provider store={store}>
    <TodoList/>
  </Provider>
)