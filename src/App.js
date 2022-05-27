import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary Project</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          <small>
            This project was coded by <strong>Cheyenne Strause</strong> and is{" "}
            <a href="https://github.com/CheyenneStrause/dictionary-project">
              {" "}
              open-sourced on Github
            </a>{" "}
            and{" "}
            <a href="https://sparkling-seahorse-e1e8c7.netlify.app/">
              hosted on Netlify
            </a>{" "}
            🌴
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
