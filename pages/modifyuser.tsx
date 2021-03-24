import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import ModifyForm from '../src/components/ModifyForm';

import styles from '../styles/pages.module.css';

function modifyUser() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <header>
        <Navbar title="Voltar para a Home" page="" />
        <h1>Modificando um usuário</h1>
      </header>

      <main className={styles.main}>
        <ModifyForm id={id} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default modifyUser;
function getQueryParams(search: string): { data: any; } {
  throw new Error("Function not implemented.");
}

