import styles from "../styles/Scrollbar.module.css";
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Scrollbar() {
  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
      <h3 className={styles.scrollbarTitle}>
        Prevención, rehabilitación y tratamiento de adultos y niños.
      </h3>
      <ScrollContainer className={styles.scrollbar}>
        <div className={styles.card}>Lesiones deportivas</div>
        <div className={styles.card}>Parálisis cerebral</div>
        <div className={styles.card}>Estimulación temprana y oportuna</div>
        <div className={styles.card}>Daño neurológico</div>
        <div className={styles.card}>Manejo de la espasticidad</div>
        <div className={styles.card}>Enfermedades reumatológicas</div>
        <div className={styles.card}>etc.</div>
      </ScrollContainer>
    </div>
    </div>
    
  );
}
