import React from 'react';

function getCoords(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };
}

function Card(props) {
  const { theta, radius, center, isOuter } = props;
  const { x, y } = getCoords(theta, radius);

  const cardStyle = {
    ...styles.Card,
    left: center ? `${center.x + x}px` : '',
    top: center ? `${center.y - y}px` : '',
    zIndex: isOuter ? '1' : '2', // Adjust the z-index to bring the outer circle forward,
  };

  return (
    <div style={cardStyle}>
      {isOuter ? (
        <>
          {/* <div className="image-container">
            <img src={require('./image/SUMAGO.PNG')} alt="Inner" className="inner-image" />
          </div> */}
        </>
      ) : null}
    </div>
  );
}

const styles = {
  Card: {
    position: 'absolute',
    top: '2500%',
    left: '350%',
    transform: 'translate(-50%,900vh)',
    height: '100px',
    width: '100px',
    backgroundColor: 'transparent',
    borderRadius: '50px',
    border: '2px solid  rgb(244, 241, 241)',
  },
};

export default React.memo(Card);
