import React from 'react';

export const Box = (props) => {
    let item = props.item
    return (
        <>
            <div className="box" style={{ backgroundColor: (item.key !== props.selected) ? 'white' : "#e3f0f5" }}
                onClick={() => props.onClick(item.key)}>
                <img src={item.image} alt="" className='tasks__img' />
                <div className="tasks__textbox">
                    <h5 className="tasks__name">{item.name}</h5>
                    <p className="tasks__subject">{item.subject}</p>
                    {item.important == 1 ?
                        <div className='urgency'>High Risk</div>
                        : null
                    }
                </div>
                <h6 className='tasks__time'>{item.time}</h6>
            </div>
        </>
    )
}