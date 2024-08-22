"use client";
import { Appcontext } from "@/app/contexts/AppcontextProvider";
import Image from "next/image";
import React, { useContext } from "react";
const Template4 = () => {
  const { summarisedpolicy } = useContext(Appcontext);

  return (
    <div style={{overflow : "hidden"}}>
      <div className="template4" >
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
             <div className="hider2"></div>
            <div className="icon">
            <Image
            src={"/template4/collection.png"}
            alt="left image"
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
            <div className="hider"></div>
             <div className="hider2"></div>
            <div className="icon">
            <Image
            src={"/template4/usage.png"}
            alt="left image"
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
            <div className="hider"></div>
             <div className="hider2"></div>
            <div className="icon">
            <Image
            src={"/template4/sharing.png"}
            alt="left image"
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
            <div className="hider"></div>
             <div className="hider2"></div>
            <div className="icon">
            <Image
            src={"/template4/storage.png"}
            alt="left image"
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
            <div className="hider"></div>
             <div className="hider2"></div>
            <div className="icon">
            <Image
            src={"/template4/rights.png"}
            alt="left image"
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

export default Template4;
