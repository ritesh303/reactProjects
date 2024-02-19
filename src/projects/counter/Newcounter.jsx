import React, { useEffect, useState } from "react";
import "../../projects/common.css";

const Newcounter = () => {
  const [count, setCount] = useState(0);

  const handleclick = () => {
    let newNum = count + 1;
    setCount(newNum);
  };

  useEffect(() => {
    console.log("useEffect called");
  }, []);
  return (
    <div className="container">
      <h1 className="text">Counter App</h1>
      <h1 className="text1">{count}</h1>
      <button className="btn" onClick={handleclick}>
        Add
      </button>
    </div>
  );
};

export default Newcounter;
