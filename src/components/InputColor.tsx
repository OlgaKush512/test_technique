import { Grid, IconButton, TextField, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

const InputColor = (props: any) => {
  const { setColor } = props;

  const [nameColor, setNameColor] = useState("");
  // const [isColor, setIsColor] = useState(false);

  console.log(nameColor);

  return (
    <Grid container justifyContent="center" alignItems="center" p={1}>
      <Grid item xs={10} lg={7}>
        <TextField
          autoComplete="off"
          id="outlined-basic"
          variant="outlined"
          size="small"
          sx={{ width: "100%" }}
          placeholder={"chose your color"}
          InputProps={{
            endAdornment: (
              <IconButton
                type="button"
                aria-label="search"
                onClick={() => {
                  setColor(nameColor);
                  // setIsColor(true);
                }}
              >
                <AddCircleIcon />
              </IconButton>
            ),
          }}
          onChange={(e) => setNameColor(e.target.value)}
          inputProps={{ style: { textAlign: "center" } }}
        />
      </Grid>
    </Grid>
  );
};

export default InputColor;
