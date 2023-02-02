import React from "react";

import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import router from "./router";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import LoadingFullPage from "./components/Generic/LoadingFullPage";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      // main: "#2c84cb",
      main: "#161662",
    },
    secondary: {
      main: "#48488c",
    },
  },
  typography: {
    allVariants: {
      // fontFamily: 'roboto',
      textTransform: "none",
      // fontSize: 16,
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={1}>
        <Provider store={store}>
          <PersistGate loading={<LoadingFullPage />} persistor={persistor}>
            <CssBaseline />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
