import React from 'react';
import './form-group.css';



export default (props) => {
    
    let onSubmit = (e) => {
        e.preventDefault();
        
    }
    return(
        <form onSubmit={onSubmit} >
            <div className="pt-2 pb-3 row">
                <div className="d-flex col-sm-10">
                    <div className="input-group">
                        <input type="text" placeholder="Mahsuot nomini kiriting " className="form-control" onChange={event => props.nominiOlish(event.target.value)} value={props.yangiNomi}/>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Pulini kiriting" onChange={event => props.puliniOlish(event.target.value)} value={props.yangiPuli}/>
                        <div className="input-group-append">
                            <span className="input-group-text">So'm</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2 text-right">
                    <button className="btn btn-warning" onClick={props.saqlash}>Saqlash</button>
                </div>
                <hr/>
            </div>
        </form>

    )
}