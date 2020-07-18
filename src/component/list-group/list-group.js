import React from 'react';
import './list-group.css';
import ListItem from '../list-item/list-item';

export default (props) => {
    const [...jamiSumma] = props.mahsulotlar.map(item => {
        return item.puli;
    })

    const haqiqiySumma = () => {
        let sum = 0;
        for (let index = 0; index < jamiSumma.length; index++) {
            sum += parseFloat(jamiSumma[index]);

        }
        return sum;
    }
    
    return(
        <div className="list-group">
            <ListItem mahsulotlar={props.mahsulotlar} jamiSumma={haqiqiySumma()}/>
        </div>
    )
}