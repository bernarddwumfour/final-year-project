import { Appcontext } from "@/app/contexts/AppcontextProvider";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Template1 from "./policytemplates/Template1";
import Template2 from "./policytemplates/Template2";
import { usePDF } from 'react-to-pdf';
import Template3 from "./policytemplates/Template3";


function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}
const Policymodal = () => {
  const [random,setrandom] = useState<number>()
  const { toPDF, targetRef } = usePDF({filename: 'Summarised privacy policy.pdf'});

  useEffect(()=>{
    setrandom(getRandomNumber())
  },[])
  const { togglemodalcontent, togglemodal } = useContext(Appcontext);
  const [loading,setloading] =  useState(false)


  const saveaspdf = ()=>{
    setloading(true)
    toPDF()
    setTimeout(() => {
      setloading(false)
    },2000);
  }



  const cancel: () => void = () => {
    togglemodalcontent("form");
    togglemodal();
  };

  return (
    <div className="policy">
      <div  ref={targetRef}>
      {random ==1 && <Template1 />}
      {random ==2 && <Template2 />}
      {random ==3 && <Template3/>}
      </div>
      <div className="actions">
        <button  className={`click ${loading && "inactive"}`} disabled = {loading}  onClick={() => saveaspdf()}>
          {loading ? "Downloading" :"Save"}
          </button>
        <button className="click secondary" onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Policymodal;
