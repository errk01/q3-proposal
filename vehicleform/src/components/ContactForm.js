import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from 'reactstrap';
import {connect} from 'react-redux'

class ContactForm extends React.Component {
  
  input({input, meta: {touched, error}, ...custom}){
    const hasError = touched && error !== undefined;
    return(
      <div>
    </div>
    )
  }
submit(){
  
}
  
  render(){
    const { handleSubmit } = this.props
  return (<form onSubmit={handleSubmit}>
    
    <Label for="exampleSelect">Make</Label>
    <Input xs="3" type="select" name="select" id="exampleSelect">
      <option>Ford</option>
      <option>Dodge</option>
      <option>Chevrolet</option>
      <option>GMC</option>
      <option>That import thing</option>
    </Input>
    <Label for="exampleSelect">Model</Label>
    <Input type="select" name="select" id="exampleSelect">
      <option>Super Sport</option>
      <option>GT</option>
      <option>R/T</option>
      <option>Cutlass S</option>
      <option>That import model thing</option>
    </Input>
    <Label for="exampleSelect">Year</Label>
    <Input type="number" min="1930" max="2018" step='1' id="exampleSelect"/>
    <Label for="exampleSelect">Engine</Label>
    <Input type="select" name="select" id="exampleSelect">
      <option>V6</option>
      <option>V8</option>
    </Input>
    <Label for="exampleText">Problem with Vehicel</Label>
    <Input type="textarea" name="text" id="exampleText"/>
    <Label for="exampleFile">File</Label>
    <Input type="file" name="file" id="exampleFile"/>
    <Label for="exampleText">Notes</Label>
    <Input type="textarea" name="text" id="exampleText"/>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
  
}
ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

}


const validate = values =>{
  const {partInput} = values
  const error ={};
  if(partInput || partInput.trim()===''){
    error.partInput='Part is required'
  }
}

export default ContactForm



