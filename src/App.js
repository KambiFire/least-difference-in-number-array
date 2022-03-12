import "./styles.css";

export default function App() {
  function chkPair(A) {
    if (A.length < 1) {
      console.log("Array is empty!");
      return { diff: "N/A", solution: "Empty Array" };
    }

    const B = A.concat().sort((a, b) => a - b);
    const size = B.length;
    let obj = {};
    let minDiff = B[1] - B[0];
    let solution = "";

    for (let i = 0; i < size - 1; i++) {
      obj[i] = { x: B[i + 1], y: B[i], ans: B[i + 1] - B[i] };
      if (B[i + 1] - B[i] < minDiff) minDiff = B[i + 1] - B[i];
    }

    for (let key in obj)
      if (obj[key].ans === minDiff)
        solution += `[${obj[key].x} ${obj[key].y}] `;

    console.log(`${minDiff} = ${solution}`);
    return { diff: minDiff, solution: solution };
  }

  const tests = [
    [],
    [4, 1, 5, 3, 0, 2],
    [-4, -1, -5, -3, 0, -2],
    [-100, -200, 100, 100]
  ];

  tests.map((test) => chkPair(test));

  const find_diff = (sol) => `Difference = ${sol.diff} in ${sol.solution}`;

  return (
    <div className="App">
      <h1>Least difference in number array</h1>
      {tests.map((test, index) => (
        <h3 key={index}>
          {" "}
          [{test.join(", ")}] <br />
          {find_diff(chkPair(test))}
        </h3>
      ))}
    </div>
  );
}
