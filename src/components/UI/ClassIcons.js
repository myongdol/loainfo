import React from 'react';

function ClassIcon({ className }) {
  const iconPath = `/Class_Icons/${className}.svg`;

  return <img src={iconPath} alt={className} style={{ width: '30px', height: '30px' }} />;
}

export default ClassIcon;