// import { createContext, StrictMode, useState } from 'react'
// import { createRoot } from 'react-dom/client'
//import App from './App.jsx'


// export const Context = createContext({isAuthenticate: true});


// const AppWrapper = () =>{

//   const [isAuthenticate, setIsAuthenticate] = useState(false);
//   const [user, setUser] = useState(false);
// return(
//   <Context.Provider value={{isAuthenticate, setIsAuthenticate, user, setUser}}>
//     <App />
//   </Context.Provider>
// );

// };

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <AppWrapper />  
//   </StrictMode>,
// )

import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({});
  

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, admin, setAdmin }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);