import { useFirestore } from "../../hooks/useFirestore";

// styles
import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore("transactions");
  console.log(response);

  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>$ {transaction.amount}</p>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
      <li>
        <p className={styles.name}>Total:</p>
        <p className={styles.amount}>
          ${" "}
          {transactions
            .reduce(
              (total, transaction) => total + parseFloat(transaction.amount),
              0
            )
            .toFixed(2)}
        </p>
      </li>
    </ul>
  );
}
