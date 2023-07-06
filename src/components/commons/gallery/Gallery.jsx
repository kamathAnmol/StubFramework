import React, { useState } from "react";
import MediaPlayer from "./media-player";
import MediaPreview from "./media-preview";

import "./Gallery.css";

function Gallery(props) {
  const [play, setPlay] = useState({ play: false, content: {} });

  return (
    <>
      {play.play ? (
        <MediaPlayer content={play.content} setPlay={setPlay} />
      ) : (
        <MediaPreview contents={props.contents} setPlay={setPlay} />
      )}
    </>
  );
}

export default Gallery;
