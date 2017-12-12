import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
          '@media (min-width : 500px)' : {
              width : '500px'
          }
    };
    return (
        <div className="Person" style={style}>
            <button type='button' className='btn btn-danger' onClick={props.click}>Delete Me</button>
            <p  style={{ color: 'Blue', marginTop : '15px' }}>I am  <strong>{props.name} </strong>and I am <strong>{props.age}</strong> years old </p>
            <p style={{ color: 'green' }}>{props.children}</p>
            <input type="text" className="form-control" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Radium(person);
