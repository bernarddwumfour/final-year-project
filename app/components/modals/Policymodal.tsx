import { Appcontext } from "@/app/contexts/AppcontextProvider";
import Image from "next/image";
import React, { useContext } from "react";
import Template1 from "./policytemplates/Template1";
import Template2 from "./policytemplates/Template2";

const Policymodal = () => {
  const { togglemodalcontent, togglemodal } = useContext(Appcontext);

  const cancel: () => void = () => {
    togglemodalcontent("form");
    togglemodal();
  };

  return (
    <div className="policy">
      <Template1 />
      {/* <Template2/> */}

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
