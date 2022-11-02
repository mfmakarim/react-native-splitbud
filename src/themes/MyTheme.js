import {DefaultTheme} from '@react-navigation/native';

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5b21b6',
    background: '#ffffff',
  },
  gradient: ['#60a5fa', '#5b21b6'],
};
