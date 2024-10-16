import React from 'react';

import './Panel.css';

const Panel = ({ active, image, title, setActive }) => {
  return (
    <div
      className={`panel${active ? ' active' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={setActive}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default Panel;
