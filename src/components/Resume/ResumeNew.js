import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Anup_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNextPage = () => {
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", marginBottom: "15px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume justify-content-center">
          <div style={{
            width: windowWidth > 786 ? "850px" : "95vw",
            height: "90vh",
            overflow: "auto",
            border: "1px solid #ddd",
            background: "#fff",
            padding: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}>
            <Document 
              file={pdf}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              loading={<p>Loading PDF...</p>}
            >
              <Page pageNumber={pageNumber} width={windowWidth > 786 ? 800 : windowWidth * 0.9} />
            </Document>

            <div style={{ marginTop: "15px" }}>
              <Button variant="secondary" onClick={handlePrevPage} disabled={pageNumber === 1}>
                Previous
              </Button>
              <span style={{ margin: "0 10px" }}>
                Page {pageNumber} of {numPages}
              </span>
              <Button variant="secondary" onClick={handleNextPage} disabled={pageNumber === numPages}>
                Next
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
