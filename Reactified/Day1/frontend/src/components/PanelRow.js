import React, { useState } from 'react';

import Panel from './Panel';
import './PanelRow.css';

const PanelRow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const titleData = [
    'Explore The World',
    'Wild Forest',
    'Sunny Beach',
    'City On Winter',
    'Mountains - Clouds',
  ];

  const imageData = [
    'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=8',
    'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  ];

  return (
    <div className='container'>
      {titleData.map((element, index) => (
        <Panel
          key={index}
          id={index}
          active={index === activeIndex}
          title={titleData[index]}
          image={imageData[index]}
          setActive={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default PanelRow;
