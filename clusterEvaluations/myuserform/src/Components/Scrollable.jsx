import { useEffect, useState, useRef } from "react";
import React from "react";


const Test = () => {
  const [numbers, setNumbers] = useState([0, 1, 2]);
  const listItems = useRef(null);

  useEffect(() => {
    const lastItem = listItems.current.lastElementChild;
    if (lastItem) {
      lastItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [numbers]);

  return (
    <div ref={listItems}>
      {numbers.map((number) => <div key={number} style={{ height: 20, margin: 2, color: "blue" }}>
                    {number}
                </div>)}
      <button onClick={() => () => {setNumbers([...numbers, numbers.slice(-1)[0] + 1])}}>Add number</button>
    </div>
  );
};

export default Test;