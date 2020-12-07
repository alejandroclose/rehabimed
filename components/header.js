import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <p className={styles.headerInfo}>
          <a className={styles.headerInfoLink} href="tel:23683623">
            +(502) 2368-3623
          </a>
          <a
            className={styles.headerInfoLink}
            target="_blank"
            href="https://www.google.com/maps/place/Cl%C3%ADnica+M%C3%A9dica+Dermatol%C3%B3gica+-+Dra.+Maria+Obreg%C3%B3n/@14.585424,-90.518847,15z/data=!4m5!3m4!1s0x0:0x9160c3c823d2ea09!8m2!3d14.585424!4d-90.518847"
          >
            10a Calle 2-45 zona 14. Edificio Clínicas Médicas Las Américas,
            Clínica 601.
          </a>
        </p>
      </div>
      <h1 className={styles.title}>Clínica Médica Dermatológica</h1>
    </>
  );
}
