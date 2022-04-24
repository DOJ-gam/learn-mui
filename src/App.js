import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const CustomButton = styled(Button)({
    backgroundColor: "red",
    color: "blue",
    margin: 5,
    "&:hover": { backgroundColor: "pink" },
    "&:disabled": { backgroundColor: "yellow" },
  });

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Button disabled variant="contained">
        Disabled Contained
      </Button>
      <Typography variant="h1" component="p">
        I am a p tag with h1 styles
      </Typography>
      <CustomButton startIcon={<Settings />} variant="contained" sx={{}}>
        My Custom Button
      </CustomButton>
    </div>
  );
}

export default App;
