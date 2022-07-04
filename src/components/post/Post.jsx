import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/tamaraorgan.png"
          />
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
    </article>
  )
}
