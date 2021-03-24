import Router from 'next/router';
import React, { FormEvent, useState } from "react";

import { api } from "../../services/api";

import styles from "../../../styles/form.module.css";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [isActive, setIsActive] = useState(false);

  const cpfTemplate = () => {
    const cpf = document.getElementById('cpf');
    if (cpf.value.length == 3 || cpf.value.length == 7) {
      cpf.value += ".";
    }

    if (cpf.value.length == 11) {
      cpf.value += "-";
    }
  }

  const handleCreateUser = (e: FormEvent) => {
    e.preventDefault();

    api.post('/users', {
      name,
      email,
      cpf,
      isActive
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      Router.push('/');
    }).catch((err) => {
      alert('Erro no cadastro!');
      console.error(err.message);
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Adicionar usuário</div>
      <form onSubmit={handleCreateUser}>
        <div className={styles.userDetails}>
          <div className={styles.inputBox}>
            <span className={styles.details}>Nome Inteiro</span>
            <input 
              type="text" 
              placeholder="Digite seu nome" 
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              required 
            />
          </div>

          <div className={styles.inputBox}>
            <span className={styles.details}>Email</span>
            <input 
              type="email" 
              placeholder="Digite seu email" 
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              required 
            />
          </div>

          <div className={styles.inputBox}>
            <span className={styles.details}>CPF</span>
            <input 
              type="text"
              id="cpf"
              placeholder="Digite seu cpf"
              maxLength={14}
              value={cpf}
              onKeyUp={() => cpfTemplate()}
              onChange={(e) => { setCpf(e.target.value) }}
              required 
            />
          </div>

          <div className={styles.statusDetails}>
            <input
              type="radio"
              name="status"
              id="dot-1"
              onClick={() => { setIsActive(true) }}
              className={styles.dot1}
            />
            <input
              type="radio"
              name="status"
              id="dot-2"
              onClick={() => { setIsActive(false) }}
              className={styles.dot2}
            />
            <span className={styles.statusTitle}>Status</span>
            <div className={styles.category}>
              <label htmlFor="dot-1">
                <span className={`${styles.dot} ${styles.one}`}></span>
                <span className={styles.status}>Active</span>
              </label>

              <label htmlFor="dot-2">
                <span className={`${styles.dot} ${styles.two}`}></span>
                <span className={styles.status}>Inactive</span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.button}>
          <input type="submit" value="Salvar" />
        </div>
      </form>
    </div>
  );
};

export default Form;
