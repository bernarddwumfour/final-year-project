"use client";
import React, { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

export const Appcontext = createContext<appcontext>({
    modalopen: false,
    togglemodal : ()=>{},
  });

const AppcontextProvider = ({children}: Props) => {

  const [modalopen, setmodalopen] = useState(false);

  const togglemodal: voidfunction = () => {
    console.log("Toggle modal")
    setmodalopen((prev) => !prev);
  };

  return (
    <Appcontext.Provider
      value={{
        modalopen: modalopen,
        togglemodal,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};



export default AppcontextProvider;
