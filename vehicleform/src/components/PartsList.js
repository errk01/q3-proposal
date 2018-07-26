// import React from 'react';
// import { connect } from 'react-redux'
//  import Part from './Parts';
// import {Container} from 'reactstrap';
// import { FormGroup, Label, Input } from 'reactstrap'
// 
// 
// class PartsList extends React.Component  {
//   state = {
//   filterPhrase: ''
// }
//   render(){
//   console.log('PARTSLIST PROPS: ', this.props)
//   if(this.props.parts){
//     let listOfParts = this.props.parts
//     .filter(part => part.partName.includes(this.state.filterPhrase))
//     .map(part => <Part key={part.id} part={part}/>)
//     return(
//       <div>
//       <FormGroup>
//             <Label>Search Term</Label>
// 
//             <Input type="text" onChange={e => this.setState({filterPhrase: e.target.value})} />
// 
//           </FormGroup>
// 
//         <Container>{listOfParts}</Container>
//         </div>
//     )
//   }
//   else{
//     return (
//       <div>Loading Parts</div>
//     )
//   }
// }
// }
// const mapStateToProps = state =>({
//   parts: state.parts =[]
// })
// 
// export default connect(mapStateToProps)(PartsList);
// 
// 
// 
// 
// 
// 
