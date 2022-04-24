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
