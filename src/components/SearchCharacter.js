import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SearchCharacter() {
  const [characterName, setCharacterName] = useState('');
  let navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/character/${characterName}`)
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
  </div>
  );
}

export default SearchCharacter;