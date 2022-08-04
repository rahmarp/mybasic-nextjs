import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/vercel.svg" width={200} height={200} />
      <h1 className={styles['title-homepage']}>Welcome Hoshi</h1>
    </Layout>
  )
}
