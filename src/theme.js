import { purple, cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme(
  {
    //custom trello
    trelloCustom: {
      appBarHeight: "58px",
      boardBarHeight: "68px",
    },

    // this color global app
    colorSchemes: {
      // light: {
      //   palette: {
      //     primary: teal,
      //     secondary: deepOrange,
      //   },
      // },
      // dark: {
      //   palette: {
      //     primary: cyan,
      //     secondary: orange,
      //   },
      // },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          // Name of the slot
          body: {
            // Some CSS
            "*::-webkit-scrollbar": {
              width: "6px",
              height: "6px",
            },
            "*::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "99px",
            },
          },
        },
      },
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            textTransform: "none",
            borderWidth: "0.5px",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          // Name of the slot
          root: ({ theme }) => {
            return {
              // color: `${theme.palette.primary.main} !important`,
              // fontSize: "0.875rem",
            };
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          // Name of the slot
          root: ({ theme }) => {
            return {
              // color: theme.palette.primary.main,
              fontSize: "0.875rem",
            };
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          // Name of the slot
          root: ({ theme }) => {
            // console.log(theme);
            return {
              // color: theme.palette.primary.main,
              fontSize: "0.875rem",
              // ".MuiOutlinedInput-notchedOutline": {
              //   borderColor: theme.palette.primary.light,
              // },
              // "&:hover": {
              //   ".MuiOutlinedInput-notchedOutline": {
              //     borderColor: theme.palette.primary.main,
              //   },
              // },
              "& fieldset": {
                borderWidth: "0.5px ",
              },
              "&:hover fieldset": {
                borderWidth: "1px ",
              },
            };
          },
        },
      },
    },
  }

  // ...other properties
);

export default theme;
