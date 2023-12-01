import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import OwnedCharacters from "./character/OwnedCharacters";
import useApi from "../util/useApi";
import CharacterDetails from "./character/CharacterDetails";



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
        <>
            <CharacterDetails profile={profile} />
            <OwnedCharacters siblings={siblings} />
        </>
    )
};

export default CharacterPage;