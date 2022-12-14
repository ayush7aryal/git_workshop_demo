import "./App.css";
import { Names } from "./names/data";

function App() {
  return (
    <div className="App">
      <h1 className="title">
        WORKSHOP ON VERSION CONTROL SYSTEM WITH GIT AND GITHUB
      </h1>
      <h3>Details of users who have completed PR request</h3>
      <div className="cards">
        {Names.map((data) => {
          return (
            <div className="card-content">
              <div className="name">{data.name}</div>
              <div>{data.department}</div>
              <div>{data.semester}</div>
              <blockquote>{data.message}</blockquote>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
