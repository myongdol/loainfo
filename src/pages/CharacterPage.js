import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../util/useApi";
import CharacterDetails from "../components/characterPageContents/CharacterDetails";
import CharacterTabs from "../components/characterPageContents/ChracterPageTabs";
import styled from "styled-components";



function CharacterPage() {
    const { characterName } = useParams();
    const encodedCharacterName = encodeURIComponent(characterName);

    const { data: siblings, isLoading: isLoadingSiblings, error: errorSiblings } = useApi(`/characters/${encodedCharacterName}/siblings`);
    const { data: profile, isLoading: isLoadingProfile, error: errorProfile } = useApi(`/armories/characters/${encodedCharacterName}/profiles`);
    const { data: equipment } = useApi(`/armories/characters/${encodedCharacterName}/equipment`);
    const { data: avatars } = useApi(`/armories/characters/${encodedCharacterName}/avatars`);
    const { data: combatSkills } = useApi(`/armories/characters/${encodedCharacterName}/combat-skills`);
    const { data: engravings } = useApi(`/armories/characters/${encodedCharacterName}/engravings`);
    const { data: cards } = useApi(`/armories/characters/${encodedCharacterName}/cards`);
    const { data: gems } = useApi(`/armories/characters/${encodedCharacterName}/gems`);
    const { data: colosseums } = useApi(`/armories/characters/${encodedCharacterName}/colosseums`);
    const { data: collectibles } = useApi(`/armories/characters/${encodedCharacterName}/collectibles`);
  
  
    useEffect(() => {
      console.log('프로필:', profile);
      console.log('장비:', equipment);
      console.log('아바타:', avatars);
      console.log('전투 스킬:', combatSkills);
      console.log('각인:', engravings);
      console.log('카드:', cards);
      console.log('보석:', gems);
      console.log('콜로세움:', colosseums);
      console.log('수집품:', collectibles);
    }, [profile, equipment, avatars, combatSkills, engravings, cards, gems, colosseums, collectibles]);
    

    if (isLoadingProfile || isLoadingSiblings) return <div>로딩중입니다...</div>;
    if (errorProfile || errorSiblings) return <div>오류: {errorProfile?.message || errorSiblings?.message}</div>;
    if (!profile || !siblings) return <div>캐릭터 정보가 없습니다. 닉네임을 확인 해주세요.</div>;
    
    return (
      <StyledCharacterPage>
        <CharacterDetailsContainer>
            <CharacterDetails profile={profile} />
        </CharacterDetailsContainer>

        <CharacterTabsContainer>
            <CharacterTabs 
              equipment={equipment}
              siblings={siblings} 
              gems={gems} 
              avatars={avatars}
            />
        </CharacterTabsContainer>
      </StyledCharacterPage>
    )
};

export default CharacterPage;



const StyledCharacterPage = styled.div`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  align-items: stretch;
  min-height: 100vh;
  background-size: cover;
  background-repeat: repeat;
  height: 1500px;
`;

const CharacterDetailsContainer = styled.div`
  width: 400px;
  overflow: auto;
  margin-right: 10px;

  ::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none; 
  scrollbar-width: none; 
`;

const CharacterTabsContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding-right: 15px;
`;