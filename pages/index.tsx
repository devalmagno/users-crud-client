import Head from 'next/head'
import { useState } from 'react';

import homecss from '../styles/home.module.css';

export default function Home() {
  const [navbar, setNavbar] = useState<Boolean>(false);

  const showNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <div className={homecss.container}>
      <Head>
        <title>Homepage</title>
      </Head>

      <header className={homecss.header}>
        <nav className={`${homecss.navbar} ${navbar && homecss.change}`}>
          <div
            className={homecss.hamburger_menu}
            onClick={showNavbar}
          >
            <div className={`${homecss.line} ${homecss.line_1}`}></div>
            <div className={`${homecss.line} ${homecss.line_2}`}></div>
            <div className={`${homecss.line} ${homecss.line_3}`}></div>
            <div className={`${homecss.line} ${homecss.line_4}`}></div>
            <div className={`${homecss.line} ${homecss.line_5}`}></div>
          </div>

          <ul className={homecss.nav_list}>
            <li>
              <h1>Gerenciamento de usuários</h1>

              <a href="#">
                <button>Adicionar novo usuário</button>
              </a>
            </li>

            <li className={homecss.space}></li>

            <li>
              <p>Desenvolvido por Lúcio Magno. <br />
                Deseja entrar em contato? <a href="#">
                  Acesse o meu site.
                </a>
              </p>
            </li>
          </ul>
        </nav>
        <h1>Informações de usuários</h1>
      </header>

      <main className={homecss.main}>
        <table>
          <tr>
            <th>NOME</th>
            <th className={homecss.desktop}>EMAIL</th>
            <th >CPF</th>
            <div>
              <th>STATUS</th>
              <th className={homecss.desktop}>CLIENTE DESDE</th>
              <th>AÇÕES</th>
            </div>
          </tr>
          <tr className={homecss.users}>
            <td className={homecss.name}>Lúcio Magno</td>
            <td className={homecss.desktop}>edwardkunk2@gmail.com</td>
            <td className={homecss.cpf}>123.458.999-41</td>
            <div>
              <td className={homecss.status}>ACTIVE</td>
              <td className={homecss.desktop}>26/03/2021</td>
              <td className={homecss.actions}></td>
            </div>
          </tr>
        </table>
      </main>

      <footer className={homecss.footer}>

      </footer>
    </div>
  )
}
