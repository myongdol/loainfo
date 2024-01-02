import { useEffect } from 'react';
import styled from 'styled-components';
import ClassIcon from '../../UI/ClassIcons';
import { useNavigate } from 'react-router-dom';



function OwnedCharactersTab({ siblings }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(siblings);
  }, [siblings]);

  const groupByServer = (characters) => {
    return characters.reduce((groups, character) => {
      const { ServerName } = character;
      groups[ServerName] = groups[ServerName] || [];
      groups[ServerName].push(character);
      return groups;
    }, {});
  };

  const charactersByServer = groupByServer(siblings);

  Object.values(charactersByServer).forEach(characters => {
    characters.sort((a, b) => {
      const itemLevelA = parseInt(a.ItemMaxLevel.replace(/,/g, ''), 10);
      const itemLevelB = parseInt(b.ItemMaxLevel.replace(/,/g, ''), 10);
      return itemLevelB - itemLevelA;
    });
  });

  const handleCharacterClick = (CharacterName) => {
    navigate(`/character/${CharacterName}`);
  };


  return (
    <Container>
      {Object.entries(charactersByServer).map(([serverName, characters]) => (
        <ServerSection key={serverName}>
          <ServerName>{serverName}</ServerName>
          <List>
            {characters.map((character, index) => (
              <ListItem key={index} onClick={() => handleCharacterClick(character.CharacterName)}>
                <CharacterName>
                  <Level>Lv{character.CharacterLevel}</Level> {character.CharacterName}
                </CharacterName>
                <ContentWrapper>
                  <ClassIconWrapper>
                    <ClassIcon className={character.CharacterClassName} />
                  </ClassIconWrapper>
                  <InfoContainer>
                    <CharacterInfo>아이템 레벨: {character.ItemMaxLevel}</CharacterInfo>
                    <CharacterInfo>{character.CharacterClassName}</CharacterInfo>
                  </InfoContainer>
                </ContentWrapper>
              </ListItem>
            ))}
          </List>
        </ServerSection>
      ))}
    </Container>
  );
}
  
export default OwnedCharactersTab;



const Container = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  margin: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  min-width: 800px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ClassIconWrapper = styled.div`
  margin-right: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  width: 300px;
  min-height: 120px;
  padding: 10px;
  background-color: ${props => props.theme.colors.dark};
  border-radius: 4px;
  margin-right: 20px;
  margin-bottom: 10px;
  border: 1px solid ${props => props.theme.colors.softBlueGrey};
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px 5px ${props => props.theme.colors.highlight} inset;
    border-color: ${props => props.theme.colors.highlight};
  }

  @media (max-width: 600px) {
    width: calc(50% - 10px);
    margin-right: 10px;
    margin-bottom: 10px;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    margin-right: 0;
  }
`;

const InfoContainer = styled.div`
  border: 1px solid ${props => props.theme.colors.softBlueGrey};
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const CharacterName = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.highlight};
  margin-right: 10px;
`;

const CharacterInfo = styled.span`
  font-weight: normal;
  color: ${props => props.theme.colors.text};
  margin-left: 5px;
`;

const ServerSection = styled.section`
  background-color: ${props => props.theme.colors.container};
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ServerName = styled.h3`
  font-size: 1.2em;
  color: ${props => props.theme.colors.highlight};
  margin-bottom: 10px;
`;

const Level = styled.span`
  color: ${props => props.theme.colors.orange};
  font-weight: bold;
`;