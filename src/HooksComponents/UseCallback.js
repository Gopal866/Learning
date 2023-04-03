import { Component, useCallback, useState } from "react";

export default function UseCallback() {
  const [color, setColor] = useState(['red']);

  const addColor = useCallback(() =>{
    setColor((col)=> [...col, 'obj']);
  }, [color])

  return(
      <div>
        <div>UseCallback</div>
        <button onClick={addColor}>addColor</button>
        <br />
        {color.map((obj,i)=>(
          <div key={i + 1}>{obj}</div>
        ))}
        </div>
  )
}