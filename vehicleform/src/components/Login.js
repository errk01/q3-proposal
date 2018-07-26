import React from 'react';
import {Jumbotron, Container} from 'reactstrap';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'


const Login = ({}) => (<div>
  <Container >
    <div>
      <Jumbotron >
        <Container >
          <h1 className="display-3">Welcome to part order</h1>
          <p className="lead">This site helps find those parts that no one else has.</p>
        </Container>
      </Jumbotron>
    </div>

    <Form >
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="emailsomething@mail.co"/>
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell anyone!"/>
      </FormGroup>
      <Link className='btn btn-default' to='/create'> Submit</Link>
    </Form>
  </Container>
</div>);

export default Login;
