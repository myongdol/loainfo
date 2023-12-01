import styled from 'styled-components';
import useApi from '../../util/useApi';
import { useParams } from 'react-router-dom';

function CharacterDetails({ character }) {
  const { characterName } = useParams();
  const encodedCharacterName = encodeURIComponent(characterName);
  const { data: characterDetails, isLoading, error } = useApi(`/armories/characters/${encodedCharacterName}`);

  if (isLoading) return <div>로딩중 입니다.</div>;
  if (error) return <div>오류: {error.message}</div>;
  if (!characterDetails) return <div>캐릭터 정보가 없습니다. 닉네임을 확인 해주세요.</div>;

  return (
    <CharacterContainer>
      <CharacterImage src={characterDetails.CharacterImage} alt={characterDetails.CharacterName} />
      <CharacterInfo>
        <h2>{characterDetails.CharacterName} ({characterDetails.ServerName})</h2>
        <p>클래스: {characterDetails.CharacterClassName}</p>
        <p>레벨: {characterDetails.CharacterLevel}</p>
        <p>평균 아이템 레벨: {characterDetails.ItemAvgLevel}</p>
        <p>최고 아이템 레벨: {characterDetails.ItemMaxLevel}</p>
        <p>길드: {characterDetails.GuildName} ({characterDetails.GuildMemberGrade})</p>
        <p>타이틀: {characterDetails.Title}</p>
        <p>PVP 등급: {characterDetails.PvpGradeName}</p>
        <p>탐험 레벨: {characterDetails.ExpeditionLevel}</p>
        <p>항해 레벨: {characterDetails.TownLevel}</p>
      </CharacterInfo>
    </CharacterContainer>
  );
}

export default CharacterDetails;

const CharacterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-right: 20px;
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;