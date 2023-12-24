import Image from 'next/image'
import styles from './page.module.css'
// import Row
import React, { Suspense } from 'react';
const Row = React.lazy(() => import('./row.js'));

export default function Home() {
  return (
    
    <main className={styles.main}>
      {<Row/>}
      {<Row/>}
      {<Row/>}
      
    </main>
  )
}
