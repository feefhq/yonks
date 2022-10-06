import styles from './Layout.module.css'

/**
 *
 */
const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <header>
        <h1>Yonks</h1>
      </header>
      <main>{children}</main>
      <footer>
        <address>&copy;2022 Feef Ltd.</address>
      </footer>
    </div>
  )
}

export default Layout
