import React, { Component } from 'react';
//import './App.css';

const TextField = ({name, onChange, label}) => (
    // <div className="TextField">
      
    //   <label> {label} </label></div>
    //   <input className="TextField" type="text" name={name} onChange = {onChange} />
    // </div>
    <div class="form-group row">
        <label for="label" class="col-sm-2 col-form-label">{label}</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputEmail3" placeholder={label} name={name} onChange = {onChange}/>
        </div>
    </div>
  )

  export default TextField;

  