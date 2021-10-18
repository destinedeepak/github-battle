import { useState, useContext } from 'react';
import ThemeContext from './CreateContext';
import PopularRepos from './PopularRepos';
function Home() {
  const [activeLanguage, setActiveLanguage] = useState('All');
  let darkMode = useContext(ThemeContext);
  return (
    <section className={`px-20 ${darkMode ? 'bg-dark' : ''}`}>
      <ul className="flex justify-center">
        {['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'].map(
          (language) => {
            return (
              <li
                className={`mr-8 text-lg font-semibold cursor-pointer ${
                  activeLanguage === language ? `text-red-500` : `text-black`
                } ${
                  darkMode && activeLanguage !== language ? ' text-dark' : ''
                }`}
                onClick={() => {
                  setActiveLanguage(language);
                }}
              >
                {language}
              </li>
            );
          }
        )}
      </ul>
      <PopularRepos activeLanguage={activeLanguage} />
    </section>
  );
}

export default Home;
