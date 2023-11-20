import { useEffect, useState } from "react";

const useRemainingTimer = (events) => {
    const [remainingTimer, setRemainingTimer] = useState("");

    useEffect(() => {
        const calculateRemainingTime = () => {
          const now = new Date();
          const futureTimes = events.flatMap(event => event.StartTimes)
                                    .map(time => new Date(time + 'Z'))
                                    .filter(time => time > now);
        
          if (futureTimes.length === 0) {
            return '출현하지 않는 날입니다.';
          }
        
          const nextTime = futureTimes.sort()[0];
          let delta = Math.abs(nextTime - now) / 1000;
          const hours = Math.floor(delta / 3600) % 24;
          delta -= hours * 3600;
          const minutes = Math.floor(delta / 60) % 60;
          delta -= minutes * 60;
          const seconds = Math.floor(delta % 60);
        
          return `${hours}시간 ${minutes}분 ${seconds}초 남음`;
        };
        
        setRemainingTimer(calculateRemainingTime());
        const timer = setInterval(() => {
            setRemainingTimer(calculateRemainingTime());
        }, 1000);
      
        return () => clearInterval(timer);
      }, [events]);
    
    return remainingTimer;
};

export default useRemainingTimer;