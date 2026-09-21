import { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState("");

  const calculateDDay = () => {
    if (date === "") {
      return "날짜를 선택해주세요.";
    }

    const today = new Date();
    const targetDate = new Date(date);

    const difference = targetDate - today;

    const days = Math.ceil(
      difference / (1000 * 60 * 60 * 24)
    );

    if (days > 0) {
      return `D-${days}`;
    } else if (days === 0) {
      return "D-Day";
    } else {
      return `D+${Math.abs(days)}`;
    }
  };

  return (
    <div className="container">
      <h1>D-Day 계산기</h1>

      <p>날짜를 선택하세요.</p>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <div className="result">
        {calculateDDay()}
      </div>
    </div>
  );
}

export default App;