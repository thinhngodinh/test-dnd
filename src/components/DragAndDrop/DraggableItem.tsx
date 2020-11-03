import React, {useState} from 'react';
import classnames from 'classnames';

interface IProps {
  isOverlaped: boolean
  className?: string;
  draggable?: true;
  onDragStart?(e: React.DragEvent<HTMLElement>):void,
  children?: any
};

export const DraggableItem = ({isOverlaped, className, draggable, children, onDragStart, ...props}: IProps) => {
  const computedClassName = classnames(
    'circle-shape', 
    classnames,
    { 
      'circle-overlap': isOverlaped,
    }
  );

  const handleDragStart = (e: React.DragEvent<HTMLElement>) => {
    const el = (e.target as HTMLElement);
    requestAnimationFrame(() => {
      el.classList.add('hidden'); 
    });
    
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", el.outerHTML);
    if (onDragStart) {
      onDragStart(e)
    }
  }

  const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
    const el = (e.target as HTMLElement);
    el.classList.remove('hidden');
  }

  return (
    <div
      {...props} 
      className={computedClassName} 
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    > 
      {children}
    </div>
  );
}

