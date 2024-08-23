import { Appcontext } from "@/app/contexts/AppcontextProvider";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Template1 from "./policytemplates/Template1";
import Template2 from "./policytemplates/Template2";
import { usePDF } from 'react-to-pdf';
import Template3 from "./policytemplates/Template3";
import Template4 from "./policytemplates/template4";
import Template5 from "./policytemplates/Template5";


function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
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


  const regenrate = ()=>[
    setrandom(getRandomNumber())
  ]


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
      {random ==4 && <Template4/>}
      {random ==5 && <Template5/>}
      </div>
      <div className="actions">
        <button  className={`click ${loading && "inactive"}`} disabled = {loading}  onClick={() => saveaspdf()}>
          {loading ? "Downloading" :"Save"}
          </button>
        <button className="click secondary" onClick={cancel}>
          Cancel
        </button>
        <button className="click tertiary" onClick={regenrate}>
          Regenrate template
        </button>
      </div>
    </div>
  );
};

export default Policymodal;
