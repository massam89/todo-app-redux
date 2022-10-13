import styles from './css/App.module.css'
import Header from './components/Header'
import AddItems from './components/AddItem'
import Items from './components/Items'
import Footer from './components/Footer'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, sendData } from './store/todo/todoActions'

let isInitial = true

const App = () => {
  const items = useSelector(state => state.todo.items)
  const dispatch = useDispatch()
  const changed = useSelector(state => state.todo.changed)

  useEffect(() => {
    
    if(isInitial){
      isInitial = false
      return
    }

    if(changed){
      dispatch(sendData(items))
    }
    
  }, [items])

  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <AddItems />
      <Items />
      <Footer />
      <Notification />
    </div>
  );
}

export default App;
