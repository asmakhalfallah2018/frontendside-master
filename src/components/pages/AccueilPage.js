import React from "react";
import './App.css';
import PropTypes from "prop-types";

const body={
  marginTop:'5em',
  backgroundImage: 'url("https://i.pinimg.com/564x/e9/d9/6f/e9d96fe75300aa522e6edf47438f76fe.jpg")',
  width:' 90%' ,
  height: '90%' ,
  textAlign: 'center'

}

class AccueilPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      var1: "",
      loading: false,
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(e) {
    e.preventDefault();
    const data = new FormData();
    
    data.append('file', e.target.files[0]);
 data.append('filename', "test");
    this.setState({
      loading: true,
    });
    fetch('http://localhost:8080/upload', { // Your POST endpoint
      method: 'POST',
      body: data
    })
    .then(
      response => {
        console.log(response);
        return response.json()
      } // if the response is a JSON object
    ).then(
      success => {
        console.log(success) // Handle the success response object
        this.setState({
          var1: success.var1,
          loading: false,
        })
      }
    ).catch(
      error => null // Handle the error response object
    );}

  onClick = (var1)=>{
   this.props.history.push("/final", {var1});
  }
    onShow(e){

      var fileDownload = require('js-file-download');

     
      const data = document.getElementById('pdf').files[0]
if(data){
   fileDownload(data, document.getElementById('pdf').files[0].name);
}
else {
  alert('There is no file to show . Please Upload a file ! ')
}
  }    
  onSho= file=>{
    const data = new FormData();
    
    data.append('file', document.getElementById('pdf').files[0]);
 data.append('filename', 'test');
 this.props.history.push("/final", {var1: this.state.var1});
 fetch('http://localhost:8080/showfile', { // Your POST endpoint
      method: 'POST',
      body : data
    })
    .then(
      response => {
        console.log(response);
        return response.json()
      } // if the response is a JSON object
    ).then(
      success => console.log(success) // Handle the success response object
    ).catch(
      error => null // Handle the error response object
    ) }
     
  render() {
    return ( <div style={body} >
    <br/>
    <br/>
    <label><p style={{width:'15em',textAlign: 'center'
    ,fontWeight:'bold',borderRadius:'5px',display:'inline-block',marginTop:'7em',marginLeft:'2em' , backgroundColor:'#D19275' ,padding: '8px 14px',
    color:'white'}} >Choose your PDF file </p></label>
      <br/>
      <br/>
      <br/>
          <form encType="multipart/form-data" >
          <input  id="pdf" type="file" onChange={this.handleUpload}  accept="application/pdf" />
          {
            this.state.loading &&
            <center>>

              <div className="loader"></div>
            </center>
          }
            
          <br/>
          <br/>
         
            </form>
            <br/>
            
            <button className="But" onClick={this.onShow}><span > Visualiser PDF </span></button>
    
            <br/>
            <br/>
            <br/>
            <button style={{display: 'inline-block',
  padding: '15px 25px' ,
  fontSize: '13px ',
  cursor: 'pointer',
  textAlign: 'center' ,
  textDecoration: 'none' ,
  outline: 'none',
  color: '#800000',
  backgroundColor: '#D2B48C',
  border: 'none',
  borderRadius: '15px',
  boxShadow: '0 9px #999',
  transform: 'translateY(4px)'}} onClick={() => this.onClick(this.state.var1)}> Convert</button>
  



            <br/>
            <br/>
            <button className="But" onClick={this.onSho}><span > trying imageMagick </span></button>
            <br/>
            </div>
    );
  }
}
AccueilPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
export default AccueilPage ;
           
