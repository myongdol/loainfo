import { useParams } from "react-router-dom";
import OwnedCharacters from "./character/OwnedCharacters";
import useApi from "../util/useApi";
import CharacterDetails from "./character/CharacterDetails";


function CharacterPage() {
    const { characterName } = useParams();
    const encodedCharacterName = encodeURIComponent(characterName);
    const { data: siblings, isLoading, error } = useApi(`/characters/${encodedCharacterName}/siblings`);

    const { data: profile } = useApi(`/armories/characters/${encodedCharacterName}/profiles`);
    const { data: equipment } = useApi(`/armories/characters/${encodedCharacterName}/equipment`);
    const { data: avatars } = useApi(`/armories/characters/${encodedCharacterName}/avatars`);
    const { data: combatSkills } = useApi(`/armories/characters/${encodedCharacterName}/combat-skills`);
    const { data: engravings } = useApi(`/armories/characters/${encodedCharacterName}/engravings`);
    const { data: cards } = useApi(`/armories/characters/${encodedCharacterName}/cards`);
    const { data: gems } = useApi(`/armories/characters/${encodedCharacterName}/gems`);
    const { data: colosseums } = useApi(`/armories/characters/${encodedCharacterName}/colosseums`);
    const { data: collectibles } = useApi(`/armories/characters/${encodedCharacterName}/collectibles`);
  
    console.log('프로필:', profile);
    console.log('장비:', equipment);
    console.log('아바타:', avatars);
    console.log('전투 스킬:', combatSkills);
    console.log('각인:', engravings);
    console.log('카드:', cards);
    console.log('보석:', gems);
    console.log('콜로세움:', colosseums);
    console.log('수집품:', collectibles);

    return (
        <>
            <OwnedCharacters />
            <CharacterDetails />
        </>
    )
};

export default CharacterPage;