import React from 'react';
import NoDates from './NoDates';
import '../css/App.css';

const DatesList = ({dataList}) => {
  return (
    <div className='row p-2'>
        <div className='content p-3'>
           {dataList.length?(
            dataList.map(item=>{
                return(
                  <div className='content-item border-bottom d-flex mb-3' key={item.id}>
                      <div className='content-img '>
                          <img src={item.image}/>
                      </div>
                      <div className='content-details  mx-3 mt-1'>
                          <h6 className='d-inline'>{item.name}</h6>
                          <p>{item.date}</p>
                      </div>
                  </div>
                )
             })
           ):<NoDates/>}
        </div>
    </div>
  )
}

export default DatesList
