import { useEffect, useState } from "react";

const useRemainingTimer = (events) => {
    const [remainingTimer, setRemainingTimer] = useState([]);

    useEffect(() => {
        const calculateRemainingTime = () => {
            return events.map(event => {
              const now = new Date();
              const futureTimes = event.StartTimes.map(time => new Date(time))
                                                  .filter(time => time > now);
        
          if (futureTimes.length === 0) {
            return { eventId: event.id, time: '출현하지 않는 날입니다.'};
          }
        
          const nextTime = futureTimes.sort()[0];
          let delta = Math.abs(nextTime - now) / 1000;
          const hours = Math.floor(delta / 3600) % 24;
          delta -= hours * 3600;
          const minutes = Math.floor(delta / 60) % 60;
          delta -= minutes * 60;
          const seconds = Math.floor(delta % 60);
          // const koreanHours = (hours + 9) % 24;
          return { eventId: event.id, time: `${hours}시간 ${minutes}분 ${seconds}초 남음` };
          // return `${koreanHours}시간 ${minutes}분 ${seconds}초 남음`;
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