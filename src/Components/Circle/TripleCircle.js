import React from 'react';
import photo from './image/SUMAGO.PNG';
import './styles.css';

const TripleCircle = () => {
  const smallCircles = [];
  for (let i = 0; i < 6; i++) {
    smallCircles.push(
      <div key={i} className="small-circle"></div>
    );
  }

  return (
    <div className="circle-container">
      <div className="outer-circle">
        <div className="middle-circle">
          {smallCircles}
          <div className="inner-circle">
            <img src={photo} alt="" width="165rem" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleCircle;
