const WinStats = ({ stats }) => {
  return (
    <ul className="stats-list">
      <li>2 Balls: {stats['2ball']}</li>
      <li>2 Balls: {stats['3ball']}</li>
      <li>2 Balls: {stats['4ball']}</li>
      <li>2 Balls: {stats['5ball']}</li>
      <li>2 Balls: {stats['6ball']}</li>
    </ul>
  );
}
export default WinStats;