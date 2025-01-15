'use client'
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Switch, FormControlLabel } from '@mui/material';
import { lightTheme, darkTheme } from '../../../theme/theme';
import useThemeStore from '@/app/store/themeStore';



const ThemeWrapper = ({ children }) => {
  const { isDarkMode } = useThemeStore(); 

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
