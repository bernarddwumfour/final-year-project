'use client'
import { Appcontext } from "@/app/contexts/AppcontextProvider";
import React, { useContext } from "react";

const Template1 = () => {


  const { summarisedpolicy} = useContext(Appcontext);

  return (
    <div className="template1">
      <div className="heading">
        <div className="icon"></div>
        <h2>Privacy Policy Overview</h2>
        <div className="icon"></div>
      </div>
      <div>

        <div className="details">
          <div className="flex">
            <div className="icon"></div>
            <div className="flex">
              <span>1</span>
              <div className="detail">
                <h2>Data Collection</h2>
                <p>
                  {summarisedpolicy && summarisedpolicy.DataCollection}
                </p>
              </div>
            </div>
          </div>


          
          <div className="flex">
            <div className="icon"></div>
            <div className="flex">
              <span>2</span>
              <div className="detail">
                <h2>Data Usage</h2>
                <p>
                {summarisedpolicy && summarisedpolicy.DataUsage}
                </p>
              </div>
            </div>
          </div>


          <div className="flex">
            <div className="icon"></div>
            <div className="flex">
              <span>3</span>
              <div className="detail">
                <h2>Data Sharing</h2>
                <p>
                  {summarisedpolicy && summarisedpolicy.DataSharing}
                </p>
              </div>
            </div>
          </div>


          <div className="flex">
            <div className="icon"></div>
            <div className="flex">
              <span>4</span>
              <div className="detail">
                <h2>Data storage</h2>
                <p>
                  {summarisedpolicy && summarisedpolicy.DataStorage}
                </p>
              </div>
            </div>
          </div>


          <div className="flex">
            <div className="icon"></div>
            <div className="flex">
              <span>5</span>
              <div className="detail">
                <h2>Rights And Protection</h2>
                <p>
                  {summarisedpolicy && summarisedpolicy.RightsandProtection}
                </p>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Template1;
