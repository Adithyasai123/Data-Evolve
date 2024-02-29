import React, { useState } from "react";
import "./New.css";

import upload_icon from "../../Assets/upload_icon.png";
import pdf_icon from "../../Assets/pdf_icon.png";

const New = () => {
  // const [IsVisible, setIsVisible] = useState(Array(12).fill(false));
  // const [selectedFile, setSelectedFile] = useState(null);

  // const toggleVisbility = () => {
  //   setIsVisible(true);
  // };
  // const pdfRemove = () => {
  //   setIsVisible(false);
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];

  //   if (file && file.type === 'application/pdf') {
  //     setSelectedFile(file);
  //   } else {
  //     alert("please select PDF file");
  //   }
  // };

  // const removeFile = () => {
  //   setSelectedFile(null);
  // };

  // const handleClose = () => {
  //   pdfRemove(true)
  // }
  const [IsVisible, setIsVisible] = useState(Array(12).fill(false));
  const [selectedFiles, setSelectedFiles] = useState(Array(12).fill(null));

  const toggleVisibility = (index) => {
    setIsVisible((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleFileChange = (event, index) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFiles((prevState) => {
        const newState = [...prevState];
        newState[index] = file;
        return newState;
      });
    } else {
      alert("Please select a PDF file");
    }
  };

  const removeFile = (index) => {
    setSelectedFiles((prevState) => {
      const newState = [...prevState];
      newState[index] = null;
      return newState;
    });




  };

  return (
    <div className="mt-4" style={{ marginBottom: "150px" }}>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-">
              <div className="header">
                <span>Request for the Subsequent Tranche ( 1/2 ) :</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 first-box">
              <span first-text>
                1. Utilization Certificate of previous&nbsp; installment
              </span>
              <span style={{ color: "red" }}> *</span>
              <br />

              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(1)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[1] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(1)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${1}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(1)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${1}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 1)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[1] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[1].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-1" style={{backgroundColor:"#d2eaff"}}></div>

            <div className="col-md-5 second-box">
              <span>
                2. Audited statement of expenditure separately for Management
                fee and Seed Fund along with bank statement
              </span>
              <span style={{ color: "red" }}> *</span>
              <div className="">
                <div style={{ marginTop: "20px" }}>
                  <button
                    onClick={() => toggleVisibility(2)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[2] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(2)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${2}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(2)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${2}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 2)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[2] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[2].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-md-5 first-box">
              <span first-text>3. Details of Interest earned, if any</span>
              <span style={{ color: "red" }}> *</span>
              <br />
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(3)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[3] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(3)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${3}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(3)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${3}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 3)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[3] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[3].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-1" style={{backgroundColor:"#d2eaff"}}></div>
            <div className="col-md-5 second-box">
              <span>4. Details of Interest earned, if any</span>
              <span style={{ color: "red" }}> *</span>
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(4)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[4] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(4)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${4}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(4)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${4}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 4)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[4] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[4].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-md-5 first-box">
              <span first-text>
                5. Proof of achievement of milestones as decided by EAC
              </span>
              <br />
              <span>on monthly/quarterly basis (para-5.4) </span>
              <span style={{ color: "red" }}> *</span>
              <br />
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(5)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[5] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(5)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${5}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(5)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${5}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 5)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[5] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[5].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-1" style={{backgroundColor:"#d2eaff"}}></div>
            <div className="col-md-5 second-box">
              <span>
                6. Details of convertible debentures, or debt, or debt-linked
                instruments along with interest and return on investment for
                each Startup
              </span>
              <span style={{ color: "red" }}> *</span>
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(6)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[6] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(6)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${6}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(6)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${6}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 6)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[6] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[6].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-md-5 first-box">
              <span first-text>
                7. Details of grant disbursed and return on investment for
              </span>
              <br />
              <span>each startup </span>
              <span style={{ color: "red" }}> *</span>
              <br />
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(7)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[7] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(7)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${7}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(7)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${7}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 7)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[7] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[7].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-1" style={{backgroundColor:"#d2eaff"}}></div>
            <div className="col-md-5 second-box">
              <span>
                8. A declaration that selected startup by an incubator for
                assistance
              </span>
              <br />
              <span>under this scheme has not been charged any fees </span>
              <span style={{ color: "red" }}> *</span>
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(8)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[8] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(8)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${8}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(8)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${8}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 8)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[8] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[8].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-md-5 first-box">
              <span first-text>
                9. Copy of legal agreements executed between Incubator
              </span>
              <br />
              <span> and Startups</span>
              <span style={{ color: "red" }}> *</span>
              <br />
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(9)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[9] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(9)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${9}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(9)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${9}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 9)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[9] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[9].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-1" style={{backgroundColor:"#d2eaff"}}></div>
            <div className="col-md-5 second-box">
              <span>10. Proof of PFMS portal</span>

              <span style={{ color: "red" }}> *</span>
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(10)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[10] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(10)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${10}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(10)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${10}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 10)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[10] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[10].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-md-5 first-box">
              <span first-text>11. Previous sanction order</span>
              <span style={{ color: "red" }}> *</span>
              <br />
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(11)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[11] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(11)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${11}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(11)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${11}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 11)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[11] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[11].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-1" style={{backgroundColor:"#d2eaff"}}></div>
            <div className="col-md-5 second-box">
              <span>12. TRA Agreement</span>

              <span style={{ color: "red" }}> *</span>
              <div className="">
                <div style={{ marginTop: "40px" }}>
                  <button
                    onClick={() => toggleVisibility(12)}
                    className="upload-button"
                  >
                    upload
                  </button>
                </div>

                {IsVisible[12] && (
                  <div className="upload-box">
                    <div className="toogle-close-section">
                      {" "}
                      <button
                        type="button"
                        className="toogle-close-button"
                        onClick={() => toggleVisibility(12)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div>
                      <span className="drag-text">
                        Drag & Drop the file or Browse
                      </span>
                    </div>

                    <div>
                      <span className="upload_icon">
                        <img src={upload_icon} alt="upload_icon" />
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <label
                        className="browse-button"
                        htmlFor={`file-input-${12}`}
                      >
                        Browse
                      </label>
                    </div>

                    <div className="pdf-box"></div>
                    <div className="remove-section">
                      {" "}
                      <button
                        type="button"
                        className="remove-button"
                        onClick={() => removeFile(12)}
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="pdf-section">
                      <span style={{ display: "flex" }}>
                        <img
                          src={pdf_icon}
                          className="pdf_icon"
                          alt="pdf_icon"
                        />
                      </span>
                      <span>
                        <div>
                          <input
                            id={`file-input-${12}`}
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 12)}
                            style={{ display: "none" }}
                          />

                          {selectedFiles[12] && (
                            <div>
                              <span style={{ marginLeft: "20px" }}>
                                {selectedFiles[12].name}
                              </span>
                            </div>
                          )}
                        </div>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
       
      <div className=" bottom-button">
                 
                
      <button  className="save-next-button">SAVE & NEXT</button>

        
      </div>
    
    </div>
  );
};

export default New;
