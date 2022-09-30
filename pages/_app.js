import { Layout } from 'components/Layout'
import '../styles.css'
import '@fontsource/jetbrains-mono/variable.css'

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
