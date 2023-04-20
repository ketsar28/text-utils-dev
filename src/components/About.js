import React from "react";

const About = (props) => {
  // const [mode, setMode] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [modeName, setModeName] = useState("Dark Mode");

  // const ChangeMode = () => {
  //   if (mode.color === "black") {
  //     setMode({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setModeName("Light Mode");
  //   } else {
  //     setMode({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setModeName("Dark Mode");
  //   }
  // };

    let mode = {
      color: props.mode === "dark" ? "#fff" : "#000",
      background: props.mode === "dark" ? "rgba(25, 28, 187, 0.92)" : "#fff",
    }
  return (
    <div className="container my-5">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={{background: props.mode === "dark" ? "rgba(4, 5, 91, 0.92)": "#fff", color: props.mode === "dark" ? "#fff": "#000"}}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong>We Provide Many Features</strong>  
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
            Features to change text to large, change text to small, download text data entered, clean text, and others
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
               style={{background: props.mode === "dark" ? "rgba(4, 5, 91, 0.92)": "#fff", color: props.mode === "dark" ? "#fff": "#000"}}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Our Services Are Verified</strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
            We are ready to assist you in solving problems in a text. The services we provide have been tested for feasibility with global standards. We will always carry out further development with new features that we will release regularly
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
            style={{background: props.mode === "dark" ? "rgba(4, 5, 91, 0.92)": "#fff", color: props.mode === "dark" ? "#fff": "#000"}}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>Number One Most Popular Web Text Application Service</strong>  
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mode}>
            Currently our application services occupy the first position on the internet. Many people are satisfied with the quality of the features we provide. This application can be used safely, quickly and precisely.
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-success my-3" onClick={ChangeMode}>
        {modeName}
      </button> */}
    </div>
  );
};

export default About;
