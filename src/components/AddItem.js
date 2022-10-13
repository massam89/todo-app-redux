import { useDispatch, useSelector } from 'react-redux'
import styles from '../css/AddItem.module.css'
import { uiActions } from '../store/ui/uiSlice'

const AddItem = () => {
  const showForm = useSelector(state => state.ui.showForm)
  const dispatch = useDispatch()

  const showFormHandler = () => {
    dispatch(uiActions.changeShowForm());
  }

  return (
    <div className={styles.addItem}>
      <div>
        <span onClick={showFormHandler}>{showForm ? '-' : '+'}</span>
      </div>

      {showForm && 
        <form>
          <input type='text' name='item' placeholder='Add your new todo'  />
          <button type='submit'>+</button>
        </form>
      }
      

    </div>
  )
}

export default AddItem