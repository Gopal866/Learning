import { useState } from "react";

export default function BabelUseState(){
  const getRandomNumber = () => {
    setNum(Math.ceil(Math.random() * 6));
  };

  const [num, setNum] = useState(0);
  return (
    <div>
      <button onClick={()=> getRandomNumber()}>Click</button>
      Your dice roll:
      {num}
    </div>
  );
};