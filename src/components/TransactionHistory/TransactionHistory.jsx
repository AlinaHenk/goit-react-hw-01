import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <div className={css.tableContainer}>
      <table className={css.table}>
        <thead>
          <tr className={css.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
