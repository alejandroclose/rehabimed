import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Header.module.css";

export default function Header() {
  const [navOpen, setNavOpen] = useState(0);
  const slide = useSpring({
    transform: navOpen ? "translate3d(0,0,0)" : "translate3d(100vw,0,0)",
  });
  return (
    <>
      {/* Página web diseñada por Mohamad Safi - https://www.mohamadsafi.com/
    Desarrollo web por Alejandro Close - https://www.alejandroclose.com/ */}
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
      <div className={styles.billboard}>
        <div className={styles.space}></div>
        <h1 className={styles.title}>
          <Link href="/">Clínica Médica Dermatológica</Link>
        </h1>
        <button
          className={styles.hamburger}
          onClick={() => setNavOpen(!navOpen)}
        >
          <Image
            src="/hamburger-menu.png"
            alt="botón de menú"
            width="25"
            height="16"
          />
        </button>
      </div>
      <animated.div className={styles.nav} style={slide}>
        <div className={styles.links}>
          <h2 className={styles.anchor}>
            <Link href="/">Inicio</Link>
          </h2>
          <h2 className={styles.anchor}>
            <Link href="/sobre-nosotros">Sobre Nosotros</Link>
          </h2>
          <h2 className={styles.anchor}>
            <Link href="/contacto">Contacto</Link>
          </h2>
        </div>
      </animated.div>
    </>
  );
}
