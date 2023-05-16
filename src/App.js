import React, { useEffect, useMemo, useState } from "react";
import DatesNum from "./components/DatesNum";
import DatesList from "./components/DatesList";
import DatesActions from "./components/DatesActions";
import axios from "axios";
import './css/App.css';

function App() {
  const [data,setData]=useState([]);
  const fetchData=useMemo(async()=>{
    const getData=await axios.get('data/data.json');
    return getData;
  },[])
  useEffect(()=>{
     fetchData.then(res=>setData(res.data))
     .catch(err=>console.log(err))
  },[])
  const displayAll=()=>{
    fetchData.then(res=>setData(res.data))
  }
  const deleteAll=()=>{
    setData([]);
  }
  return (
    <div className="container">
      <DatesNum  dataLength={data}/>
      <DatesList dataList={data}/>
      <DatesActions displayAll={displayAll} deleteAll={deleteAll}/>
    </div>
  );
}

export default App;
