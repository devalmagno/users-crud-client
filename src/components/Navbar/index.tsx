import React, { useState } from 'react';
import Link from 'next/link';

import styles from '../../../styles/navbar.module.css';

interface Props {
    title: string;
    page: string;
}

const Navbar = (props: Props) => {
    const [navbar, setNavbar] = useState<Boolean>(false);
    const { title, page } = props;

    function showNavbar() {
        setNavbar(!navbar)
    }

    return (
        <nav className={`${styles.navbar} ${navbar && styles.change}`}>
        <div
          className={styles.hamburger_menu}
          onClick={showNavbar}
        >
          <div className={`${styles.line} ${styles.line_1}`}></div>
          <div className={`${styles.line} ${styles.line_2}`}></div>
          <div className={`${styles.line} ${styles.line_3}`}></div>
          <div className={`${styles.line} ${styles.line_4}`}></div>
          <div className={`${styles.line} ${styles.line_5}`}></div>
        </div>

        <ul className={styles.nav_list}>
          <li>
            <h1>Gerenciamento de usuários</h1>

            <Link href={`/${page}`}>
              <button className={styles.navigateButton}>
                { title }
              </button>
            </Link>
        </li>

          <li className={styles.space}></li>

          <li>
            <p className={styles.footer}>Desenvolvido por Lúcio Magno. <br />
              Deseja entrar em contato? <a href="https://devalmagno.tk/">
                Acesse o meu site.
              </a>
            </p>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;