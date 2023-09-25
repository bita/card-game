import { useEffect, useState } from "react";
import { TIMER_STATUS } from "../components/Gameboard/fixtures";

const useCoundown = (targetTime: number) => {
  const [countDown, setCountDown] = useState(targetTime);
  const [timerStatus, setTimerStatus] = useState(TIMER_STATUS.RESET);

  const startTimer = () => {
    setTimerStatus(TIMER_STATUS.STARTED);
    setCountDown(targetTime);
  };

  const resetTimer = () => {
    setTimerStatus(TIMER_STATUS.RESET);
    setCountDown(targetTime);
  };

  useEffect(() => {
    resetTimer();
  }, [targetTime]);

  useEffect(() => {
    if (timerStatus === TIMER_STATUS.STARTED && countDown > 0) {
      const interval = setInterval(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countDown, timerStatus]);

  return { countDown, startTimer, resetTimer, timerStatus };
};

export default useCoundown;
