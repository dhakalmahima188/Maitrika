import React from 'react';

export const Box = (props) => {
    let item = props.item
    console.log(item)
    return (
        <>
            <div className="box" style={{ backgroundColor: (item.key !== props.selected) ? 'white' : "#f0f4fd" }}
                onClick={() => props.onClick(item.key)}>
                <div className='imgAndText'>
                    <img src={item.image} alt="" className='img' />
                    <div className="textbox">
                        <h5 className="name">{item.name}</h5>
                        <p className="subject">{item.subject}</p>
                        <span className="detail">{item.detail}</span>
                    </div>
                </div>

                {item.important == 1 ?
                    <div className='Urgency'>High Risk</div>
                    : <div></div>
                }
            </div>
        </>
    )
}