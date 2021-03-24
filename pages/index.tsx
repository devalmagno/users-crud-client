import Head from "next/head";

import Navbar from "../src/components/Navbar";
import TableList from "../src/components/TableList";
import Footer from '../src/components/Footer';

import styles from "../styles/pages.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Informações de Usuários</title>
      </Head>

      <header>
        <Navbar title="Adicionar novo usuário" page="newuser" />
        <h1>Informações de usuários</h1>
      </header>

      <main>
        <TableList />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
