import styles from '../css/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span>You have 4 pending tasks</span>
      <button>Clear All</button>
    </div>
  )
}

export default Footer