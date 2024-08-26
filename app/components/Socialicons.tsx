"use client";
import React, { useContext } from "react";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Appcontext } from "../contexts/AppcontextProvider";
import { summarisedpolicies } from "@/lib/summarisedpolicies";

const Socialicons = () => {

    const {togglemodal,addsummarisedpolicy,togglemodalcontent} = useContext(Appcontext)

    const displaypolicy = (policy:summarisedpolicy)=>{
        addsummarisedpolicy(policy)
        togglemodal()
        togglemodalcontent('policy')
    }

  return (
    <div className="socials">
      <span onClick={()=>displaypolicy(summarisedpolicies.x)} style={{ padding: ".6rem .35rem .25rem", borderRadius: ".7rem" , cursor : "pointer"}}>
        <FaXTwitter />
      </span>
      <span onClick={()=>displaypolicy(summarisedpolicies.snapchat)}  style={{ padding: ".6rem .35rem .25rem", borderRadius: ".7rem" , cursor : "pointer"}}>
        <FaSnapchatGhost />
      </span>
      <span onClick={()=>displaypolicy(summarisedpolicies.instagram)}  style={{ padding: ".6rem .35rem .25rem", borderRadius: ".7rem" , cursor : "pointer"}}>
        <RiInstagramFill />
      </span>
      <span onClick={()=>displaypolicy(summarisedpolicies.facebook)}  style={{ padding: ".6rem .35rem .25rem", borderRadius: ".7rem" , cursor : "pointer"}}>
        <FaFacebookF />
      </span>
    </div>
  );
};

export default Socialicons;
