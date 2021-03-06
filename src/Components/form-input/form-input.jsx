import React from 'react';
import './form-input.scss';



const FormInput = ({ handleChange, label, ...ontherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} { ...ontherProps } />
        {
            label ?
             (<label className={`${ontherProps.value.length ? 'shrink' : ''} form-input-label`}> 
              {label} 
             </label>)
             : null
        }
    </div>
)


export default FormInput;