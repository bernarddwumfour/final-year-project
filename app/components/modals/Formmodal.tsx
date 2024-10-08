"use client";
import { Appcontext } from "@/app/contexts/AppcontextProvider";
import React, { useContext, useState } from "react";
import mammoth from "mammoth";


const extractDocxText = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
};

const extractTxtText = async (file: File): Promise<string> => {
  // Extract the content of the file as a string
  const text = await file.text();

  // Normalize all newlines to `\n` (handling different OS newline formats)
  const cleanedText = text.replace(/\r\n|\r/g, '\n').replace(/\n\s*\n+/g, '\n\n');

  // Return the processed text
  return cleanedText;
};


const uploadtomodel = async (policy:{ data: string }) => {
  console.log(policy)
  try {
    const res = await fetch(
      "https://finalyearproject-ai-1.onrender.com/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(policy),
      }
    );

    return res;
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      status: 500,
      json: async () => ({ message: "Internal Server Error" }),
    };
  }
};

const Formmodal = () => {
  const [policy, setpolicy] = useState("");
  const [policyerror, setpolicyerror] = useState("");
  const [fileerror, setfileerror] = useState("");
  const [filecontent, setfilecontent] = useState("");
  const [loading,setloading] = useState<boolean>(false)

  const {
    togglemodalcontent,
    showpagemessage,
    togglemodal,
    addsummarisedpolicy,
  } = useContext(Appcontext);

  const handlefile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setfileerror("");
      const fileType = file.type;
  
      if (fileType === "application/pdf") {
        // const text = await extractTextFromPDF(file);
        // setfilecontent(text);
      } else if (fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        const text = await extractDocxText(file);
        setfilecontent(text);
      } else if (fileType === "text/plain") {
        const text = await extractTxtText(file);
        setfilecontent(text);
        console.log(text)
      } else {
        setfileerror("Invalid file type. Please upload a PDF, DOCX, or TXT file.");
      }
    } else {
      setfilecontent("");
      setfileerror("No file selected");
    }
    // console.log(filecontent);
  };

  const handlesubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setpolicyerror("");
    setfileerror("");

    //Check if both options or olny one was used and alert the user acordingly
    if (policy === "" && filecontent === "") {
      showpagemessage("Please paste a policy or upload a the file", "error");
      return;
    } else if (policy != "" && filecontent != "") {
      showpagemessage("Please select only one option", "error");
      return;
    } else if (policy !== "" && policy.length < 300) {
      setpolicyerror("Policy is too short to summarise");
      return;
    } else if (filecontent !== "" && filecontent.length < 300) {
      setfileerror("File content is too short to summarise");
      return;
    }

    // Everything has been checked so policy can now be uploaded to model
    let policydata = policy;
    if (policy !== "") {
      policydata = policy;
    } else {
      policydata = filecontent;
    }
    policydata = policydata;
    
    
    console.log(policydata);
    //Set loading state to deactive form button
    setloading(true)
    let fetchdata = { data: policydata }

    let res = await uploadtomodel(fetchdata);
    if (!res.ok) {
      // console.log(res)
      showpagemessage("Unable to summarise policy", "error");
      setloading(false)
      return;
    }

    let data = await res.json();
    console.log(data);
    addsummarisedpolicy({
      DataCollection: data["Data Collection"].replace(/\\n\\n/g, '\n\n').replace(/\\n/g, '\n'),
      DataUsage: data["Data Usage"].replace(/\\n\\n/g, '\n\n').replace(/\\n/g, '\n'),
      DataStorage: data["Data Storage"].replace(/\\n\\n/g, '\n\n').replace(/\\n/g, '\n'),
      DataSharing: data["Data Sharing"].replace(/\\n\\n/g, '\n\n').replace(/\\n/g, '\n'),
      RightsandProtection: data["Rights and Protection"].replace(/\\n\\n/g, '\n\n').replace(/\\n/g, '\n'),
    });

    togglemodalcontent("policy");
    setloading(false)
  };

  const cancelsubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    togglemodal();
  };

  return (
    <div className="form">
      <form action="">
        <p className="label">Upload Privacy Policy To Summarize</p>

        <div className="control">
          <small className="error">{policyerror}</small>
          <textarea
            name="message"
            id="message"
            value={policy}
            onChange={(e) => setpolicy(e.target.value)}
          ></textarea>
          <label htmlFor="message"> Plain Text</label>
        </div>

        <p className="redirect" style={{ textAlign: "center" }}>
          OR
        </p>

        <div className="control">
          <small className="error">{fileerror}</small>
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            onChange={handlefile}
            name="policy"
            id="policy"
          />
          <label htmlFor="policy"> Upload File </label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            paddingTop: "1rem",
          }}
        >
          <button
            className={`click ${loading && "inactive"}`}
            onClick={handlesubmit}
            style={{ left: "auto", transform: "translateX(0)" }}
            disabled = {loading}
          >
            {loading ? <div style={{display : "flex",gap:".65rem"}}>Uploading Policy <div className="lds-dual-ring"></div></div>  :"Summarize Policy"}
          </button>
          <button
            className="click secondary"
            onClick={cancelsubmit}
            style={{ left: "auto", transform: "translateX(0)" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formmodal;
