import React, { Component } from 'react';


const body={
    marginTop:'5em',
    backgroundImage: 'url("https://i.pinimg.com/564x/e9/d9/6f/e9d96fe75300aa522e6edf47438f76fe.jpg")',

    textAlign: 'center'
  
  }
  
class FinalPage extends Component {

  constructor(props) {
    super(props);
     this.state = { results:[
     
     ]
     
     };
   }
render() {
      console.log(this.props.location.state.var1)
      return (
        <div style={body}>
         <br/>
         <br/>
        <div>
        <h1>Analysis Report {this.props.location.state.var1}</h1>
        <br/>
        <div>{this.state.results.asma}</div>
        <br/>

  <div> {this.state.results.first}</div>
         <br/>
         <div>{this.state.results.others}</div> 
     <br/> 
     <br/>
     <br/>
     <br/>
     <br/>
     </div>
     <br/>
     <br/>

      </div>
      );
    }
  }
  
  export default FinalPage;
  
    
  
  
  
    
 


