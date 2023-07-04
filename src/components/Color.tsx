import { Paper } from "@mui/material";
import React from "react";

interface PROPS {
  color: string;
  index: number;
  changeColor: (e: string) => void;
}

const Color = (props: PROPS) => {
  const { color, index, changeColor } = props;

  return (
    <>
      <div
        className="grid-item"
        key={index}
        onClick={() => changeColor(color)}
        style={{
          backgroundColor: color,
          width: "10rem",
          height: "10rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.8rem",
        }}
      >
        {color}
      </div>
    </>
  );
};

export default Color;
