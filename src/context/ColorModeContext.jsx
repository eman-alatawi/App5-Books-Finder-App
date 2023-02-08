import React from "react"

import { createTheme, ThemeProvider } from "@mui/material";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


export default function ToggleColorMode({children}) {
  const [mode, setMode] = React.useState('dark');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
       {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
