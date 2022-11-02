import React, { useState } from 'react';
import { targetData } from './Data';
import { Box } from "./Box"
import "./tasks.css";

export const Tasks = () => {
  const [selected, setSelected] = useState(targetData[0].key);

  const updateSelected = (key) => {
    console.log(key)
    setSelected(key)
  }

  return (
    <>
    <div className='task-list'>
      {targetData.map(data => {
        return (<>
          <Box key={data.key}item={data} selected={selected} onClick={updateSelected}/>
        </>)
      })}
  </div>
  <div className='description'>
    {targetData.find(item=> item.key === selected).description}
  </div>
    </>
  )
};