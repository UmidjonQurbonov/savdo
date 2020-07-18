import React from 'react';
import './container.css';

export default (props) => {
    return(
        <div className="content container col-md-10 col-sm-12 col-lg-6 col-xl-8 mx-auto py-3 px-4 bg-primary text-light">
            {props.children}
        </div>
    )
}