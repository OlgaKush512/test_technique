import Button from "@mui/material/Button";
import MainScreen from "./components/MainScreen";
import { useState } from "react";
function App() {
  const [click, setClick] = useState(true);

  return (
    <>
      {click ? (
        <Button
          variant="contained"
          sx={{ mt: "50vh", backgroundColor: "inherit" }}
          onClick={() => {
            setClick(false);
          }}
        >
          Chose the color
        </Button>
      ) : (
        <MainScreen />
      )}
    </>
  );
}

export default App;
