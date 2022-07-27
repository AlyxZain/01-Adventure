import { About } from '../pages/About';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
        <img
          src='/src/components/assets/logo.png'
          alt='logo'
          className='logo'
        />
      </Link>
      <ul>
        <li>
          <Link to='/about'>About Us</Link>
        </li>
        <li>
          <Link to='/locations'>Locations</Link>
        </li>
        <li>
          <Link to='/guide'>Guide</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
      <Link to='/'>
        <img
          src='/src/components/assets/menu.png'
          className='menu-icon'
          alt='menu'
        />
      </Link>
    </nav>
  );
};
