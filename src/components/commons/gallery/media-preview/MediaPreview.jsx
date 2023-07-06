import React, {useState} from "react";
import {Document, Page, pdfjs} from "react-pdf";
import "../Gallery.css";

import ReactPlayer from "react-player";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function MediaPreview(props) {
  let numColumns;
  if (props.contents.length === 1) {
    numColumns = "center";
  } else {
    numColumns = "2";
  }

  function handleHover(title) {
    console.log(title);
  }

  return (
    <div className={`grid grid-${numColumns}`} style={{cursor: "pointer"}}>
      {props.contents.map((item, index) =>
        item.type === "pdf" ? (
          <div className="thumbnail-wrapper">
            <div className="custom-thumbnail">
              <Document
                file={item.src}
                onClick={() => {
                  props.setPlay({play: true, content: item});
                }}
                onMouseEnter={() => {
                  handleHover(item.title);
                }}
              >
                <Page
                  pageNumber={1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="pdf-page"
                />
              </Document>
            </div>
            <span className="thumbnail-text">
              <h2>{item.title}</h2>
            </span>
          </div>
        ) : item.type === "image" ? (
          <div className="thumbnail-wrapper">
            <div className="custom-thumbnail">
              <img
                className="image-file"
                src={item.src}
                alt={item.alt}
                onClick={() => {
                  props.setPlay({play: true, content: item});
                }}
                onMouseEnter={() => {
                  handleHover(item.title);
                }}
              />
            </div>
            <span className="thumbnail-text">
              <h2>{item.title}</h2>
            </span>
          </div>
        ) : (
          <div className="thumbnail-wrapper">
            <div className="custom-thumbnail">
              <ReactPlayer
                url={item.src}
                controls={true}
                light={item.thumbnail}
                height="auto"
                onClick={() => {
                  props.setPlay({play: true, content: item});
                }}
                onMouseEnter={() => {
                  handleHover(item.title);
                }}
              />
            </div>
            <span class="thumbnail-text">
              <h2>{item.title}</h2>
            </span>
          </div>
        )
      )}
    </div>
  );
}

export default MediaPreview;
