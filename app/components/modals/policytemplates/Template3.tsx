"use client";
import { Appcontext } from "@/app/contexts/AppcontextProvider";
import React, { useContext } from "react";
const Template3 = () => {
  const { summarisedpolicy } = useContext(Appcontext);

  return (
    <div style={{overflow : "hidden"}}>
      <div className="template3" >
      <div className="heading">
        <h2>
          Privacy Policy <br />
          <span>Overview</span>
        </h2>
      </div>
      <div>
        <div className="details">
          <div className="flex">
            <div className="hider"></div>
            <div className="icon"></div>
            <div className="detail">
              <h2>Data Collection</h2>
              <p>{summarisedpolicy && summarisedpolicy.DataCollection}</p>
            </div>
          </div>

          <div className="flex">
            <div className="hider"></div>
            <div className="icon"></div>
            <div className="detail">
              <h2>Data Usage</h2>
              <p>{summarisedpolicy && summarisedpolicy.DataUsage}</p>
            </div>
          </div>

          <div className="flex">
            <div className="hider"></div>
            <div className="icon"></div>
            <div className="detail">
              <h2>Data Sharing</h2>
              <p>{summarisedpolicy && summarisedpolicy.DataSharing}</p>
            </div>
          </div>

          <div className="flex">
            <div className="hider"></div>
            <div className="icon"></div>
            <div className="detail">
              <h2>Data storage</h2>
              <p>{summarisedpolicy && summarisedpolicy.DataStorage}</p>
            </div>
          </div>

          <div className="flex">
            <div className="hider"></div>
            <div className="icon"></div>
            <div className="detail">
              <h2>Rights And Protection</h2>
              <p>{summarisedpolicy && summarisedpolicy.RightsandProtection}</p>
            </div>
          </div>

          <div style={{ height: "30px" }}></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Template3;
