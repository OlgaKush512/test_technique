import { Box, Paper } from "@mui/material";
import "./ColorPicker.css";
import Color from "./Color";

let colors = ["#463f4b", "#ffcf71", "#c8977d", "#9d737a"];

const minWidth = (nbColors: number) => {
  let sqr = Math.round(Math.sqrt(nbColors));
  if (sqr * sqr < nbColors) {
    sqr += 1;
  }
  return sqr;
};

interface COLOR {
  newColor: string;
  changeColor: (e: string) => void;
}

const ColorPicker = (props: COLOR) => {
  const { newColor, changeColor } = props;

  const width = minWidth(colors.length);

  if (newColor) {
    colors.push(newColor);
  }

  console.log(width);
  return (
    <Box display="flex" justifyContent="center">
      <Paper
        sx={{
          height: "60vh",
          borderRadius: "16px 16px 16px 16px ",
          overflow: "auto",
        }}
        elevation={0}
      >
        {colors.map((color, index) => (
          <Color
            key={index}
            index={index}
            color={color}
            changeColor={changeColor}
          />
        ))}
      </Paper>
    </Box>
  );
};

export default ColorPicker;
