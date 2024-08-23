"use client";
import { Appcontext } from "@/app/contexts/AppcontextProvider";
import Image from "next/image";
import React, { useContext } from "react";
const Template5 = () => {
  const { summarisedpolicy } = useContext(Appcontext);

  return (
    <div style={{overflow : "hidden"}}>
      <div className="template5" >
      <div className="heading">
        <h2>
          Privacy Policy <br />
          <span>Overview</span>
        </h2>
      </div>
      <div>
        <div className="details">
          <div className="flex">
            <div className="icon" style={{width : "125px"}}>
            <Image
            src={"/template5/collection.png"}
            alt="data collection"
            fill
            style={{ objectFit: "cover" }}
          />
            </div>
            <div className="detail">
              <h2>Data Collection</h2>
              <p>{summarisedpolicy && summarisedpolicy.DataCollection}</p>
            </div>
          </div>

          <div className="flex">
            <div className="icon">
            <Image
            src={"/template5/usage.png"}
            alt="data usage"
            fill
            style={{ objectFit: "cover" }}
          />
            </div>
            <div className="detail">
              <h2>Data Usage</h2>
              <p>{summarisedpolicy && summarisedpolicy.DataUsage}</p>
            </div>
          </div>

          <div className="flex">
            <div className="icon">
            <Image
            src={"/template5/sharing.png"}
            alt="data sharing"
            fill
            style={{ objectFit: "cover" }}
          />
            </div>
            <div className="detail">
              <h2>Data Sharing</h2>
              <p>{summarisedpolicy && summarisedpolicy.DataSharing}</p>
            </div>
          </div>

          <div className="flex">
            <div className="icon">
            <Image
            src={"/template5/storage.png"}
            alt="data storage"
            fill
            style={{ objectFit: "cover" }}
          />
            </div>
            <div className="detail">
              <h2>Data storage</h2>
              <p>{summarisedpolicy && summarisedpolicy.DataStorage}</p>
            </div>
          </div>

          <div className="flex">
            <div className="icon">
            <Image
            src={"/template5/rights.png"}
            alt="user rights"
            fill
            style={{ objectFit: "cover" }}
          />
            </div>
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

export default Template5;
