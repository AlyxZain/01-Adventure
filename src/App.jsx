import { NavBar } from './components/NavBar';
import { SocialMedia } from './components/SocialMedia';
import { Rutas } from './config/Rutas';

function App() {
  return (
    <div className='header'>
      <NavBar />
      <SocialMedia />

      <div className='line'></div>

      <Rutas />
    </div>
  );
}

export default App;
