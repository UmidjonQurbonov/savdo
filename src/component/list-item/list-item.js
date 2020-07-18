import React from 'react';
import './list-item.css';

export default (props) => {
    const item = () => {
        return props.mahsulotlar.map(item => {
            return (<li className="d-flex justify-content-between py-2 border-bottom text-capitalize" key={item.id} >
                        <i>{item.nomi}</i>
                        <span className="fas fa-arrow-right"></span>
                        <b>{item.puli}so'm</b>
                    </li>)
                
            })
    };

    return(
        <div className="list-item mx-auto bg-primary text-light w-100" style={{fontSize:'20px'}}>
            <ul className="list-unstyled mb-3">
                {item()} 
            </ul>
            <hr/>
            <div className="">
                <p className="m-0">Jami pul miqdori : {props.jamiSumma}</p>
            </div>
        </div>
    )
}