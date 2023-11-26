import { useEffect, useState } from "react";

const useRemainingTimer = (events) => {
    const [remainingTimer, setRemainingTimer] = useState([]);
    
    const convertToKST = (utcTimeString) => {
      const utcTime = new Date(utcTimeString);
      const kstOffset = 9 * 60 * 60000;
      return new Date(utcTime.getTime() + kstOffset);
  };

    useEffect(() => {
        const calculateRemainingTime = () => {
          const todayString = new Date().toDateString();
            return events.map(event => {
              const now = new Date();
              const futureTimes = event.StartTimes.map(time => convertToKST(time))
              .filter(time => time > now);

            if (futureTimes.length === 0 || !event.StartTimes.some(startTime => new Date(convertToKST(startTime)).toDateString() === todayString)) {
              return { eventId: event.id, time: '출현하지 않는 날입니다.' };
            }    
            
          const nextTime = futureTimes.sort((a, b) => a - b)[0];
          const delta = nextTime - now;
    
          const seconds = Math.floor((delta / 1000) % 60);
          const minutes = Math.floor((delta / 1000 / 60) % 60);
          const hours = Math.floor(delta / (1000 * 60 * 60));

          return {
            eventId: event.id,
            time: `${hours}시간 ${minutes}분 ${seconds}초 남음`
          };
          });
        } 
        setRemainingTimer(calculateRemainingTime());
        const timer = setInterval(() => {
            setRemainingTimer(calculateRemainingTime());
        }, 1000);
      
        return () => clearInterval(timer);
      }, [events]);
      
    return remainingTimer;
};

export default useRemainingTimer;