import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";

import styles from './App.module.css'
import { Post } from "./components/post/Post";



export function App() {
  return (
    <div className="App">
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

