import React from 'react';
import photo from './image/SUMAGO.PNG';
import './styles.css';

const TripleCircle = () => {
  return (
    <div className="circle-container">
      <div className="outer-circle">
       <div className="middle-circle">
          <div className="inner-circle">
          <img src={photo}
          alt=""
          width="165rem"
          className="img-fluid"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TripleCircle;
