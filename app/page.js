import Link from 'next/link'
import style from './page.module.css'

export default function Home(){
  return(
    <main>
      <h1> Basic Rouing||Make New Page </h1>
        <div>
          <Link href="/login"> GO to login page</Link>
          <br />
          <Link href="/home"> GO to home page</Link>
        </div>    
    </main>
  )
}
