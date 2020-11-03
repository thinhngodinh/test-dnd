import React from 'react';
import classnames from 'classnames';

interface IProps {
  className?: string;
  children?: any
}

export const DroppableItem = ({className, children, ...props}: IProps) => {
  const computedClassName = classnames(
    'square-shape', 
    {classnames: !!className},
  );
  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
  }

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    console.log('drop')
  }
  
  return (
    <div 
      {...props}
      className={computedClassName}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
}
