import React, { useState } from "react";

export const BinaryChoice = (props) => {
    let [selected, setSelected] = useState(0)
    return (
        <>
            <div>
                <h5 className="prompt">{props.name}</h5>
            </div>
            <div className="inner">
                <div className="option" style={{ borderColor: (selected === 0) ? 'blue' : "#e5e5e5" }} onClick={() => setSelected(0)}>
                    <img src={props.icons[0]} alt={props.options[0]} className='img_option' />
                    <h6>{props.options[0]} </h6>
                </div>
                
                <div className="option" style={{ borderColor: (selected === 1) ? 'blue' : "#e5e5e5" }} onClick={() => setSelected(1)}>
                    <img src={props.icons[1]} alt={props.options[1]} className='img_option' />
                    <h6>{props.options[1]} </h6>
                </div>
            </div>
        </>
    )
}