import React from "react";
import styled from "styled-components";



const AdventureIsland = ({ events }) => {

  const today = new Date().toISOString().split('T')[0];

  return (
    <Section>
      <h2>모험 섬</h2>
      
      {events.map((event, index) => {
        const todayEvents = event.StartTimes.filter(time => time.includes(today));

        if (todayEvents.length > 0) {
          return (
            <div key={index}>
              <h3>{event.ContentsName}</h3>
              <img src={event.ContentsIcon} alt={event.ContentsName} />
              <ul>
                {todayEvents.map((time, timeIndex) => (
                  <li key={timeIndex}>{time}</li>
                ))}
              </ul>
            </div>
          );
        }
        return null;
      })}
    </Section>
  );
};

export default AdventureIsland;



const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
`;
