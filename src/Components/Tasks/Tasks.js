import React, { useEffect, useState } from 'react';
import { targetData } from './Data';
import { Box } from "./Box"
import "./tasks.css";
import { BinaryChoice } from './binary';

import birth from '../../assets/newBorn.png';
import vaccine from '../../assets/vaccine.png';

function dataToHTML(item) {
  if (item.category === "text") {
    return <>{item.description}
    </>
  }
  else if (item.category === "fourm") {
    return <>
      <BinaryChoice name={"Gender"} icons={[birth, vaccine]} options={["male", "female"]} />
    </>
  }
}

export const Tasks = () => {
  const [selected, setSelected] = useState(targetData[0].key);

  const updateSelected = (key) => {
    setSelected(key)
  }


  return (
    <>
      <h4 className='area__name'>Amrita's Area, Sadar Marga, Ramaroshan Gaupalika, Achham</h4>
      <div className='tasks__container'>
        <div className='task__list'>
          {targetData.map(data => {
            return (<>
              <Box key={data.key} item={data} selected={selected} onClick={updateSelected} />
            </>)
          })}
        </div>
        <div className='task__detail'>
          {dataToHTML(targetData.find(item => item.key === selected))}
        </div>
      </div>
    </>
  )
};