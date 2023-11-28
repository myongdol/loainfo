import { useEffect, useState } from "react";

const useAdventureTimer = (events) => {
  const [remainingTimer, setRemainingTimer] = useState([]);

  useEffect(() => {
    const calculateRemainingTime = () => {
      const now = new Date();
      const utcOffset = now.getTimezoneOffset() * 60000;
      const localNow = new Date(now.getTime() + utcOffset + (9 * 60 * 60000)); // KST로 변환

      return events.map(event => {
        const futureEvents = event.StartTimes
                                  .map(time => new Date(new Date(time).getTime() + utcOffset + (9 * 60 * 60000)))
                                  .filter(time => time >= localNow);

        if (futureEvents.length > 0) {
          const nextEvent = futureEvents.sort((a, b) => a - b)[0];
          const delta = nextEvent - localNow;

          const seconds = Math.floor((delta / 1000) % 60);
          const minutes = Math.floor((delta / 1000 / 60) % 60);
          const hours = Math.floor(delta / (1000 * 60 * 60));

          return {
            eventId: event.ContentsName, // 이벤트 ID 사용
            time: `${hours}시간 ${minutes}분 ${seconds}초 남음`
          };
        } else {
          return { eventId: event.ContentsName, time: '일정이 종료 되었습니다.' };
        }
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