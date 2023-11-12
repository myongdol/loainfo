import { useParams } from 'react-router-dom';
import useApi from "../../util/useApi.js";


function CharacterDetails() {
  const { characterName } = useParams();
  const encodedCharacterName = encodeURIComponent(characterName);
  const { data: siblings, isLoading, error } = useApi(`/characters/${encodedCharacterName}/siblings`);
  if(isLoading) return <div>로딩중 입니다.</div>;
  if(error) return <div>오류 {error.message}</div>
  if(!siblings) return <div>캐릭터 정보가 없습니다. 닉네임을 확인 해주세요.</div>
    
    return (
      <ul>
      {siblings.map((sibling, index) => (
        <li key={index}>
          {sibling.CharacterName} - {sibling.CharacterLevel} - {sibling.ItemMaxLevel} - {sibling.ServerName} - {sibling.CharacterClassName}
        </li>
      ))}
    </ul>
    );
  }
  
  export default CharacterDetails;