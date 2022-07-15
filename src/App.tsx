import { Header } from './components/header/Header'
import { Sidebar } from './components/sidebar/Sidebar'

import styles from './App.module.css'
import { Post } from './components/post/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/tamaraorgan.png',
      name: 'Tamara Organ',
      role: 'Developer Web'
    },
    content: [
      { id: '1', type: 'paragraph', content: 'Fala galera' },
      {
        id: '2',
        type: 'paragraph',
        content:
          ' 👋 Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { id: '3', type: 'link', content: '👉 tamara.organ.dev.br/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/tamaraorgan.png',
      name: 'Tamara Organ 2',
      role: 'Developer Web 2'
    },
    content: [
      { id: '1', type: 'paragraph', content: 'Fala galera' },
      {
        id: '2',
        type: 'paragraph',
        content:
          ' 👋 Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { id: '3', type: 'link', content: '👉 tamara.organ.dev.br/doctorcare' }
    ],
    publishedAt: new Date('2022-05-10 22:00:00')
  }
]

export function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
