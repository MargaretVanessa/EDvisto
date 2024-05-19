import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/pages/PageLogin';
import Register from './components/pages/PageRegister';
import Popup from './components/pages/PagePopup';
import PopupStart from './components/pages/PagePopupStar';
import theme from './theme/theme.js';
import './App.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
          <Route path="/popup" element={<Popup/>}/>
          <Route path="/PopupStart" element={<PopupStart/>}/>
          {/* <Route path="/" element={<Proyect color={theme.palette.accent.main}/>}/> */}
          {/* <Route path="/*" element={<Navigate to="/Error404" /> } />  */}
        </Routes>
      </Router>

      {/* <Proyect color={theme.palette.secondary.main}/> */}
      {/* <Proyect color={theme.palette.primary.main}/> */}
      {/* <Proyect color={theme.palette.accent.main}/> */}
    </ThemeProvider>
  )
}

export default App
