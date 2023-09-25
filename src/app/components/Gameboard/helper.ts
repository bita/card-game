import { TIMER_STATUS } from "./fixtures";

export function userFriendlyTime(seconds: number) {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
  
    const finalTime = `${min} : ${sec}`;
    return finalTime;
  }
  
  export function getTimeIsUp(countDown: number, status: string) {
    if (status === TIMER_STATUS.STARTED) {
      return countDown === 0;
    } else {
      return false;
    }
  }
  
  export function getTimeForLevel(level: number) {
    let time;
    return level === 2 ? (time = 10) : level === 6 ? (time = 120) : (time = 60);
  }
  
  export function progressBarWidth (targetTime: number, countDown: number) {
    return Math.round(((targetTime - countDown) / targetTime) * 100);
  }