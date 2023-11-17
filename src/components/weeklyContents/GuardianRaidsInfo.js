import React, { useState } from "react";
import styled from "styled-components";
import useApi from "../../util/useApi";
import GuardianRewardModal from "./GuardianRewardModal";


const GuardianRaidsInfo = () => {
    const { data: guardianRaidsData, isLoading, error} = useApi('/gamecontents/challenge-guardian-raids');
    const raids = guardianRaidsData?.Raids || [];
    const [modalOpen, setModalOpen] = useState(false);

    if (isLoading) return <div>로딩 중...</div>;
    if (error) return <div>에러 발생: {error.message}</div>;


    console.log('가디언 정보:', guardianRaidsData);

    return (
        <Section>
          <h2>도전 가디언 레이드</h2>
          <List>
            {raids.map((raid, index) => (
              <ListItem key={index}>
                <h3>{raid.Name}</h3>
                <GuardianImg src={raid.Image} />
              </ListItem>
            ))}
          </List>
        
      <StyledButton onClick={() => setModalOpen(true)}>
        레벨별 보상 아이템 보기
      </StyledButton>

      {modalOpen && (
        <GuardianRewardModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          guardianRaidsData={guardianRaidsData}
        />
      )}
        </Section>
    )
};
export default GuardianRaidsInfo;

const Section = styled.section`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.dark};
  margin: auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  padding: 10px 0;
  color: ${(props) => props.theme.colors.text};
  flex: 1;
  overflow: hidden;

  &:last-child {
    border-bottom: none;
  }
`;

const GuardianImg = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.softBlueGrey};
  border-radius: 0.6em;
  color: ${props => props.theme.colors.softBlueGrey}; 
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  margin: 10px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;

  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 40px 40px ${props => props.theme.colors.highlight} inset;
  }

  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
`;