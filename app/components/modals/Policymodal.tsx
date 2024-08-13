import { Appcontext } from "@/app/contexts/AppcontextProvider";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Template1 from "./policytemplates/Template1";
import Template2 from "./policytemplates/Template2";

function getRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}
const Policymodal = () => {
  const [random,setrandom] = useState<number>()

  useEffect(()=>{
    setrandom(getRandomNumber())
  },[])
  const { togglemodalcontent, togglemodal } = useContext(Appcontext);



  const cancel: () => void = () => {
    togglemodalcontent("form");
    togglemodal();
  };

  return (
    <div className="policy">
      {random ==1 && <Template1 />}
      {random ==2 && <Template2 />}
      <div className="actions">
        <button className="click">Save</button>
        <button className="click secondary" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Policymodal;
