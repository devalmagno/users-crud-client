import Head from 'next/head'

import Navbar from '../src/components/Navbar';
import TableList from '../src/components/TableList';

import homecss from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={homecss.container}>
      <Head>
        <title>Informações de Usuários</title>
      </Head>

      <header className={homecss.header}>
        <Navbar title="Adicionar novo usuário" />
        <h1>Informações de usuários</h1>
      </header>

      <main className={homecss.main}>
        <TableList />
      </main>

      <footer className={homecss.footer}>

      </footer>
    </div>
  )
}
