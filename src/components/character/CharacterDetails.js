import styled from 'styled-components';
import CharacterStats from './Details/ChracterStats';
import CharacterTendencies from './Details/ChracterTendencies';


const keyToKorean = {
  CharacterName: '캐릭터 이름',
  ServerName: '서버 이름',
  CharacterClassName: '클래스',
  CharacterLevel: '레벨',
  ItemAvgLevel: '평균 아이템 레벨',
  ItemMaxLevel: '최고 아이템 레벨',
  GuildName: '길드',
  GuildMemberGrade: '길드 등급',
  Title: '칭호',
  PvpGradeName: 'PVP 등급',
  ExpeditionLevel: '원정대 레벨',
  TownLevel: '영지 레벨',
  TownName: '영지 이름',
  UsingSkillPoint: '사용 스킬포인트',
  TotalSkillPoint: '전체 스킬포인트'
};

function CharacterDetails({ profile }) {

    if (!profile) {
        return <div>캐릭터 정보가 없습니다.</div>;
      }

  return (
    <CharacterContainer backgroundImage={profile.CharacterImage}>
      <CharacterInfo>
        <h2>{profile.CharacterName}</h2>
        <h2>{profile.CharacterName} ({profile.ServerName})</h2>
        {Object.entries(profile).map(([key, value]) => (
          key !== 'CharacterImage' && key !== 'Stats' && key !== 'Tendencies' &&
          <InfoItem key={key}>
            <InfoLabel>{keyToKorean[key] || key}</InfoLabel>
            <InfoValue>{value}</InfoValue>
          </InfoItem>
        ))}
      </CharacterInfo>

      <CharacterContent>
        <CharacterStats stats={profile.Stats} />
        <CharacterTendencies tendencies={profile.Tendencies} />
      </CharacterContent>
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
  width: 100%;
  position: relative;
  color: white;
  overflow: hidden;
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

const CharacterContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: flex-start;
  justify-content: flex-end;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 5px 0;
`;

const InfoLabel = styled.div`
  background-color: ${(props) => props.theme.colors.container};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 10px;
  transition: background-color 0.3s;
`;

const InfoValue = styled.span`
  flex-grow: 1;
  text-align: right;
`;