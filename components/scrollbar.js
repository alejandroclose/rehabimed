import styles from "../styles/Scrollbar.module.css";
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Scrollbar() {
  return (
    <div className={styles.container}>
      <div className={styles.scroll}>
      <h3 className={styles.scrollbarTitle}>
        Especialista en el tratamiento de:
      </h3>
      <ScrollContainer className={styles.scrollbar}>
        <div className={styles.card}>Acné</div>
        <div className={styles.card}>Alergias</div>
        <div className={styles.card}>Ampollas</div>
        <div className={styles.card}>Cicatrices</div>
        <div className={styles.card}>Daño Solar</div>
        <div className={styles.card}>Eczema</div>
        <div className={styles.card}>ETS</div>
        <div className={styles.card}>Hiperhidrosis</div>
        <div className={styles.card}>Hongos</div>
        <div className={styles.card}>Infecciones</div>
        <div className={styles.card}>Lunares</div>
        <div className={styles.card}>Manchas</div>
        <div className={styles.card}>Melanoma</div>
        <div className={styles.card}>Psoriasis</div>
        <div className={styles.card}>Queloides</div>
        <div className={styles.card}>Rosácea</div>
        <div className={styles.card}>Várices</div>
        <div className={styles.card}>etc.</div>
      </ScrollContainer>
    </div>
    </div>
    
  );
}
