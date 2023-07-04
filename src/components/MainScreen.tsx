import { Container, Paper } from "@mui/material";
import ColorPicker from "./ColorPicker";
import InputColor from "./InputColor";
import { useState } from "react";


const MainScreen = () => {
  const [color, setColor] = useState("");
  const [colorGeneral, setColorGeneral] = useState("");

  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: colorGeneral,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          border: "solid",
          borderRadius: "16px",
          mt: 10,
          height: "60vh",
          width: "40vw",
        }}
      >
          <ColorPicker newColor={color} changeColor={setColorGeneral} />
          <InputColor setColor={setColor} />
      </Paper>
    </Container>
  );
};

export default MainScreen;
