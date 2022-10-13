import styles from '../css/Items.module.css'
import Item from './Item'

const DUMMY_DATA = [
  {
    id: 0,
    title: 'Reading book'
  },
  {
    id: 1,
    title: 'Hanging out'
  }
]

const Items = () => {

  return (
    <div className={styles.items}>
      <ul>
        {DUMMY_DATA.map(item => <Item key={item.id} item={item} />)}
      
      </ul>
    </div>
  )
}

export default Items