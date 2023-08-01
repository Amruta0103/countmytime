import { useState, useContext, createContext } from "react";

export const TimerContext = createContext();

export function TimerProvider({children}) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [disp, setDisp] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [timeUp, setTimeUp] = useState(false);

  return(
    <TimerContext.Provider
      value={{seconds,setSeconds,minutes,setMinutes, hours, setHours,disp, setDisp,isPaused, setIsPaused,timeUp, setTimeUp}}
    >
      {children}
    </TimerContext.Provider>
  )
}

export function useTimer() {
  return useContext(TimerContext);
}