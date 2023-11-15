import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';


const Events = ({ events, itemsPerPage, totalItems, paginate }) => {
  const [current, setCurrent] = useState(0);
  const length = events.length;

  useEffect(() => {
    const timer = setTimeout(() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }, 8000);
    return () => clearTimeout(timer);

  }, [current, length]);

  if (!Array.isArray(events) || events.length <= 0) {
    return null;
  }


  return (
    <>
      <TItle>진행중인 이벤트 바로가기</TItle>
      <SliderContainer>
        {events.map((event, index) => (
          <Slide key={index} $isActive={index === current}>
            {index === current && (
                <StyledLink to={event.Link} target="_blank" rel="noopener noreferrer">
                  <Thumbnail src={event.Thumbnail} alt={event.Title}/>              
                  <EventTitle>
                    {event.Title}
                  </EventTitle>
                </StyledLink>
            )}
          </Slide>
        ))}

        <ButtonContainer>
            <PrevButton onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}>
                <BiSolidLeftArrow />
                
            </PrevButton>
            <NextButton onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}>
                <BiSolidRightArrow />
            </NextButton>
        </ButtonContainer>
      </SliderContainer>
    </>
  );
};

export default Events;


const TItle = styled.h4`
  justify-content: center;
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0077cc;
  font-weight: 500;


  &:hover {
    text-decoration: underline;
  }
`;

const Thumbnail = styled.img`
  max-width: 100%;
  max-height: 300px;
  width: auto;
  height: auto;
  display: block;
  margin-bottom: 0.25rem;
`;

const SliderContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  border-radius: 8px;
`;

const Slide = styled.div`
  display: ${props => props.$isActive ? 'block' : 'none'};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const EventTitle = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #000000;
  width: 100%;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  bottom: 10px;
  display: flex;
  align-items: center;
`;



const PrevButton = styled.button`
  position: absolute;
  top: 95%;
  left: 0;
  transform: translateY(-50%);
  z-index: 10;
  background: none;
  border: none;
  color: black;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #3948f0;
  }
`;

const NextButton = styled.button`
  position: absolute;
  top: 95%;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  background: none;
  border: none;
  color: black;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #3948f0;
  }
`;

