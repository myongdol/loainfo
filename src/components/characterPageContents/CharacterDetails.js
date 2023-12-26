import styled from 'styled-components';
import CharacterStats from './Details/ChracterStats';
import CharacterTendencies from './Details/ChracterTendencies';


const keyToKorean = {
  CharacterName: '캐릭터 이름',
  ServerName: '서버',
  CharacterClassName: '클래스',
  CharacterLevel: '전투레벨',
  ItemAvgLevel: '평균 아이템 레벨',
  ItemMaxLevel: '아이템 레벨',
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


const displayProfile = [
  'Title',
  'GuildName',
  'ItemMaxLevel',
  'CharacterLevel',
  'ExpeditionLevel',
  'TownName'
];


function CharacterDetails({ profile }) {

    if (!profile) {
        return <div>캐릭터 정보가 없습니다.</div>;
      }

  return (
    <CharacterContainer backgroundImage={profile.CharacterImage}>
      <TitleContainer>
        <Title>
          <ServerName>{profile.ServerName}</ServerName>
          <ClassName>{profile.CharacterClassName}</ClassName>
        </Title>
        <CharacterName>{profile.CharacterName}</CharacterName>
      </TitleContainer>
      
      <CharacterInfo>
        {displayProfile.map(key => {
                    if (profile[key] && typeof profile[key] !== 'object') {
                        return (
                            <InfoItem key={key}>
                                <InfoLabel>{keyToKorean[key] || key}</InfoLabel>
                                <InfoValue>{profile[key]}</InfoValue>
                            </InfoItem>
                        );
                    }
                    return null;
                })}
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
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgb(21, 24, 29);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top center;
  background-image: url(${props => props.backgroundImage});
  min-height: 920px;
  width: 100%;
  position: relative;
  color: white;
  overflow: hidden;
  padding-top: 150px;
`;


const CharacterInfo = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 20px;
  align-items: flex-start;
  margin-top: 80px;
  position: absolute;
  top: 350px;
  left: 0;
  right: 0;
`;

const CharacterContent = styled.div`
  order: 3;
  display: flex;
  width: 100%;
  padding: 5px 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  top: 700px;
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

const TitleContainer = styled.div`
  position: absolute;
  top: 10px;
  text-align: left;
  flex-direction: column;
  left: 0;
`;

const Title = styled.div`
  font-weight: bold;
  color: white;
  font-size: 1em;
  align-items: center;
  margin-bottom: 15px;
`;

const ServerName = styled.span`
  margin-right: 10px;
  background-color: ${(props) => props.theme.colors.highlight};
  padding: 8px 12px;
  border-radius: 4px;
`;

const CharacterName = styled.span`
  font-size: 1.5em;
  font-weight: bolder;
  margin-bottom: 8px;
  padding-left: 10px;
`;

const ClassName = styled.span`
  background-color: ${(props) => props.theme.colors.highlight};
  padding: 8px 12px;
  margin-right: 10px;
  border-radius: 4px;
`;