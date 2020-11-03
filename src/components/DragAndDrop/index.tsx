import React from 'react';
import { DraggableItem } from './DraggableItem';
import { DroppableItem } from './DroppableItem';

import './style.css';

interface IProps {}

const DnD = (props: IProps) => {
  return (
    <div className='drag-container'>
      <div className='side-col'>
        <DroppableItem />
      </div>
      <div className='side-col'>
        <DraggableItem isOverlaped={false} />
      </div>
    </div>
  );
};

export default DnD;
