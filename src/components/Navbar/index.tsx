import React, { useState } from 'react';

import styles from '../../../styles/navbar.module.css';

interface Props {
    title: string;
}

const Navbar = (props: Props) => {
    const [navbar, setNavbar] = useState<Boolean>(false);
    const { title } = props;

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

            <a href="#">
              <button>
                { title }
              </button>
            </a>
          </li>

          <li className={styles.space}></li>

          <li>
            <p>Desenvolvido por Lúcio Magno. <br />
              Deseja entrar em contato? <a href="#">
                Acesse o meu site.
              </a>
            </p>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;