import React from "react";
import styled from "styled-components";



const Rowen = ({ events }) => {
  return (
    <Section>
      <h2>로웬 이벤트</h2>
      
      {events.map((event, index) => (
        <div key={index}>
          <h3>{event.ContentsName}</h3>
          <p>위치: {event.Location}</p>
          <ContentsIcon src={event.ContentsIcon}/>
          <p>최소 아이템 레벨: {event.MinItemLevel}</p>
          <p>보상 아이템:</p>
          <ul>
            {event.RewardItems.map((item, itemIndex) => (
              <li key={itemIndex}>
                <RewardIcon src={item.Icon}/>{item.Name} (등급: {item.Grade})
              </li>
            ))}
          </ul>
          <p>시작 시간:</p>
          <ul>
            {event.StartTimes.map((startTime, timeIndex) => (
              <li key={timeIndex}>{startTime}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default Rowen;



const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
  flex-direction: row;
`;

const ContentsIcon = styled.img`
 width: 120px;
 height: 120px;
`

const RewardIcon = styled.img`
 width: 20px;
 height: 20px;
`