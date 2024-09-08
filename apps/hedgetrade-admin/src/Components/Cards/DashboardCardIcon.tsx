import React from 'react';

const DashboardCardIcon = (props:any) => {
  const isSmallDevice = window.matchMedia("(max-width: 600px)").matches;

  const iconStyle = isSmallDevice ? {
    padding: '3px',
    border: '1px solid rgb(212, 118, 220)',
    borderRadius: '50%',
  } : {
    padding: '5px',
    border: '2px solid',
    borderRadius: '50%',
    borderColor: props.color,
  };

  return (
    <div className="dashboard-icon">
      <props.icon 
        style={iconStyle}
        height={isSmallDevice ? 24 : 32}
        width={isSmallDevice ? 24 : 32}
        color={props.color}
        
      />
    </div>
  );
};

export default DashboardCardIcon;
