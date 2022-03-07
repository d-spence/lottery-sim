const FinancialStats = ({ stats }) => {
  return (
    <ul className="stats-list">
      <li>Tickets Bought: {stats.tickets}</li>
      <li>Money Spent: ${stats.spent}</li>
    </ul>
  );
}
export default FinancialStats;