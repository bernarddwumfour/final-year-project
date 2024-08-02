"use client";
import React, { ReactNode, createContext, useState } from "react";

type Props = {
  children: ReactNode;
};

//Creating Context
export const Appcontext = createContext<appcontext>({
  modalopen: false,
  togglemodal: () => {},
  modalcontent: "form",
  togglemodalcontent: () => {},
  pagemessage: "",
  pagemessagetype: "",
  pagemessagestate: false,
  showpagemessage: () => {},
});

//Context Provider
const AppcontextProvider = ({ children }: Props) => {
  //Modal state
  const [modalopen, setmodalopen] = useState(false);

  //State for content of modal
  const [modalcontent, setmodalcontent] = useState<String>("form");

  //States for pagemessage
  const [pagemessage, setpagemessage] = useState<string>("");
  const [pagemessagestate, setpagemessagestate] = useState(false);
  const [pagemessagetype, setpagemessagetype] = useState<
    "info" | "success" | "error"
  >("info");

  //Toggling Modal state
  const togglemodal: voidfunction = () => {
    console.log("Toggle modal");
    setmodalopen((prev) => !prev);
  };

  const togglemodalcontent = (state: string = "form") => {
    setmodalcontent(state);
  };

  const showpagemessage = (
    message: string,
    type: "info" | "success" | "error"
  ) => {
    setpagemessage(message);
    setpagemessagestate(true);
    setpagemessagetype(type);

    console.log("Message:", message);
    console.log("Type:", type);
    console.log("Page message state before timeout:", pagemessagestate);

    setTimeout(() => {
      setpagemessagestate(false);
      setpagemessage("");
    }, 4000);
    // alert(`${pagemessagestate} displaying`);
  };

  return (
    <Appcontext.Provider
      value={{
        modalopen: modalopen,
        togglemodal,
        modalcontent: modalcontent,
        togglemodalcontent,
        pagemessage: pagemessage,
        pagemessagestate: pagemessagestate,
        pagemessagetype: pagemessagetype,
        showpagemessage,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default AppcontextProvider;
