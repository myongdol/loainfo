import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineSearch } from 'react-icons/md';
 

function SearchCharacter() {
  const [characterName, setCharacterName] = useState('');
  let navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/character/${characterName}`)
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer>
    <SearchInput
      type="text"
      value={characterName}
      onChange={(e) => setCharacterName(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="캐릭터명을 입력하세요"
      enterKeyHint="search"
      autoCorrect="off"
      autoComplete="off"
      spellCheck="false"
    />
    <StyledSearchIcon size="20px" onClick={handleSearch}/>
  </SearchBarContainer>
  );
}

export default SearchCharacter;


const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 2.5rem; 
  padding: 0 0.75rem; 
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background-color: #E5E7EB; 
  border: 1px solid #E5E7EB; 
  max-width: 60%;
  width: 450px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 0.5rem;
  padding-right: 2rem; 
  font-size: 1rem;
  background-color: #E5E7EB;
  
  &:focus {
    outline: none;
  }
`;

const StyledSearchIcon = styled(MdOutlineSearch)`
  position: absolute;
  right: 10px; 
  top: 50%;
  transform: translateY(-50%); 
  color: #000000;
  cursor: pointer;
`;