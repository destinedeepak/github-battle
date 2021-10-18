import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from './CreateContext';
function Header(props) {
  let darkMode = useContext(ThemeContext);
  return (
    <header
      className={`flex justify-between px-20 py-12 items-center ${
        darkMode ? 'bg-dark' : ''
      }`}
    >
      <nav className={`flex ${darkMode ? 'text-dark' : ''}`}>
        <NavLink activeClassName="active" exact to="/">
          <li className="list-none text-lg mr-4 font-semibold">Popular</li>
        </NavLink>
        <NavLink to="/battle">
          <li className="list-none text-lg font-semibold">Battle</li>
        </NavLink>
      </nav>
      <button onClick={props.toggleDarkMode} className="text-3xl">
        {darkMode ? '💡' : '🔦'}
      </button>
    </header>
  );
}
export default Header;
