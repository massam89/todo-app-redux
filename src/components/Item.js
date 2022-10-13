import styles from '../css/Item.module.css'

const Item = (props) => {
 
  return (
    <li className={styles.item}>
      <span>{props.item.title}</span>
      <button>delete</button>
    </li>
  )
}

export default Item