import React, { useState } from 'react';
import EquipmentTab from './Tabs/EquipmentTab';
import OwnedCharactersTab from './Tabs/OwnedCharactersTab';

const CharacterTabs = ({ equipment, siblings }) => {
  const [activeTab, setActiveTab] = useState('equipment');

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab('equipment')}>장비</button>
        <button onClick={() => setActiveTab('characters')}>보유 캐릭터</button>
      </div>
      {activeTab === 'equipment' && <EquipmentTab equipments={equipment} />}
      {activeTab === 'characters' && <OwnedCharactersTab siblings={siblings} />}
    </div>
  );
};

export default CharacterTabs;