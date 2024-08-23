"use client";
import { Appcontext } from "@/app/contexts/AppcontextProvider";
import Image from "next/image";
import React, { useContext } from "react";
const Template2 = () => {
  const { summarisedpolicy } = useContext(Appcontext);

  return (
    <div style={{overflow : "hidden"}}>
      <div className="template2" >
      <div className="circle circle1"><Image
            src={"/template2/left.png"}
            alt="left"
            fill
            style={{ objectFit: "cover" }}
          /></div>
      <div className="circle circle2">
      <Image
            src={"/template2/right.png"}
            alt="right"
            fill
            style={{ objectFit: "cover" }}
          />
      </div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="heading">
        <h2>
          Privacy Policy <br />
          <span>Overview</span>
        </h2>
      </div>
      <div>
        <div className="details">
          <div className="flex">
            <div className="icon">
            <Image
            src={"/template2/collection.png"}
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
            src={"/template2/usage.png"}
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
            src={"/template2/sharing.png"}
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
            src={"/template2/storage.png"}
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
            src={"/template2/rights.png"}
            alt="data rights"
            fill
            style={{ objectFit: "cover" }}
          />
            </div>
            <div className="detail">
              <h2>Rights And Protection</h2>
              <p>{summarisedpolicy && summarisedpolicy.RightsandProtection}</p>
            </div>
          </div>

          <div style={{ height: "100px" }}></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Template2;
