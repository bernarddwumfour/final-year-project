"use client";
import React, { useContext } from "react";
import { Appcontext } from "../contexts/AppcontextProvider";

const Pagemessage = () => {
  const { pagemessagestate, pagemessage, pagemessagetype } =
  useContext<appcontext>(Appcontext);
 
  return (
    <div
      className={` ${(!pagemessagestate) && "hidden"} pagemessage ${
        pagemessagetype == "error" && "error"
      }  ${pagemessagetype == "info" && "info"}  ${
        pagemessagetype == "success" && "success"
      }`}
    >
      {pagemessage && pagemessage}
    </div>
  );
};

export default Pagemessage;
