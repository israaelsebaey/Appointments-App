import React from 'react'

const DatesActions = ({displayAll,deleteAll}) => {
  return (
    <div className='row p-2'>
        <div className='footer d-flex justify-content-center'>
            <button className='btn btn-success mx-2' onClick={displayAll}>Display All</button>
            <button className='btn btn-danger mx-2'  onClick={deleteAll}>Delete All</button>
        </div>
    </div>
  )
}

export default DatesActions;
