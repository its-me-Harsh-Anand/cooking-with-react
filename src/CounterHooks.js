import React , { useState , useContext } from "react"
import { ThemeContext } from "./App.js"
function CounterHooks({ initialCount }) {
    // const [state, setState] = useState({count: initialCount})
    const style = useContext(ThemeContext)
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            <button style = {style} onClick={()=>setCount((prevCount)=> prevCount-1)}>-</button>
            <span>{count}</span>
            <button style = {style} onClick={()=>setCount((prevCount)=> prevCount+1)}>+</button>
        </div>
    )
}

export default CounterHooks

/*
useState is used to set the state 
it takes parameter as initial count and returns an array of two element.
First element gives the initial count and Second one gives the function in which write code "how we want to change the state"
Here prevCount will take the previous value of count, but if we not pass the prevCount then it will take initial count and runs asyncronously
for example, if our count is 5, now we click on +, it will take initial count and runs 6 times that function to return 6, but by passing prevCount , it will take prevCount as an argument and run the function once to return from 5 to 6.
*/