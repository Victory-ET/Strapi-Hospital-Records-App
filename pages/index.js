import styles from '../styles/Home.module.css'
import Topnav from './Components/Topnav'
import Landing from './Components/Landing'
import Record from './Components/Record'

export default function Home() {
  return (
    <div className="font-Roboto">
      <Topnav/>
      <Landing/>
      <Record/>
    </div>
  )
}
