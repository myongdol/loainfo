import React from 'react';

function ClassIcon({ className }) {
  const iconPath = `/Class_Icons/${className}.svg`;

  return <img src={iconPath} alt={className} style={{ width: '40px', height: '40px' }} />;
}

export default ClassIcon;