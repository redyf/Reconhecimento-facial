import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center na">
      <div className="absolute mt2"></div>
      <img
        id="inputimage"
        alt="Example image"
        src={imageUrl}
        width={"500px"}
        height={"auto"}
      />
      <div
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    </div>
  );
};

export default FaceRecognition;
