import { useParams } from 'react-router-dom';
import useApi from "../../util/useApi.js";
import styled from 'styled-components';


function OwnedCharacters() {
  const { characterName } = useParams();
  const encodedCharacterName = encodeURIComponent(characterName);
  const { data: siblings, isLoading, error } = useApi(`/characters/${encodedCharacterName}/siblings`);


  if(isLoading) return <div>로딩중 입니다.</div>;
  if(error) return <div>오류 {error.message}</div>
  if(!siblings) return <div>캐릭터 정보가 없습니다. 닉네임을 확인 해주세요.</div>
    
    return (
      <Container>
      <List>
        {siblings.map((sibling, index) => (
          <ListItem key={index}>
            <CharacterName>{sibling.CharacterName}</CharacterName> - 
            <CharacterInfo> 레벨: {sibling.CharacterLevel}</CharacterInfo> - 
            <CharacterInfo> 아이템 레벨: {sibling.ItemMaxLevel}</CharacterInfo> - 
            <CharacterInfo> 서버: {sibling.ServerName}</CharacterInfo> - 
            <CharacterInfo> 클래스: {sibling.CharacterClassName}</CharacterInfo>
          </ListItem>
        ))}
      </List>
    </Container>
    );
  }
  
  export default OwnedCharacters;



  const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  &:last-child {
    margin-bottom: 0;
  }
`;

const CharacterName = styled.span`
  font-weight: bold;
  color: #333;
`;

const CharacterInfo = styled.span`
  font-weight: normal;
  color: #666;
`;