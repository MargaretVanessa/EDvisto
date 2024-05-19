import Input from './components/atoms/Input';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <div style={{ display: 'flex',flexDirection: 'column', justifyContent:'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex',flexDirection: 'column', justifyContent:'center', gap: '0.5rem' }}>
            <Input inputId={'nameOutlined'} textLabel={'Nombre'}  variant="outlined" />
            <Input inputId={'nameFilled'} textLabel={'Nombre'} variant="filled"/>
            <Input inputId={'nameStandard'} textLabel={'Nombre'} variant="standard"/>
          </div>
          </div>
        <Input inputId={'password'} type={'password'} textLabel={'Contraseña'} />
        <Input inputId={'email'} type={'e-mail'} textLabel={'E-mail'} />
        <Input inputId={'file'} type={'file'} textLabel={'Imagen de perfil'} />
      </div>
    </ThemeProvider>
  );
}

export default App;
