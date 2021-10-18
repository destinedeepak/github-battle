import { useContext } from 'react';
import ThemeContext from './CreateContext';
export default function PopularRepo(props) {
  let { user, index } = props;
  const darkMode = useContext(ThemeContext);
  return (
    <li
      key={index}
      className={`flex-24  p-10 mr-2 mb-4 rounded ${
        darkMode ? 'bg-dark-gray' : 'bg-primary'
      }`}
    >
      <h2 className={`text-center text-4xl ${darkMode?'text-dark':''}`}>#{index + 1}</h2>
      <img
        className="w-40 mx-auto mt-4 object-cover"
        src={user.owner.avatar_url}
        alt=""
      />
      <h2 className="font-bold text-red-600 text-2xl mt-4 text-center">
        {user.owner.login}
      </h2>
      <div className="font-bold">
        <span className="text-lg w-6 inline-block text-center">
          <i class="fas fa-user"></i>
        </span>{' '}
        <span className={`${darkMode?'text-dark':''}`}>{user.name}</span>
      </div>
      <div>
        <span className="text-lg w-6 inline-block text-center">
          <i class="fas fa-star"></i>
        </span>{' '}
        <span className={`${darkMode?'text-dark':''}`}>{user.watchers_count} stars</span>
      </div>
      <div>
        <span className="text-lg w-7 inline-block text-center">
          <i class="fas fa-code-branch"></i>
        </span>
        <span className={`${darkMode?'text-dark':''}`}>{user.forks_count} forks</span>
      </div>
      <div>
        <img className="w-7 h-7 inline-block" src="/caution.png" alt="" />
        <span className={`${darkMode?'text-dark':''}`}>{user.open_issues} open issues</span>
      </div>
    </li>
  );
}
