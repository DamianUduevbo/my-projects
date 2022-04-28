import './App.css';
import Dropdown from './components/Dropdown';
//<img src={logo} className="App-logo" alt="logo" />

function App() {
  const projects = {
    "rate_my_dorm": {
      "title": "rate-my-dorm",
      "description": "Project from Oasis at NEU. Made a website 'RateMyDorm' using ReactJS DOM and React Router, with a Firebase backend.",
      "link": "https://github.com/DamianUduevbo/rate-my-dorm"
    },
    "react_SM": {
      "title": "react-SM",
      "description": "My first React app. Single page. Attempt at making a social media site. Includes nonpersistent local messaging.",
      "link": "https://github.com/DamianUduevbo/React-SM"
    },
    "husky_online": {
      "title": "husky-online",
      "description": "For Northeastern students looking for other gamers to play with.",
      "link": "https://github.com/DamianUduevbo/husky-online"
    },
    "fundies": {
      "title": "Fundamentals-of-Comp-Sci",
      "description": "Java projects. Practiced use of recursion and algoritims.",
      "link": "https://github.com/DamianUduevbo/Fundamentals-of-Comp-Sci"
    },
    "message_logger": {
      "title": "MessageLogger [PRIVATE]",
      "description": "Webscraping application written in JavaScript and Python. Similar to a Bloomberg terminal. Reads messages and articles, filters the important information using an AI, and logs the summarised text to a text file on the user's PC.",
      "link": null
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-navbar">
          Welcome to My Project Page :)
        </nav>
        <div className='grid-container' style={{ position: "fixed" }}>
          <Dropdown className='item1' JSonData={projects.react_SM} />
          <Dropdown className='item2' JSonData={projects.rate_my_dorm} />
          <Dropdown className='item3' JSonData={projects.husky_online} />
          <Dropdown className='item4' JSonData={projects.fundies} />
          <Dropdown className='item5' JSonData={projects.message_logger} />
        </div>
      </header>
    </div>
  );
}

export default App;
