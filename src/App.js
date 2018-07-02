import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import SignUp from './components/SignUp.js';
import SignIn from './components/SignIn.js';
import Facebook from './components/Facebook.js';
import DashBoard from './components/DashBoard.js';
import Admin from './components/Admin.js';
import AdminDash from './components/AdminDash.js';
import Particles from 'react-particles-js';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {


   constructor(){
            super();

           this.state={

               onlyAdmin: false,

              page:'',
              email:'',
              isSignedIn: false,
              route: 'signin',
              admin: false,
              user:{
                name:'',
                email:''

              }

               };
  }
onAdmin=(sta)=>{
  if(sta===true){
    this.setState({admin:true})
  }
}

changeData=(data)=>{
  this.setState({email:data});
}


onlyAdmin=(data)=>{
  this.setState({onlyAdmin:true})
}
 onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    } else if(route==='signin'){
       this.setState({isSignedIn:true})
    }

    this.setState({route: route});
  }
   loadUser = (data) => {
    this.setState({user: {
     
      name: data.name,
      email: data.email,
     
    }})
  }


  render() {
    return (
      <div className="App">
       <Particles className='particles'
              params={{
                particles:  {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
              }}
              style={{
                color:"#ff0000",
                width: '100%',
               
              }}
            />
       
   {(this.state.route==='home')? <DashBoard email={this.state.email} onlyAdmin={this.state.onlyAdmin} onRouteChange={this.onRouteChange}/> :(

         (this.state.isSignedIn===true&&this.state.route!=='signup')? (<SignIn changeData={this.changeData} onlyAdmin={this.state.onlyAdmin} onAdmin={this.onAdmin} onRouteChange={this.onRouteChange} 
                                     loadUser={this.loadUser}/>)
          :(this.state.isSignedIn===false)?<SignUp onlyAdmin={this.state.onlyAdmin}  onRouteChange={this.onRouteChange}  loadUser={this.loadUser}/>:((this.state.admin)? 
           <AdminDash/>:<Admin admin={this.onaAdmin} onRouteChange={this.onRouteChange}/> )


    )

}

           
   
   

        
       
       
        </div>
  
    
    );
  }
   

}

export default App;
