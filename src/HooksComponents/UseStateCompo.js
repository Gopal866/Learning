import React, {useCallback, useContext, useEffect, useReducer, useRef, useState} from "react";
import Axios from "axios";
import "./Styles.css";
import {UserContext} from "./../App.js"
import BabelUseState from "./BabelUseState";

export const UseStateCompo = (props) => {
  // useState
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("Text");
  const [showText, setShowText] = useState(true);

  const updateState = () => {
    setCount(count + 1);
  }

  const inputUpdateState = (e) => {
    const data = e.target.value
    setInputValue(data);
  }

  // useReducer
  const initialState = {count: 0};
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increament':
        return {count: state.count + 1}
        break;
      case 'decreament':
        return {count: state.count - 1}
        break;
    
      default:
        break;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=> {
    getDataFunc();
  }, [])
  const [data, setData] = useState([]);
  // const getDataFunc = () => {
  //   Axios({
  //     method: "get",
  //     url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  //   }).then((response) => {
  //     setData(response.data);
  //   })
  // }

  // Using useCallback function
  const getDataFunc = useCallback(() => {
    Axios({
      method: "get",
      url: "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    }).then((response) => {
      setData(response.data);
    })
  });

  // useRef
  const ele = useRef();
  const setUseRefFunc = () => {
    ele.current.focus();
  }

  useEffect(()=> {
    number.current = number.current + 1;
  })
  const [inputValue1, setInputValue1] = useState("");
  const number = useRef(0);

  // useContext
  const user = useContext(UserContext);

  return(
    <div>
      <BabelUseState />
      <div>UseStateCompo.</div>
      {/* useContext */}
      <div>{user}</div>
      <br />
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <h1>Render Count: {number.current}</h1>
      <br />
      <input placeholder="Enter data..." ref={ele}/> &emsp; <button onClick={setUseRefFunc}>Click</button>
      <br />
      {props.data}
      <br />
      <button onClick={props.updateStateFunc}>Update Props</button>
      <br />
      <div>{count}</div>
      <button onClick={updateState}>Update State</button>
      <br />
      <br />
      <input placeholder="Enter Text....." onChange={inputUpdateState}/>
      <div>{inputValue}</div>
      <br />
      <button onClick={()=> setShowText(!showText)}>Show Text</button>
      {showText && <div>{inputValue}</div>}

{/* useReducer */}
      <br />
      {state.count}
      <br />
      <button onClick={()=> dispatch({type: "increament"})}>Increament</button>
      &emsp;
      <button onClick={()=> dispatch({type: "decreament"})}>Decreament</button>
      <br />
      <br />
      <div>
        <table>
          <caption>Members List Data</caption>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Role</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {data.map((obj, index) => (
            <tr key={index +1}>
              <td>{obj.id}</td>
              <td>{obj.name}</td>
              <td>{obj.role}</td>
              <td>{obj.email}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}