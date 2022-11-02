import {createContext} from 'react';
import React from 'react';
import {MyTheme} from '../themes/MyTheme';

export const ThemeContext = createContext(null);
export const ThemeContextProvider = ({children}) => (
  <ThemeContext.Provider value={MyTheme}>{children}</ThemeContext.Provider>
);
