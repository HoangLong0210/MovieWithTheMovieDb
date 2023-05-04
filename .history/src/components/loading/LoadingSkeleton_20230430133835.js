import React from "react";

const LoadingSkeleton = (props) => {
  console.log("LoadingSkeleton ~ props:", props);
  return (
    <div
      className={`skeleton ${props.className}`}
      style={{
        height: props.height || "100%",
        width: props.width || "100%",
        borderRadius: props.borderRadius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
