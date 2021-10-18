import React, { useContext } from 'react';
import { useEffect, useState } from 'react';
import ThemeContext from './CreateContext';
import PopularRepo from './PopularRepo';

function PopularRepos(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const darkMode = useContext(ThemeContext)

  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${props.activeLanguage}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => {
        if (!res.ok) throw new Error('Server responds with error!');
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message));
  }, [props.activeLanguage]);
  if (error)
    return (
      <p
        className={`text-center text-4xl my-4 h-screen py-12 ${
          darkMode ? 'text-dark' : ''
        }`}
      >
        {error}
      </p>
    );
  if (!data) {
    return (
      <p
        className={`text-center text-4xl my-4 h-screen py-12 ${
          darkMode ? 'text-dark' : ''
        }`}
      >
        Fetching
      </p>
    );
  } else {
    return (
      <section className="container mx-auto">
        <ul className="flex justify-start flex-wrap mt-8">
          {data.items.map((user, index) => {
            return <PopularRepo user={user} index={index} />;
          })}
        </ul>
      </section>
    );
  }
}

export default PopularRepos;
