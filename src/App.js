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

  const CustomButton2 = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.dojColor.main,
    color: theme.palette.secondary.main,
    margin: 5,
    "&:hover": { backgroundColor: "purple" },
    "&:disabled": { backgroundColor: "yellow" },
  }));

  return (
    <div>
      <Button variant="text" color="secondary">
        Text
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        color="secondary"
        size="small"
      >
        Contained
      </Button>
      <Button variant="outlined" color="dojColor">
        Outlined
      </Button>
      <Button disabled variant="contained">
        Disabled Contained
      </Button>
      <Typography variant="h1" component="p">
        I am a p tag with h1 styles
      </Typography>
      <CustomButton startIcon={<Settings />} variant="contained" sx={{}}>
        My Custom Button
      </CustomButton>
      <CustomButton2 startIcon={<Add />} variant="contained" sx={{}}>
        My Custom Button2
      </CustomButton2>
    </div>
  );
}

export default App;
