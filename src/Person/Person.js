import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <button type='button' className='btn btn-danger' onClick={props.click}>Delete Me</button>
            <p  style={{ color: 'Blue' }}>I am  <strong>{props.name} </strong>and I am <strong>{props.age}</strong> years old </p>
            <p style={{ color: 'green' }}>{props.children}</p>
            <input type="text" className="form-control" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;
