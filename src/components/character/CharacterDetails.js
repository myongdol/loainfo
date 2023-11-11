import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const APIKEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://developer-lostark.game.onstove.com/',
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${APIKEY}`
  }
});



function CharacterDetails() {
  const { characterName } = useParams();
  const [siblings, setSiblings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(true);

      if (characterName) {
        api.get(`/characters/${encodeURIComponent(characterName)}/siblings`)
          .then(response => {
            // API가 배열을 반환하지 않는 경우를 대비하여 체크
            setSiblings(Array.isArray(response.data) ? response.data : []);
            console.log(response.data)
            setIsLoading(false);
          })
          .catch(error => {
            console.error('원정대 정보를 불러올 수 없습니다.', error);
            alert('존재하지 않는 캐릭터명 입니다.')
            setIsLoading(false);
            setSiblings(null); // 오류 발생 시 상태를 빈 배열로 재설정
          });
      } else {
        setIsLoading(false);
      }
    }, [characterName]);

    if (isLoading) {
      return <div>로딩 중...</div>;
    }

    
    return (
      <div>
         {siblings.length > 0 ? (
        <ul>
          {siblings.map((sibling, index) => (
            <li key={index}>
              {sibling.CharacterName} - {sibling.CharacterLevel} -
              {sibling.ItemMaxLevel} - {sibling.ServerName} -
              {sibling.CharacterClassName}
            </li>
          ))}
        </ul>
        ) : (
          <div>캐릭터 정보가 없습니다.</div>
        )}
      </div>
    );
  }
  
  export default CharacterDetails;