import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from 'reactstrap';
import Parts from './Parts'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {add_item} from '../redux/partsAction';

{/*table.text("url_img");
    table.string("partName");
    table.integer("partNumber");
    table.integer("price");
    table.text("detail");
    table.boolean("inCart");*/
}
class PartsForm extends React.Component {

  formSubmit = (values) => {
    console.log('values', values);
    this.props.add_item(values)
  }

  render() {

    return (<div>

      <Container >
        <Form onSubmit={this.props.handleSubmit(this.formSubmit)}>
          <legend>Parts Form</legend>

          <FormGroup>
            <Label for="exampleSelect">Part name</Label>
            <Field className="form-control" name="partName" component="input" type="text"/>

          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Part number</Label>
            <Field className="form-control" name="partNumber" component="input" type="number"/>

          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">price</Label>
            <Field className="form-control" name="price" component="input" type="number"/>

          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">detail</Label>
            <Field className="form-control" name="engine" component="input" type="text"/>
          </FormGroup>

          <Button >
            Submit
          </Button>
        </Form>
      </Container>
    </div>)
  }
}
PartsForm = reduxForm({form: 'parts'})(PartsForm)

const mapDispatchToProps = (dispatch) => bindActionCreators({
  add_item
}, dispatch)

export default connect(null, mapDispatchToProps)(PartsForm);