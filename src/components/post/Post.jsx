import { Avatar } from '../avatar/Avatar'
import { Comment } from '../comment/Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/tamaraorgan.png"/>
          <div className={styles.authorInfo}>
            <strong>Tamara Organ</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="04 de julho às 13:00" dateTime="2022-07-04">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galera</p>
        <p>
          👋 Acabei de subir mais um projeto no meu portfólio. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 &nbsp; tamara.organ.dev.br/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>&nbsp;
          <a href="#">#nlw</a>&nbsp;
          <a href="#">#rocketseat</a>&nbsp;
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
