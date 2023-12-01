import styled from 'styled-components';


function CharacterDetails({ profile }) {

    if (!profile) {
        return <div>캐릭터 정보가 없습니다.</div>;
      }


  return (
    <CharacterContainer>
      <CharacterImage src={profile.CharacterImage} alt={profile.CharacterName} />
      <CharacterInfo>
        <h2>{profile.CharacterName} ({profile.ServerName})</h2>
        <p>클래스: {profile.CharacterClassName}</p>
        <p>레벨: {profile.CharacterLevel}</p>
        <p>평균 아이템 레벨: {profile.ItemAvgLevel}</p>
        <p>최고 아이템 레벨: {profile.ItemMaxLevel}</p>
        <p>길드: {profile.GuildName} ({profile.GuildMemberGrade})</p>
        <p>칭호: {profile.Title}</p>
        <p>PVP 등급: {profile.PvpGradeName}</p>
        <p>원정대 레벨: {profile.ExpeditionLevel}</p>
        <p>영지 레벨: {profile.TownLevel}</p>
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