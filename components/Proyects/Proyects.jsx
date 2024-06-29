import styles from "./Proyects.module.css";
import foto1 from "../../src/imgs/2.png";
import foto2 from "../../src/imgs/foto2.jpg";
import foto3 from "../../src/imgs/8.png";
import foto4 from "../../src/imgs/10.jpg";
import foto5 from "../../src/imgs/foto23.jpg";
import foto6 from "../../src/imgs/12.png";
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.overlay}>
        <section className={styles.cardsContainer}>
          <div className={styles.card}>
            <img src={foto1} alt="" />
            <p className={styles.title}>NEGROS - 3K (Video Oficial)</p>
            <p className={styles.category}>Videoclip</p>
          </div>
          <div className={styles.card}>
            <img src={foto2} alt="" />
            <p className={styles.title}>El pie del diablo</p>
            <p className={styles.category}>Policial</p>
          </div>
          <div className={styles.card}>
            <a
              href="https://www.youtube.com/watch?v=k7Pekud0fdU"
              target="_blank"
            >
              <img hre src={foto3} alt="" />
            </a>
            <p className={styles.title}>NAHIR</p>
            <p className={styles.category}>Drama</p>
          </div>
          <div className={styles.card}>
            <img src={foto4} alt="" />
            <p className={styles.title}>Metele magia, metele Knorr</p>
            <p className={styles.category}>Publicidad</p>
          </div>
          <div className={styles.card}>
            <img src={foto5} alt="" />
            <p className={styles.title}>Plan 4 - Soy el fin (Vivo)</p>
            <p className={styles.category}>Videoclip</p>
          </div>
          <div className={styles.card}>
            <a
              href="https://www.youtube.com/watch?v=SJjBNWPQMjE"
              target="_blank"
            >
              <img src={foto6} alt="" />
            </a>
            <p className={styles.title}>Mujer-ES</p>
            <p className={styles.category}>Corto</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
