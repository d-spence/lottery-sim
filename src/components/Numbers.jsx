
const Numbers = ({ numbers }) => {
  const numElements = numbers.map((num, idx) => {
    if (idx === numbers.length - 1) {
      return <div className="powerball">{num}</div>
    }

    return <div>{num}</div>;
  });

  return (
    <div className="numbers">
      {numElements}
    </div>
  );
}

export default Numbers;