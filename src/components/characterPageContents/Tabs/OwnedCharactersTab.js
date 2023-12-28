import { useEffect } from 'react';
import styled from 'styled-components';



function OwnedCharactersTab({ siblings }) {
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


  return (
    <Container>
      {Object.entries(charactersByServer).map(([serverName, characters]) => (
        <ServerSection key={serverName}>
          <ServerName>{serverName}</ServerName>
          <List>
            {characters.map((character, index) => (
              <ListItem key={index}>
                <CharacterName>{character.CharacterName}</CharacterName>
                <InfoContainer>
                  <CharacterInfo>전투레벨: {character.CharacterLevel}</CharacterInfo>
                  <CharacterInfo>아이템 레벨: {character.ItemMaxLevel}</CharacterInfo>
                  <CharacterInfo>{character.CharacterClassName}</CharacterInfo>
                </InfoContainer>
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
  border: 1px solid ${props => props.theme.colors.softBlueGrey};
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
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
  color: ${props => props.theme.colors.dark};
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