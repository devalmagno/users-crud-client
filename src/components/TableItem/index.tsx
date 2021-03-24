import React, { useState, useEffect } from "react";
import { FiEdit2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import { api } from "../../services/api";

import styles from '../../../styles/tableitem.module.css';
import Link from "next/link";

interface Users {
  id: string;
  name: string;
  email: string;
  cpf: string;
  isActive: boolean;
  systemEntry: Date;
}

const TableItem = () => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    api.get("users").then((res) => {
      setUsers(res.data);
    });
  });

  const removeUser = (id: string) => {
    const confirmRemove = confirm('Tem certeza que deseja deletar esse usuário?');

    if (confirmRemove) api.delete(`/users/${id}`);
  }

  return (
    <tbody className={styles.containerUser}>
      {users.map((user) => {
        const formatedSystemEntry = user.systemEntry
          .toString()
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/");
        return (
          <tr className={styles.user}>
            <td>{user.name}</td>
            <td className={styles.mobile}>{user.email}</td>
            <td>{user.cpf}</td>
            <td className={styles.mobile}>{formatedSystemEntry}</td>
            <td>{user.isActive ? "Active" : "Inactive"}</td>
            <td className={styles.actions}>
              <div className={styles.edit}>
                <Link 
                  href={{ pathname: '/modifyuser', query: { id: JSON.stringify(user.id) } }}
                >
                  <FiEdit2 color="#376AED" size="20px" />
                </Link>
              </div>

              <div className={styles.close} onClick={() => removeUser(user.id)}>
                <IoMdClose color="#376AED" size="24px" />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableItem;
