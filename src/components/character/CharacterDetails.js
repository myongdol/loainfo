import styled from 'styled-components';


function CharacterDetails({ profile }) {

    if (!profile) {
        return <div>캐릭터 정보가 없습니다.</div>;
      }


  return (
    <CharacterContainer backgroundImage={profile.CharacterImage}>
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
  justify-content: center;
  align-items: center;
  background-image: 
    linear-gradient(to right, rgba(192, 135, 135, 0.7), transparent),
    linear-gradient(to left, rgba(0, 0, 0, 0.7), transparent),
    url(${props => props.backgroundImage});
  background-size: contain, cover; 
  background-repeat: no-repeat;
  background-position: center;
  height: 300px; 
  color: white;
  overflow: hidden; 
  position: relative; 
  width: 100%;
`;

const CharacterInfo = styled.div`
  position: absolute; 
  right: 0;
  bottom: 0; 
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;