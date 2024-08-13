"use client";
import { Appcontext } from "@/app/contexts/AppcontextProvider";
import React, { useContext, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;

const extractPdfText = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let text = "";

  for (let i = 0; i < pdf.numPages; i++) {
    const page = await pdf.getPage(i + 1);
    const content = await page.getTextContent();
    const strings = content.items.map((item: any) => item.str);
    text += strings.join(" ") + " ";
  }

  return text;
};

const extractDocxText = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
};

const uploadtomodel = async (policy: { data: string }) => {
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
  }
};

const Formmodal = () => {
  const [policy, setpolicy] = useState("");
  const [policyerror, setpolicyerror] = useState("");
  const [fileerror, setfileerror] = useState("");
  const [filecontent, setfilecontent] = useState("");

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
        const text = await extractPdfText(file);
        setfilecontent(text);
      } else if (
        fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const text = await extractDocxText(file);
        setfilecontent(text);
      } else {
        setfileerror("Invalid file type. Please upload a PDF or DOCX file.");
      }
    } else {
      setfilecontent("");
      setfileerror("No file selected");
    }

    console.log(filecontent);
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
    let policydata;
    if (policy !== "") {
      policydata = policy.replace(/"/g, '\\"').replace(/\n/g, "\\n");
    } else {
      policydata = filecontent.replace(/"/g, '\\"').replace(/\n/g, "\\n");
    }

    // console.log(policydata);

    let res = await uploadtomodel({ data: policydata });
    if (!res?.ok) {
      showpagemessage("Unable to summarise policy", "error");
      return;
    }

    let data = await res?.json();
    // console.log(data);
    addsummarisedpolicy({
      DataCollection: data["Data Collection"].replace(/\\n/g, '\n'),
      DataUsage: data["Data Usage"].replace(/\\n/g, '\n'),
      DataStorage: data["Data Storage"].replace(/\\n/g, '\n'),
      DataSharing: data["Data Sharing"].replace(/\\n/g, '\n'),
      RightsandProtection: data["Rights and Protection"].replace(/\\n/g, '\n'),
    });

    togglemodalcontent("policy");
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
            accept=".pdf,.docx"
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
            className="click"
            onClick={handlesubmit}
            style={{ left: "auto", transform: "translateX(0)" }}
          >
            Summarize Policy
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
