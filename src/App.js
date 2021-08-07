import React, { useState } from "react";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()
function App (){
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{backgroundColor : theme}}>
      <CounterHooks initialCount = {0}/>
      <button onClick={()=> setTheme((prevTheme)=>{
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Change to { theme }</button>
    </ThemeContext.Provider>
  )
}


export default App;

// Here initialCount is not an object having value 0, but we have passed 0 inside {} because it is JS 

/*
steps for context APIs
1. create a variable which equals React.createContext and export it
2. set everything inside <variable.Provider value = {}> </variable.Provider> in which we want to use context and give a value to be passed
3. import it in a component in which we use and also import useContext into it
4. const style = useContext(context variable) and pass that style to any div we want. and remember, that div must be contained inside <variable.Provider>
5. Thats it


One major difference between useState hooks and context is that we dont have to pass variable such as initialCount
*/