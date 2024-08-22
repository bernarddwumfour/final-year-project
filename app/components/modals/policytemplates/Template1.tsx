"use client";
import { Appcontext } from "@/app/contexts/AppcontextProvider";
import Image from "next/image";
import React, { useContext } from "react";

const Template1 = () => {
  const { summarisedpolicy } = useContext(Appcontext);

  return (
    <div className="template1">
      <div className="heading">
        <div className="icon">
          <Image
            src={"/template1/left.png"}
            alt="left image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h2>Privacy Policy Overview</h2>
        <div className="icon">
          <Image
            src={"/template1/right.png"}
            alt="right Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div>
        <div className="details">
          {summarisedpolicy && (
            <div className="flex">
              <div className="icon">
                <Image
                  src={"/template1/collection.png"}
                  alt="Data Collection"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex">
                <span>1</span>
                <div className="detail">
                  <h2>Data Collection</h2>
                  <p>{summarisedpolicy.DataCollection}</p>
                </div>
              </div>
            </div>
          )}

          {summarisedpolicy && (
            <div className="flex">
              <div className="icon">
                <Image
                  src={"/template1/usage.png"}
                  alt="Data Usage"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex">
                <span>2</span>
                <div className="detail">
                  <h2>Data Usage</h2>
                  <p>{summarisedpolicy.DataUsage}</p>
                </div>
              </div>
            </div>
          )}

          {summarisedpolicy && (
            <div className="flex">
              <div className="icon">
                <Image
                  src={"/template1/sharing.png"}
                  alt="Data Sharing"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex">
                <span>3</span>
                <div className="detail">
                  <h2>Data Sharing</h2>
                  <p>{summarisedpolicy.DataSharing}</p>
                </div>
              </div>
            </div>
          )}

          {summarisedpolicy && (
            <div className="flex">
              <div className="icon" style={{ transform: "scale(1.13)" }}>
                <Image
                  src={"/template1/storage.png"}
                  alt="Data Storage"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex">
                <span>4</span>
                <div className="detail">
                  <h2>Data storage</h2>
                  <p>{summarisedpolicy.DataStorage}</p>
                </div>
              </div>
            </div>
          )}

          {summarisedpolicy && (
            <div className="flex">
              <div className="icon">
                <Image
                  src={"/template1/rights.png"}
                  alt="Data Rights"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="flex">
                <span>5</span>
                <div className="detail">
                  <h2>Rights And Protection</h2>
                  <p>{summarisedpolicy.RightsandProtection}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template1;
