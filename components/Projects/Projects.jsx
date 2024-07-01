import React, { useState } from "react";
import styles from "./Projects.module.css";
import foto1 from "../../src/imgs/2.png";
import foto2 from "../../src/imgs/foto2.jpg";
import foto3 from "../../src/imgs/8.png";
import foto4 from "../../src/imgs/10.jpg";
import foto5 from "../../src/imgs/foto23.jpg";
import foto6 from "../../src/imgs/12.png";
import Modal from "../Modal/Modal";

function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOpenModal = (videoSrc, title, description, duration) => {
    setModalContent({ videoSrc, title, description, duration });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.home}>
      <section className={styles.cardsContainer}>
        <div className={styles.card}>
          <img
            onClick={() =>
              handleOpenModal(
                "https://www.youtube.com/embed/S4GSIhQhfFM?si=xygtjvxZPA8EPLSm",
                "NEGROS - 3K (Video Oficial)",
                'Videoclip realizado para la banda argentina de rock/pop Negros, de su último single "3K".',
                "3:05 min"
              )
            }
            src={foto1}
            alt=""
          />
          <p className={styles.title}>NEGROS - 3K (Video Oficial)</p>
          <p className={styles.category}>Videoclip</p>
        </div>
        <div className={styles.card}>
          <img src={foto2} alt="" />
          <p className={styles.title}>El Pie del Diablo</p>
          <p className={styles.category}>Policial</p>
        </div>
        <div className={styles.card}>
          <img
            onClick={() =>
              handleOpenModal(
                "https://www.youtube.com/embed/k7Pekud0fdU?si=TwIpjTMxLSvgwcEF",
                "NAHIR",
                "Corto Final, Realizacion 2, 2022",
                "6:42 min"
              )
            }
            hre
            src={foto3}
            alt=""
          />
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
          <img
            onClick={() =>
              handleOpenModal(
                "https://www.youtube.com/embed/SJjBNWPQMjE?si=5EoKhaHlCzNmEQ0L?autoplay=1",
                "Mujer-ES",
                "Plano secuencia; camara en mano 5/5/22",
                "2:24 min"
              )
            }
            src={foto6}
            alt=""
          />
          <p className={styles.title}>Mujer-ES</p>
          <p className={styles.category}>Corto</p>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc={modalContent.videoSrc}
        title={modalContent.title}
        description={modalContent.description}
        duration={modalContent.duration}
      />
    </div>
  );
}

export default Projects;
