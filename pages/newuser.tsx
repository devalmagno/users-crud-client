import Head from "next/head";
import React from "react";

import Footer from "../src/components/Footer";
import Form from "../src/components/Form";
import Navbar from "../src/components/Navbar";

import styles from "../styles/pages.module.css";

export default function NewUser() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adicionar novo usuário</title>
      </Head>

      <header>
        <Navbar title="Voltar para a Home" page="" />
        <h1>Adicionar novo usuário</h1>
      </header>

      <main className={styles.main}>
        <Form />
      </main>

      <footer>
          <Footer />
      </footer>
    </div>
  );
}
