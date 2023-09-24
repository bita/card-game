import { useEffect, useState } from "react";

const useCoundown = (targetTime: number) => {
  const [countDown, setCountDown] = useState(targetTime);
  const [timerStatus, setTimerStatus] = useState("reset");

  const startTimer = () => {
    setTimerStatus("started");
    setCountDown(targetTime);
  };

  const resetTimer = () => {
    setTimerStatus("reset");
    setCountDown(targetTime);
  };

  useEffect(() => {
    resetTimer();
  }, [targetTime]);

  useEffect(() => {
    if (timerStatus === "started" && countDown > 0) {
      const interval = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countDown, timerStatus]);

  return { countDown, startTimer, resetTimer, timerStatus };
};

export default useCoundown;
