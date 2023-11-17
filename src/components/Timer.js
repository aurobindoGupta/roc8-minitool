import { useState } from "react";

const Timer = () => {
  const [clock, setClock] = useState(600);

  if (clock >= 0) {
    let timer = setTimeout(() => {
      if (clock === 0) {
        clearTimeout(timer);
      } else {
        setClock(clock-1);
      }
    }, 1000);
  }
  return (
    <>
      <div>
        {parseInt(clock / 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :{parseFloat(clock % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
      </div>
    </>
  );
};
export default Timer;
