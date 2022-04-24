# Learning MUI

- After installation,
- use Roboto Google Fonts, because MUI depends on it.
- You can add custom styles by using the 'sx' prop.(it is an object that takes in js/css styles)

```js
<Component
  sx={{
    backgroundColor: "red",
    color: "blue",
    margin: 5,
    "&:hover": { backgroundColor: "pink" },
    // Add this for elements that can be disabled:
    "&:disabled": { backgroundColor: "yellow" },
  }}
>
  My Custom Button
</Component>
```

# Button

```js
<Button variant="contained" color="secondary" size="small">
  Contained
</Button>
```

- You can add icons on left and right

```js
<Button startIcon={<Add />} variant="contained" color="secondary" size="small">
  Add Post
</Button>
```

# Typography

- To use the Typography you can either intall and use the roboto font with the mui font source or you add the roboto font from google fonts.

```js
<Typography variant="h1" component="p">
  I am a p tag with h1 styles
</Typography>
```

# Custom Components

- You can create a custom component(Button, Typography, etc) by using the 'styled' from MUI

  ```js
  import { styled } from "@mui/material";

  const CustomButton = styled(Button)({
    backgroundColor: "red",
    color: "blue",
    margin: 5,
    "&:hover": { backgroundColor: "pink" },
    "&:disabled": { backgroundColor: "yellow" },
  });

  <CustomButton startIcon={<Settings />} variant="contained" sx={{}}>
    My Custom Button
  </CustomButton>;
  ```

# Theme

- You can create your own theme if you already have a specific design pattern you want to follow
- You first create a theme.js file and import 'createTheme' from mui, and create your custom theme

```js
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#B90000",
      light: "#B93730",
    },
    secondary: {
      main: "#F99999",
    },
    dojColor: {
      main: "#440888",
    },
  },
});
// Checkout docs for more
```

- To use your theme, you have to rap the components you want to use the theme with the 'themeProvider'.
  - If its the whole app, you can do it in the main index.js

```js
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

- You can also access your theme in your custom components by adding a function and passing the theme as a param when creating the custom component.

```js
const CustomButton2 = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.dojColor.main,
  color: theme.palette.secondary.main,
  margin: 5,
  "&:hover": { backgroundColor: "purple" },
  "&:disabled": { backgroundColor: "yellow" },
}));
```
