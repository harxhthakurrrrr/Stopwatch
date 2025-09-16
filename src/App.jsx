import React, { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // time in ms
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.display}>{formatTime(time)}</h1>
      <div>
        <button style={{ ...styles.button, background: "#4CAF50" }} onClick={start}>
          Start
        </button>
        <button style={{ ...styles.button, background: "#f44336" }} onClick={stop}>
          Stop
        </button>
        <button style={{ ...styles.button, background: "#2196F3" }} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "300px",
    margin: "50px auto",
  },
  display: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    color: "white",
    cursor: "pointer",
  },
};

export default Stopwatch;
