
const Numbers = ({ numbers }) => {
  const numElements = numbers.map((num, idx) => {
    if (idx === numbers.length - 1) {
      return <div className="powerball" key={idx}>{num}</div>
    }

    return <div key={idx}>{num}</div>;
  });

  return (
    <div className="numbers">
      {numElements}
    </div>
  );
}

export default Numbers;