import styled from 'styled-components';


function CharacterDetails({ profile }) {

    if (!profile) {
        return <div>캐릭터 정보가 없습니다.</div>;
      }

  return (
    <CharacterContainer backgroundImage={profile.CharacterImage}>
      <CharacterInfo>
        <h2>{profile.CharacterName}</h2>
        <h2>{profile.CharacterName} ({profile.ServerName})</h2>
        <div>클래스: {profile.CharacterClassName}</div>
        <div>레벨: {profile.CharacterLevel}</div>
        <div>평균 아이템 레벨: {profile.ItemAvgLevel}</div>
        <div>최고 아이템 레벨: {profile.ItemMaxLevel}</div>
        <div>길드: {profile.GuildName} ({profile.GuildMemberGrade})</div>
        <div>칭호: {profile.Title}</div>
        <div>PVP 등급: {profile.PvpGradeName}</div>
        <div>원정대 레벨: {profile.ExpeditionLevel}</div>
        <div>영지 레벨: {profile.TownLevel}</div>
      </CharacterInfo>

      <CharacterStats>
        <h3>특성</h3>
        {profile.Stats.map((stat) => (
          <div key={stat.Type}>
            <strong>{stat.Type}</strong>: {stat.Value}
          </div>
        ))}
        <h3>성향</h3>
        {profile.Tendencies.map((tendency) => (
          <div key={tendency.Type}>
            <strong>{tendency.Type}</strong>: {tendency.Point}/{tendency.MaxPoint}
          </div>
        ))}
      </CharacterStats>
    </CharacterContainer>
  );
}

export default CharacterDetails;

const CharacterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(21, 24, 29);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-image: url(${props => props.backgroundImage});
  height: 400px; 
  width: 50%;
  position: relative;
  color: white;
  overflow: hidden;
  border: 1px solid red;
`;


const CharacterInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  align-items: flex-start;
`;

const CharacterStats = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
  text-align: right;
`;