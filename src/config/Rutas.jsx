import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Locations } from '../pages/Locations';
import { Guide } from '../pages/Guide';
import { Contact } from '../pages/Contact';

export const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/locations' element={<Locations />} />
      <Route path='/guide' element={<Guide />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};
