import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div>
      <p>[ {timeLeft} ] ثانیه تا دریافت کد مجدد</p>
    </div>
  );
};

export default Timer;
