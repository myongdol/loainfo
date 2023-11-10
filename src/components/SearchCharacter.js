import React, { useState } from 'react';
import Content from './Content';

function SearchCharacter() {
  const [characterName, setCharacterName] = useState('');
  const [nextSearch, setNextSearch] = useState('');

  const handleSearch = () => {
    setNextSearch(characterName);
  };

  return (
    <div>
    <input
      type="text"
      value={characterName}
      onChange={(e) => setCharacterName(e.target.value)}
      placeholder="캐릭터명을 입력하세요"
    />
    <button onClick={handleSearch}>검색</button>
    <Content characterName={nextSearch} />
  </div>
  );
}

export default SearchCharacter;