import React from 'react';

const TextField = ({name, onChange, label}) => (
    // <div className="TextField">
      
    //   <label> {label} </label></div>
    //   <input className="TextField" type="text" name={name} onChange = {onChange} />
    // </div>
    <div className="form-group row">
        <label for="label" className="col-sm-4 col-form-label">{label}</label>
        <div className="col">
        <input type="text" className="form-control" id="textField" placeholder={label} name={name} onChange = {onChange}/>
        </div>
    </div>
  )

  export default TextField;

  