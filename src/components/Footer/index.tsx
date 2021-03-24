import React from 'react';

import styles from '../../../styles/footer.module.css';

const Footer = () => {
    return (
        <p className={styles.footer}>
          Desenvolvido por Lúcio Magno. <br />
          Deseja entrar em contato? 
          <a 
          href="https://devalmagno.tk/"
          target="_blank"
          >
            Acesse o meu site.
          </a>
        </p>
    )
}

export default Footer;