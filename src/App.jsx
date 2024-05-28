import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import theme from "../src/theme/theme.js";
import BaseLayoutSiderbar from './components/templates/BaseLayoutSiderbar/BaseLayoutSiderbar.jsx';
import BaseLayoutHome from './components/templates/Home/BaseLayoutHome.jsx';
  
import Popup from './pages/PagePopup/PagePopup.jsx';
import PopupStart from './pages/PagePopupStar/PagePopupStar.jsx';
import Header from '../src/components/molecules/Header/Header.jsx';
import Report from './pages/Report/Report.jsx';
import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <BaseLayoutSiderbar>
      </BaseLayoutSiderbar>
    </ThemeProvider>
  )
}

export default App