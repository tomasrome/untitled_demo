import styles from "./Nav.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>UNTITLED</div>
      <ul className={styles.links}>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Sobre nosotros</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}

export default Navbar;
