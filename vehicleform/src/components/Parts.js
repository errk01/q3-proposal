import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody} from 'reactstrap';
 import {connect}from 'react-redux';
 // import {add_item}from '../redux/partsAction';
 import {bindActionCreators} from 'redux';
 import {Link} from 'react-router-dom';

class Parts extends React.Component{
  
  
    render(){
      console.log("props", this.props);
    let listOfParts = this.props.part.map(part => <Card>
   {/* <CardImg top width="50%" src={`${this.props.part.url_img}`} alt="Card image cap" /> */}
       <CardBody>
         <CardTitle>{part.partName}</CardTitle>
         <CardSubtitle>${part.price}</CardSubtitle>
         <CardText>{part.detail}</CardText>
         <CardText>{part.partNumber}</CardText>
         <Link className='btn btn-default' to='/create'> Re-Submit</Link>
       </CardBody>
     </Card> )
      
      
    return (
      <div>
        {listOfParts}
      </div>

    );
  }
}
  const mapStateToProps = state =>({
    part: state.part
  })
  // const mapDispatchToProps = dispatch =>bindActionCreators({
  // 
  // }, dispatch)

  export default connect(mapStateToProps)(Parts);





