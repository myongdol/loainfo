import { useEffect, useState } from "react";

const useAdventureTimer = (events) => {
  const [remainingTimer, setRemainingTimer] = useState([]);

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date();
      const todayString = now.toDateString();

      return events.map(event => {
        const futureTimes = event.StartTimes.map(time => new Date(time))
                                            .filter(time => time.toDateString() === todayString && time > now);

        if (futureTimes.length === 0) {
          return { eventId: event.id, time: '출현하지 않는 날입니다.' };
        }

        const nextTime = futureTimes.sort((a, b) => a - b)[0];
        const delta = nextTime - now;

        if (delta < 0) {
          return { eventId: event.id, time: '시작된 이벤트 입니다.' };
        }

        const seconds = Math.floor((delta / 1000) % 60);
        const minutes = Math.floor((delta / 1000 / 60) % 60);
        const hours = Math.floor(delta / (1000 * 60 * 60));

        return {
          eventId: event.id,
          time: `${hours}시간 ${minutes}분 ${seconds}초 남음`
        };
      });
    };

    setRemainingTimer(calculateRemainingTime());
    const timer = setInterval(() => {
      setRemainingTimer(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [events]);

  return remainingTimer;
};

export default useAdventureTimer;
