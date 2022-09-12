import React, { createContext, useState} from "react";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const [login, setlogin] = useState(false);
  
  return (
    <MyContext.Provider
      value={{login,setlogin}}
    >
          {children}
    </MyContext.Provider>
  );
};

export default AppContext;