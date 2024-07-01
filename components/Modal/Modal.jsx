import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, videoSrc, title, description, duration }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <section className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            width="1000px"
            height="500px"
            src={videoSrc}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen="1"
          ></iframe>
        </div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{duration}</p>
        <i
          onClick={onClose}
          className={`${styles.closeButton} fa-solid fa-circle-xmark`}
        ></i>
      </section>
    </div>
  );
}

export default Modal;
