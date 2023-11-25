import { useEffect, useState } from "react";

const useRemainingTimer = (events) => {
    const [remainingTimer, setRemainingTimer] = useState([]);
    
    const convertToKST = (utcTimeString) => {
      const utcTime = new Date(utcTimeString);
      const kstOffset = 9 * 60 * 60000;
      return new Date(utcTime.getTime() + kstOffset);
  };
//   const testUtcTime = "2023-11-25T09:00:00";
// const convertedTime = convertToKST(testUtcTime);
// console.log(`변환된 시간: ${convertedTime}`); 

    useEffect(() => {
        const calculateRemainingTime = () => {
            return events.map(event => {
              const now = new Date();
              const futureTimes = event.StartTimes.map(time => convertToKST(time))
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

          return { eventId: event.id, time: `${hours}시간 ${minutes}분 ${seconds}초 남음` };
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