import React, { createContext, useEffect, useState } from "react";
export const GlobalInfo = createContext(null);
const ContextProvider = ({ children }: any) => {
  const [dashColor, setDashColor] = useState<any>('#EEE6FF');

  return (
    <GlobalInfo.Provider
      value={{dashColor, setDashColor}}
    >
      {children}
    </GlobalInfo.Provider>
  );
};
export default ContextProvider;