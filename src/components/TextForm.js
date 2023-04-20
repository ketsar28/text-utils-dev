import React, { useState, useEffect } from "react";

const TextForm = (props) => {
  const ChangeToUpper = () => {
    if (text.length > 0) {
      console.log(`UpperCase : ${text}`);
      let newText = text.toUpperCase();
      setText(newText);
      props.alert("Text Has Changed to Uppercase", "success");
    } else {
      props.alert("Changing was Failed ", "danger");
    }
  };
  const ChangeToLower = () => {
    if (text.length > 0) {
      console.log(`LowerCase : ${text}`);
      let newText = text.toLowerCase();
      setText(newText);
      props.alert("Text Has Changed to Lowercase", "success");
    } else {
      props.alert("Changing was Failed ", "danger");
    }
  };

  const HandlerClear = () => {
    if (text.length > 0) {
      const clear = "";
      setText(clear);
      props.alert("Text Has Been Removed", "success");
    } else {
      props.alert("No Text To Remove", "warning");
    }
  };

  const CopyClipboard = () => {
    const el = document.querySelector("#textarea");

    if (el.value.length > 0) {
      el.select();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(el.value);
        document.getSelection().removeAllRanges();
        alert(`Copied the Text : ${el.value}`);
      }
      document.execCommand("copy");
      alert(`Copied the Text : ${el.value}`);
      props.alert("Text Has Been Copied", "success");
    } else {
      alert(`Please Input The Text First`);
      props.alert("Copy was Failed", "danger");
    }
  };

  const handlerDownload = (text, filename) => {
    if (text.length > 0) {
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      props.alert("Text Has Been Downloaded", "success");
    } else {
      props.alert("No Text To Download", "warning");
    }
  };

  const Complement = (e) => {
    console.log(text.split(" "));
    setText(e.target.value);
  };
  const [text, setText] = useState("Empty Data! You should add before!");
  // disabled button if nothing the data
  // ? useEffect hook untuk memantau perubahan pada state text, dan ubah nilai isFormEmpty sesuai dengan status input pada form. Jika nilai text kosong, maka isFormEmpty diubah menjadi true, dan sebaliknya.

  const [isFormEmpty, setIsFormEmpty] = useState(true);
  useEffect(() => {
    setIsFormEmpty(text.trim().length === 0);
  }, [text]);

  return (
    <div>
      <div
        className={`container my-5 text-${
          props.mode === "dark" ? "white" : "dark"
        }`}
      >
        <div className="mb-3">
          <h2 className="mb-3 fw-semibold">{props.title}</h2>
          <textarea
            className="form-control mt-2"
            value={text}
            onChange={Complement}
            id="textarea"
            rows="3"
          ></textarea>
        </div>

        <div className="button d-flex gap-2 flex-wrap">
          <button
            className="btn btn-success"
            disabled={isFormEmpty ? true : false}
            onClick={ChangeToUpper}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-success"
            disabled={isFormEmpty ? true : false}
            onClick={ChangeToLower}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-success"
            disabled={isFormEmpty ? true : false}
            onClick={() => handlerDownload(text, "file-aaw.txt")}
          >
            Download Text
          </button>
          <button
            className="btn btn-danger"
            disabled={isFormEmpty ? true : false}
            onClick={CopyClipboard}
          >
            Copy to Clipboard
          </button>
          <button
            className="btn btn-danger"
            disabled={isFormEmpty ? true : false}
            onClick={HandlerClear}
          >
            Clear Form
          </button>
        </div>
      </div>

      <div
        className={`container text-${props.mode === "dark" ? "white" : "dark"}`}
      >
        <h2>{props.titlesecond}</h2>
        <p>
          Word {text.split(" ").filter((el) => el.length !== 0).length} - Letter
          : {text.length} - Reading Time :{" "}
          {text.split(" ").filter((el) => el.length !== 0).length * 0.008}
        </p>
        <h2>Preview : </h2>
        <p>
          {text.length > 0 ? (
            text
          ) : (
            <b style={{ color: "red" }}>enter something in textbox above</b>
          )}
        </p>
      </div>
    </div>
  );
};

export default TextForm;
