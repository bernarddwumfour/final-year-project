"use client";
import React, { useContext, useEffect } from "react";
import { Appcontext } from "../contexts/AppcontextProvider";

const Pagemessage = () => {
  const { pagemessagestate, pagemessage, pagemessagetype } =
  useContext(Appcontext);
  useEffect(()=>{
    alert(pagemessagestate)
  },[])
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
