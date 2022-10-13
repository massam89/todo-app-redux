import { useDispatch, useSelector } from 'react-redux'
import styles from '../css/AddItem.module.css'
import { todoActions } from '../store/todo/todoSlice'
import { uiActions } from '../store/ui/uiSlice'
import { useRef } from 'react'

const AddItem = () => {
  const showForm = useSelector(state => state.ui.showForm)
  const dispatch = useDispatch()
  const inputRef = useRef()

  const showFormHandler = () => {
    dispatch(uiActions.changeShowForm());
  }

  const submitNewTodoHandler = (e) => {
    e.preventDefault()
    dispatch(todoActions.addItem({id: new Date().getTime() , title: e.target.item.value}))
    inputRef.current.value = ''
  }

  return (
    <div className={styles.addItem}>
      <div>
        <span onClick={showFormHandler}>{showForm ? '-' : '+'}</span>
      </div>

      {showForm && 
        <form onSubmit={submitNewTodoHandler}>
          <input ref={inputRef} type='text' name='item' placeholder='Add your new todo'  />
          <button type='submit'>+</button>
        </form>
      }
      

    </div>
  )
}

export default AddItem