import React from 'react';
import '../css/App.css';

const NoDates = () => {
  return (
    <div className='row'>
      <h3 className='text-danger text-center mt-5'>There is no dates today</h3>
      <div className='col-xxl-4 col-md-5 col-sm-8  mx-auto mt-4 time-img '>
          <img  src='images/26.jpg'/>
      </div>
    </div>
  )
}

export default NoDates;
