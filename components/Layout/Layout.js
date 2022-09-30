import styles from './Layout.module.css'
/**
 *
 */
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1 className={styles.h1}>yonks</h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
