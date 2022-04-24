import { Button, Typography } from "@mui/material";
import { Add, SettingsIcon } from "@mui/icons-material";

function App() {
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
      <Button
        variant="contained"
        sx={{
          backgroundColor: "red",
          color: "blue",
          margin: 5,
          "&:hover": { backgroundColor: "pink" },
          "&:disabled": { backgroundColor: "yellow" },
        }}
      >
        My Custom Button
      </Button>
    </div>
  );
}

export default App;
