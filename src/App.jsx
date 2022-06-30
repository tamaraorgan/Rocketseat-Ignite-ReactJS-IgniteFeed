import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";

import styles from './App.module.css'



export function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          post
        </main>
      </div>
    </div>
  )
}

