import React from "react";
import { createContext, useState } from "react";

const PreviewContext = createContext();
const PreviewProvider = ({ children }) => {
  const [PreviewMovie, setPreviewMovie] = useState([]);

  return (
    <PreviewContext.Provider value={{ PreviewMovie, setPreviewMovie }}>
      {children}
    </PreviewContext.Provider>
  );
};

export { PreviewProvider, PreviewContext };
