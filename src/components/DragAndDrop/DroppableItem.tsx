import React from 'react';
import classnames from 'classnames';

interface IProps {
  className?: string;
  children?: any
};

export const DroppableItem = ({className, children, ...props}: IProps) => {
  const computedClassName = classnames(
    'square-shape', 
    {classnames: !!className},
  );
  return (
    <div 
      {...props}
      className={computedClassName} 
    >
      {children}
    </div>
  );
}
