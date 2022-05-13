import Head from 'next/head'
import Image from 'next/image'
import React, { Component, Fragment } from "react";
import styles from '../styles/Home.module.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={firstName:null,lastName :null,email:null,phonenumber:null}
  }

  handleChange=(e)=>{
    this.setState({firstName:e.target.value})
  }
  


render (){
  console.log("9kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkinside"+this.state.firstName)
  return (
    <div class="container" style={{display:"flex",width:"100vw",height:"100vh",flexDirection:"column",background:"steelblue"}}
      >
      <div style={{color: "white",textAlign:"center"}}>SIGN UP </div>
      <div>About</div>
      
      
     
       <div style ={{grid:"row" , display:"flex",backgroundImage:'url("https://media.gettyimages.com/photos/dubai-mega-city-picture-id183346577?s=2048x2048")', backgroundPosition:"center",width:"100vw",height:"100vh",backgroundSize:"cover",backgroundRepeat:"no-repeat", justifyContent:"center",alignItems:"center", flexDirection:"column"}} >
       <ul>
      <p> <b>FIRST NAME: <input type="text" value={this.state.firstName} onChange={this.handleChange} /></b></p>
      
     <p><b>LASTNAME:<input id=" "></input></b></p>
      
      <p><b>EMAIL ID:<input id=" "></input></b></p>
      
      <p><b>PHONE NUMBER:<input style= {{columnCount:"2",columnGap:"30px"}}id=" "></input></b></p>
      
      <p><button onClick={()=>this.onClickAction()}>signup</button></p>
      </ul>
      </div>
    
  
    
    </div>
    
  )
}
}