import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Battle from './Battle';
import Header from './Header';
import Home from './Home';
import ThemeContext from './CreateContext';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={darkMode}>
        <Header toggleDarkMode={toggleDarkMode} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/battle">
          <Battle />
        </Route>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
