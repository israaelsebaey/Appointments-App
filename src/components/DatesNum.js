import React from 'react';

const DatesNum = ({dataLength}) => {
  return (
    <div className='row p-2'>
        <h5>You have {dataLength.length} dates today</h5>
    </div>
  )
}

export default DatesNum;
