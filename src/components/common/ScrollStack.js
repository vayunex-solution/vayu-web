import React, { useEffect, useRef } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, className = '', index = 0, offset = 50 }) => {
  const itemStyle = {
    position: 'sticky',
    top: `${80 + (index * offset)}px`,
    zIndex: 10 + index,
  };

  return (
    <div 
      className={`scroll-stack-item ${className}`}
      style={itemStyle}
    >
      <div className="scroll-stack-content">
        {children}
      </div>
    </div>
  );
};

const ScrollStack = ({ children, className = '', stackOffset = 50 }) => {
  // Map through children to inject stack properties
  const stackItems = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        index,
        offset: stackOffset
      });
    }
    return child;
  });

  return (
    <div className={`scroll-stack-container ${className}`}>
      {stackItems}
    </div>
  );
};

export default ScrollStack;
