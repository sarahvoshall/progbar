import { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  // const [progress, setProgress] = useState(0);
  const [progressBars, setProgressBars] = useState([]);
  // const [loadingComplete, setLoadingComplete] = useState(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prev) => prev + 20);
  //   }, 1000);

  //   setTimeout(() => {
  //     clearInterval(interval);
  //   }, 5000);
  // }, []);

  // const handleTimePass = () => {
  //   var interval = setInterval(() => {
  //     setProgress((prev) => prev + 20);
  //   }, 1000);

  //   setTimeout(() => {
  //     clearInterval(interval)
  //   }, 5000)
  // };

  const handleAddBar = () => {
    setProgressBars(progressBars.concat(0))
  }

  return (
    <>
      <h1>Progress Bars</h1>
      <div className="card">
        <button onClick={handleAddBar}>add a progress bar</button>
        {progressBars.map(bar => {
          return <ProgressBar />
        })}
      </div>
    </>
  );
}

export default App;
