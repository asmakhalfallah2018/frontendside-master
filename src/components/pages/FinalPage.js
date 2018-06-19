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
  
 
 
    
    componentDidMount() {
       const data = new FormData();
      fetch('http://localhost:8080/last', {
    method: 'POST',
    body: data
  })
  .then((response) => {
    console.log(response);
    response.json().then((results)=>this.setState({ results:results }))
  } )
  .catch(
    error => null // Handle the error response object
  
  )
  

    }
    render() {
      return (
        <div style={body}>
         <br/>
         <br/>
        <h1> results of extraction </h1>
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
     <br/>
     <br/>

      </div>
      );
    }
  }
  
  export default FinalPage;
  
    
  
  
  
    
 


