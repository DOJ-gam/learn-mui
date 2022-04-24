import { Button } from "@mui/material";
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
    </div>
  );
}

export default App;
