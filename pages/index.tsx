import Head from 'next/head'
import { useEffect, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io'

import { api } from '../src/services/api';

import homecss from '../styles/home.module.css';

interface Users {
  id: string;
  name: string;
  email: string;
  cpf: string;
  isActive: boolean;
  systemEntry: Date;
}

export default function Home() {
  const [navbar, setNavbar] = useState<Boolean>(false);
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    api.get('users').then(res => {
      setUsers(res.data);
    })
  })

  function showNavbar() {
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
        <table
          className={homecss.content_table}
        >
          <thead>
            <tr>
              <th>NOME</th>
              <th
                className={homecss.mobile}
              >EMAIL</th>
              <th>CPF</th>
              <th
                className={homecss.mobile}
              >CLIENTE DESDE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => {
              const formatedSystemEntry = user.systemEntry.toString()
                .split('T')[0]
                .split('-')
                .reverse()
                .join('/')
              ;
              
              return (
                <tr className={homecss.user}>
                  <td>{user.name}</td>
                  <td 
                    className={homecss.mobile}
                  >
                    {user.email}
                  </td>
                  <td>{user.cpf}</td>
                  <td 
                    className={homecss.mobile}
                  >
                    {formatedSystemEntry}
                  </td>
                  <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                  <td className={homecss.actions}>
                    <div className={homecss.edit}>
                      <FiEdit2
                        color="#376AED"
                        size="20px"
                      />
                    </div>

                    <div className={homecss.close}>
                      <IoMdClose
                        color="#376AED"
                        size="24px"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}


            {/* <tr className={homecss.user}>
              <td>Lúcio Magno</td>
              <td className={homecss.mobile}>edwardkunk2@gmail.com</td>
              <td>138.755.426-30</td>
              <td className={homecss.mobile}>20/10/2020</td>
              <td>Active</td>
              <td className={homecss.actions}>
                <div className={homecss.edit}>
                  <FiEdit2 
                    color="#376AED" 
                    size="20px" 
                  />
                </div>

                <div className={homecss.close}>
                  <IoMdClose 
                    color="#376AED" 
                    size="24px"
                  />
                </div>
              </td>
            </tr> */}

          </tbody>
        </table>
      </main>

      <footer className={homecss.footer}>

      </footer>
    </div>
  )
}
