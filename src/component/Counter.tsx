import React, { useState } from "react";

export const Counter = ({ initialCount }: { initialCount: number }) => {
  const [counter, setCounter] = useState<number>(initialCount);
  const counterButtons = [
    { value: -1, button: "-1" },
    { value: 1, button: "+1" },
    { value: -50, button: "-50" },
    { value: 50, button: "+50" },
    { value: -100, button: "-100" },
    { value: 100, button: "+100" },
  ];
  return (
    <div>
      <h2>Counter {counter}</h2>
      {counterButtons.map((button, index) => (
        <button key={index} onClick={() => setCounter(counter + button.value)}>
          {button.button}
        </button>
      ))}
    </div>
  );
};
